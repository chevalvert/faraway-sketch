import intersect from 'segseg'
import { degrees, radians, random, lerp, clamp } from 'missing-math'
import dist from 'utils/distance'

function fallOff (render, { passes = 5, initialIntensity = 1, initialDensity = 1 } = {}) {
  for (let i = 0; i < passes; i++) {
    const n = i / passes
    const intensity = i ? lerp(initialIntensity * 0.1, 0, 1 - n ** 2) : initialIntensity
    const density = initialDensity * (i ? (100 - (n ** 1.3) * 100) : 3)
    if (intensity < 0.0001) break

    render({ intensity, density })
  }
}

export default class Phare {
  constructor (x, y) {
    this.position = [x, y]
    this.radius = window.store.phare.arm.length + window.store.phare.arm.offset

    this.alpha = random(0, 360)
    this.ellapsedTime = 99999
  }

  get state () {
    if (this.ellapsedTime < window.store.phare.duration.awake) return 'awake'
    if (this.ellapsedTime < window.store.phare.duration.awake + window.store.phare.duration.disabled) return 'disabled'
    return 'iddle'
  }

  get ray () {
    return [
      this.position,
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
    this.ellapsedTime += dt

    // WIP
    if (this.ellapsedTime > window.store.phare.duration.awake * random(10, 50)) this.trigger(true)

    if (this.state !== 'awake') return

    const brake = 1 - (this.ellapsedTime / window.store.phare.duration.awake) ** 2

    // SEE https://github.com/Hemisphere-Project/FarAway/blob/master/Simulation/Acceleration_theorique_FarAway/Acceleration_theorique_FarAway.pde
    const J = 2.73
    const K1 = 4.5 / (J * 2)
    const pt = this.ellapsedTime - dt
    const t = this.ellapsedTime

    const step = degrees(K1 * pt * pt / 1000000) - degrees(K1 * t * t / 1000000)
    this.alpha += step * brake
  }

  trigger (force = false) {
    if (!force && this.state !== 'iddle') return
    this.ellapsedTime = 0
  }

  hit (phare) {
    if (phare === this) return
    return intersect([], ...this.ray, ...phare.ray)
  }

  render (ctx, scale) {
    ctx.lineCap = 'round'
    const { base, arm, led } = window.store.phare

    ctx.save()
    ctx.translate(this.position[0], this.position[1])
    ctx.rotate(radians(this.alpha))

    // Render base
    ctx.fillStyle = base.color
    ctx.beginPath()
    ctx.arc(0, 0, base.radius, 0, Math.PI * 2)
    ctx.fill()

    { // Render light
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
    fallOff(({ intensity, density }) => {
      ctx.fillStyle = `rgba(255, 0, 0, ${intensity})`
      ctx.beginPath()
      ctx.arc(arm.offset, 0, density, 0, Math.PI * 2)
      ctx.fill()
    }, {
      passes: 6,
      initialIntensity: 0.3,
      initialDensity: arm.thickness
    })

    ctx.restore()
  }

  computeLight () {
    switch (this.state) {
      default:
      case 'disabled': {
        return {
          rgba: [255, 0, 0, 0.2],
          bounds: [0, 1]
        }
      }

      case 'iddle': {
        return {
          rgba: [255, 255, 255, Math.sin(this.alpha + this.ellapsedTime / 1000) * 0.3],
          bounds: [0.9, 1]
        }
      }

      case 'awake': {
        const t = clamp(this.ellapsedTime / 1000, 0, 1)
        return {
          rgba: [255, 255, 255, t],
          bounds: [0, t]
        }
      }
    }
  }

  debugGeometry (ctx, scale) {
    switch (this.state) {
      default:
      case 'disabled': ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)'; break
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
    ctx.moveTo(this.ray[0][0], this.ray[0][1])
    ctx.lineTo(this.ray[1][0], this.ray[1][1])
    ctx.stroke()
  }
}
