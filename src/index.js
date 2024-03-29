import hotkeys from 'hotkeys-js'
import raf from '@internet/raf'
import Scene from 'abstractions/Scene'
import points from './points.csv'

window.addEventListener('click', () => {
  document.getElementById('clickToStart').remove()

  window.store = {
    debug: false,

    scene: {
      color: '#333',
      padding: 200 // px
    },

    phare: {
      displayLights: true,

      duration: {
        awake: 3.5 * 1000 // ms
      },

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
  window.scene = new Scene(canvas, points.filter(({x}) => !isNaN(x)).map(({x, y}) => ([x, -y])))

  raf.add(dt => {
    try {
      window.scene.update(dt)
    } catch (error) {
      console.error(error)
      raf.stop()
    }
  })

  hotkeys('w', () => { window.store.debug = !window.store.debug })
  hotkeys('l', () => { window.store.phare.displayLights = !window.store.phare.displayLights })
  hotkeys('r', () => window.scene.clear())
}, { once: true })
