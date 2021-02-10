import { lerp } from 'missing-math'

export default function (render, { passes = 5, initialIntensity = 1, initialDensity = 1 } = {}) {
  for (let i = 0; i < passes; i++) {
    const n = i / passes
    const intensity = i ? lerp(initialIntensity * 0.1, 0, 1 - n ** 2) : initialIntensity
    const density = initialDensity * (i ? (100 - (n ** 1.3) * 100) : 3)
    if (intensity < 0.0001) break

    render({ intensity, density })
  }
}
