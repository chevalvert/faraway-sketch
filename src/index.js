import { random } from 'missing-math'
import hotkeys from 'hotkeys-js'
import raf from '@internet/raf'

import Phare from 'abstractions/Phare'

const RADIUS = 100
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 25
canvas.height = window.innerHeight - 25
canvas.style.width = canvas.width + 'px'
canvas.style.height = canvas.height + 'px'

const phares = []
canvas.addEventListener('click', e => {
  const position = [e.offsetX, e.offsetY]
  const active = phares.find(phare => phare.isUnder(position))

  if (active) active.trigger(true)
  else phares.push(new Phare(position))
})

raf.add(dt => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  phares.forEach(phare => phare.update())
  phares.forEach(phare => {
    phares.forEach(candidate => {
      phare.hit(candidate) && candidate.trigger()
    })
    phare.render(ctx)
  })
})

hotkeys('w', () => {
  window.ENV.showGuides = !window.ENV.showGuides
})

hotkeys('space', e => {
  e.preventDefault()
  for (let i = 0; i < 10; i++) {
    const radius = random(RADIUS * 0.5, RADIUS * 1.5)
    const x = random(radius, canvas.width - radius)
    const y = random(radius, canvas.height - radius)
    phares.push(new Phare([x, y], radius))
  }
})
