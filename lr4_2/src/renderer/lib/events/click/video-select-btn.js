const getVideoSources = require('../../get-video-resources')

document
  .getElementById('selectVideo')
  .addEventListener('click', getVideoSources)