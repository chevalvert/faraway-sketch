import Phare from 'abstractions/Phare'
import BoundingBox from 'abstractions/BoundingBox'

export default class Scene {
  constructor (canvas, points) {
    this.handleResize = this.handleResize.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.update = this.update.bind(this)

    this.props = { canvas, points }

    this.ctx = canvas.getContext('2d')
    this.bbox = new BoundingBox(points)
    this.phares = points.map(([x, y]) => new Phare(x, y))

    this.handleResize()

    window.addEventListener('resize', this.handleResize)
    this.props.canvas.addEventListener('click', this.handleClick)
  }

  get width () { return this.props.canvas.width }
  get height () { return this.props.canvas.height }

  clear () {
    this.phares.length = 0
  }

  add (x, y) {
    this.phares.push(new Phare(...this.screenToWorld(x, y)))
  }

  handleResize () {
    this.dpi = 1

    this.props.canvas.width = window.innerWidth * this.dpi
    this.props.canvas.height = window.innerHeight * this.dpi
    this.props.canvas.style.width = window.innerWidth + 'px'
    this.props.canvas.style.height = window.innerHeight + 'px'

    this.scale = Math.min(
      (this.width - window.store.scene.padding * 2) / this.bbox.width,
      (this.height - window.store.scene.padding * 2) / this.bbox.height
    )

    this.offset = [
      (((this.width / this.scale) - this.bbox.width) / 2) - this.bbox.xmin,
      (((this.height / this.scale) - this.bbox.height) / 2) - this.bbox.ymin
    ]
  }

  // click on a Phare to trigger
  // click on the Scene to add a Phare
  // shift + click on a Phare to delete
  handleClick (e) {
    const position = this.screenToWorld(e.offsetX, e.offsetY)
    const activeIndex = this.phares.findIndex(phare => phare.isUnder(position))
    if (activeIndex > -1) {
      if (e.shiftKey) this.phares.splice(activeIndex, 1)
      else this.phares[activeIndex].trigger(true)
    } else {
      this.phares.push(new Phare(...this.screenToWorld(e.offsetX, e.offsetY)))
    }
  }

  screenToWorld (x, y) {
    return [
      x / (this.scale / this.dpi) - this.offset[0],
      y / (this.scale / this.dpi) - this.offset[1]
    ]
  }

  update (dt) {
    this.props.canvas.style['background'] = window.store.scene.color
    this.ctx.clearRect(0, 0, this.width, this.height)

    this.ctx.save()
    this.ctx.scale(this.scale, this.scale)
    this.ctx.translate(this.offset[0], this.offset[1])

    this.phares.forEach(phare => phare.update(dt))
    this.phares.forEach(phare => {
      this.phares.forEach(candidate => {
        phare.hit(candidate) && candidate.trigger()
      })

      phare.render(this.ctx, this.scale * this.dpi)
      if (window.store.debug) phare.debugGeometry(this.ctx, this.scale * this.dpi)
    })

    this.ctx.restore()
  }
}
