import hotkeys from 'hotkeys-js'
import raf from '@internet/raf'
import Scene from 'abstractions/Scene'
import points from './points.csv'

window.store = {
  debug: false,

  scene: {
    color: '#222',
    padding: 100 // px
  },

  phare: {
    // TODO: awakeDuration & disabledDuration
    duration: 4 * 1000, // ms
    base: {
      color: 'rgba(0, 0, 0, 0.2)',
      radius: 800 / 2 // mm
    },

    led: {
      length: 1700 // mm
    },

    arm: {
      color: '#000',
      length: 3000, // mm
      offset: -500, // mm
      thickness: 80 // mm
    }
  }
}

const canvas = document.querySelector('canvas')
window.scene = new Scene(canvas, points.map(({x, y}) => ([x, -y])))

raf.add(dt => {
  try {
    window.scene.update(dt)
  } catch (error) {
    console.error(error)
    raf.stop()
  }
})

hotkeys('w', () => {
  window.store.debug = !window.store.debug
})

hotkeys('r', () => window.scene.clear())
