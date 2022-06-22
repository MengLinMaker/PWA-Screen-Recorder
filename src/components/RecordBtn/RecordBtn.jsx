import React, { useState } from 'react'

import './RecordBtn.scss'

function RecordBtn({source}) {
  const [isRecording, setIsRecording] = useState(false)
  console.log(source)

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