/* global Audio */
import intersect from 'segseg'
import { degrees, radians, random, lerp, clamp } from 'missing-math'
import dist from 'utils/distance'
import fallOff from 'utils/simulate-falloff'

export default class Phare {
  constructor (x, y) {
    this.position = [x, y]
    this.radius = window.store.phare.arm.length + window.store.phare.arm.offset

    this.alpha = random(0, 360)
    this.state = 'iddle'
    this.direction = Math.sign(random(-1, 1))
    this.sound = new Audio('ding.wav')

    this.seed = Math.random() * 9999
  }

  get state () { return this._state }
  set state (s) {
    this.stateTime = 0
    this._state = s
  }

  get body () {
    return [
      this.position,
      [
        this.position[0] + Math.cos(radians(this.alpha)) * this.radius,
        this.position[1] + Math.sin(radians(this.alpha)) * this.radius
      ]
    ]
  }

  get sensor () {
    return [
      [
        this.position[0] + Math.cos(radians(this.alpha)) * this.radius * 0.9,
        this.position[1] + Math.sin(radians(this.alpha)) * this.radius * 0.9
      ],
      [
        this.position[0] + Math.cos(radians(this.alpha)) * this.radius,
        this.position[1] + Math.sin(radians(this.alpha)) * this.radius
      ]
    ]
  }

  isUnder (realWorldTarget) {
    return dist(this.position, realWorldTarget) < this.radius
  }

  update (dt) {
    this.stateTime += dt

    switch (this.state) {
      case 'iddle': {
        this.alpha += this.direction * 0.1
        break
      }

      case 'awake': {
        if (this.stateTime > window.store.phare.duration.awake) {
          this.state = 'iddle'
          this.direction = -this.direction
          break
        }

        const brake = 1 - (this.stateTime / window.store.phare.duration.awake) ** 2

        // SEE https://github.com/Hemisphere-Project/FarAway/blob/master/Simulation/Acceleration_theorique_FarAway/Acceleration_theorique_FarAway.pde
        const J = 2.73
        const K1 = 4.5 / (J * 2)
        const pt = this.stateTime - dt
        const t = this.stateTime

        const step = degrees(K1 * pt * pt / 1000000) - degrees(K1 * t * t / 1000000)
        this.alpha += step * brake * -this.direction
        break
      }
    }
  }

  trigger (force = false) {
    this.sound.play()

    // XXX: Toggle multiple trigger in one awake session
    if (!force && this.state === 'awake') return
    // if (!force && this.state === 'awake' && this.stateTime < 500) return

    this.sound.currentTime = 0
    this.state = 'awake'
  }

  hit (phare) {
    if (phare === this) return
    return intersect([], ...this.body, ...phare.sensor)
  }

  render (ctx, scale) {
    ctx.lineCap = 'round'
    const { base, arm, led, displayLights } = window.store.phare

    ctx.save()
    ctx.translate(this.position[0], this.position[1])
    ctx.rotate(radians(this.alpha))

    // Render base
    ctx.fillStyle = base.color
    ctx.beginPath()
    ctx.arc(0, 0, base.radius, 0, Math.PI * 2)
    ctx.fill()

    if (displayLights) { // Render light
      const light = this.computeLight()
      const a = (arm.length + arm.offset) - led.length
      const b = (arm.length + arm.offset)
      fallOff(({ intensity, density }) => {
        const [R, G, B] = light.rgba
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${R}, ${G}, ${B}, ${intensity})`
        ctx.lineWidth = density
        ctx.moveTo(lerp(a, b, light.bounds[0]), 0)
        ctx.lineTo(lerp(a, b, light.bounds[1]), 0)
        ctx.stroke()

        // HACK: Blink a white LED when iddle
        if (this.state === 'iddle') {
          const t = (Math.sin(this.seed + this.stateTime / 500) + 1) / 2
          ctx.beginPath()
          ctx.strokeStyle = `rgba(255, 255, 255, ${intensity * 2 * t})`
          ctx.moveTo(b, 0)
          ctx.lineTo(b, 0)
          ctx.stroke()
        }
      }, {
        initialIntensity: light.rgba[3],
        initialDensity: Math.max(1 / scale, arm.thickness),
        passes: 8
      })
    }

    // Render arm
    ctx.beginPath()
    ctx.strokeStyle = arm.color
    ctx.lineWidth = Math.max(1 / scale, arm.thickness)
    ctx.moveTo(arm.offset, 0)
    ctx.lineTo(arm.length + arm.offset, 0)
    ctx.stroke()

    // Render back light
    displayLights && fallOff(({ intensity, density }) => {
      ctx.fillStyle = `rgba(255, 0, 0, ${intensity})`
      ctx.beginPath()
      ctx.arc(arm.offset, 0, density, 0, Math.PI * 2)
      ctx.fill()
    }, {
      passes: 3,
      initialIntensity: 0.2,
      initialDensity: arm.thickness / 2
    })

    ctx.restore()
  }

  computeLight () {
    switch (this.state) {
      case 'iddle': {
        const t = clamp((this.stateTime / 1000) * 2, 0, 1)
        return {
          rgba: [255, 0, 0, t * 0.3],
          bounds: [0, 1]
        }
      }

      case 'awake': {
        const t1 = clamp(this.stateTime / 50, 0, 1)
        const t2 = (1 - (this.stateTime / window.store.phare.duration.awake) ** 3)
        return {
          rgba: [255, 255, 255, t2],
          bounds: [1 - t1, 1]
        }
      }
    }
  }

  debugGeometry (ctx, scale) {
    switch (this.state) {
      default:
      case 'iddle': ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; break
      case 'awake': ctx.strokeStyle = 'rgba(255, 255, 255, 1)'; break
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
    ctx.lineWidth = 1 / scale

    // Radius
    ctx.beginPath()
    ctx.arc(this.position[0], this.position[1], this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    // Ray
    ctx.beginPath()
    ctx.strokeStyle = 'cyan'
    ctx.moveTo(this.sensor[0][0], this.sensor[0][1])
    ctx.lineTo(this.sensor[1][0], this.sensor[1][1])
    ctx.stroke()
  }
}
