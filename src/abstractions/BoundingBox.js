export default function (points) {
  const bbox = {
    xmin: Number.POSITIVE_INFINITY,
    xmax: Number.NEGATIVE_INFINITY,
    ymin: Number.POSITIVE_INFINITY,
    ymax: Number.NEGATIVE_INFINITY,
    get width () { return Math.abs(this.xmax - this.xmin) },
    get height () { return Math.abs(this.ymax - this.ymin) }
  }

  for (const [x, y] of points) {
    if (x < bbox.xmin) bbox.xmin = x
    if (x > bbox.xmax) bbox.xmax = x
    if (y < bbox.ymin) bbox.ymin = y
    if (y > bbox.ymax) bbox.ymax = y
  }

  return bbox
}
