import intersect from 'segseg'
import { radians, random } from 'missing-math'
import dist from 'utils/distance'

export default class Phare {
  constructor ([x, y], radius = 100) {
    this.position = [x, y]
    this.radius = radius

    this.alpha = random(0, 360)
    this.talpha = this.alpha
  }

  get isActive () {
    return Math.abs(this.alpha - this.talpha) > 10
  }

  get ray () {
    return [
      this.position,
      [
        this.position[0] + Math.sin(radians(this.alpha)) * this.radius,
        this.position[1] + Math.cos(radians(this.alpha)) * this.radius
      ]
    ]
  }

  isUnder (target) {
    return dist(this.position, target) < this.radius
  }

  update () {
    if (!this.isActive) return
    this.alpha += (this.talpha - this.alpha) * 0.02
  }

  trigger (force = false) {
    if (!force && this.isActive) return
    this.talpha += 270 // random(0, 360)
  }

  hit (phare) {
    if (phare === this) return
    return intersect([], ...this.ray, ...phare.ray)
  }

  render (ctx) {
    ctx.save()

    if (window.ENV.showGuides) {
      ctx.save()
      ctx.setLineDash([5, 10])
      ctx.strokeStyle = this.isActive ? '#ff44ff' : '#4b96ff'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(...this.position, this.radius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    ctx.strokeStyle = this.isActive ? '#9a1fff' : '#4b96ff'
    ctx.fillStyle = ctx.strokeStyle
    ctx.lineCap = 'round'
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(...this.ray[0])
    ctx.lineTo(...this.ray[1])
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(...this.position, ctx.lineWidth * 1, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }
}
