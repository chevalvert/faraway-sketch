export default () => window.ENV.production
  ? {
    background: 'black',
    radius: 'transparent',
    'radius-active': 'transparent',
    arm: 'rgba(255, 255, 255, 0.3)',
    'arm-active': 'white'
  }
  : {
    background: 'white',
    radius: '#4b96ff',
    'radius-active': '#ff44ff',
    arm: '#9a1fff',
    'arm-active': '#4b96ff'
  }
