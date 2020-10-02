export default () => ({
  background: window.ENV.production ? 'black' : 'white',
  radius: window.ENV.production ? 'transparent' : '#4b96ff',
  'radius-active': window.ENV.production ? 'transparent' : '#ff44ff',

  arm: window.ENV.production ? 'rgba(255, 255, 255, 0.3)' : '#9a1fff',
  'arm-active': window.ENV.production ? 'white' : '#4b96ff'
})
