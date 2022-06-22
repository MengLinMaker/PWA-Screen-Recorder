import React, { useState } from 'react'

import './RecordBtn.scss'

function RecordBtn(props) {
  const [isRecording, setIsRecording] = useState(false)

  async function startRecording() {
    setIsRecording(true)
  }

  async function stopRecording() {
    setIsRecording(false);
  }

  return (
    <div className='stickyBottom'>
      {isRecording ? 
      <button className="wideBtn stopBtn" onClick={stopRecording}>Stop</button>
      :
      <button className="wideBtn startBtn" onClick={startRecording}>Start</button>
      }
    </div>
  );
}

export default RecordBtn