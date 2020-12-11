document
  .getElementById('startBtn')
  .addEventListener('click', ({ target }) => {
    const stopBtn = document.getElementById('stopBtn')
    const saveBtn = document.getElementById('saveBtn')
    const selectVideo = document.getElementById('selectVideo')

    stopBtn.removeAttribute('disabled')
    saveBtn.setAttribute('disabled', 'disabled')
    selectVideo.setAttribute('disabled', 'disabled')
    target.setAttribute('disabled', 'disabled')
    
    window.mediaRecorder.start()
  
    target
      .classList
      .add('is-danger')
    
    target.textContent = 'Recording'
  })