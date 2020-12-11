document
  .getElementById('stopBtn')
  .addEventListener('click', ({ target }) => {
    const startBtn = document.getElementById('startBtn')
    const saveBtn = document.getElementById('saveBtn')
    const selectVideo = document.getElementById('selectVideo')

    window.mediaRecorder.stop()
    
    startBtn
      .classList
      .remove('is-danger')
    
    startBtn.textContent = 'Start'
    
    target.setAttribute('disabled', 'disabled')
    
    startBtn.removeAttribute('disabled')
    saveBtn.removeAttribute('disabled')
    selectVideo.removeAttribute('disabled')
  })