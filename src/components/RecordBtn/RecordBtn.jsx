import React, { useState } from "react"
import { getAudioMedia } from "../getDisplayMedia"

import "./RecordBtn.scss"

function RecordBtn({ displaySource }) {
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setmediaRecorder] = useState(null)

  async function startRecording() {
    setIsRecording(true)

    // Add microphone audioTrack to videoSource
    const audioSource = await getAudioMedia()
    audioSource.getAudioTracks().forEach((audioTrack) => {
      displaySource.addTrack(audioTrack)
    })

    let options = { mimeType: "video/webm;codecs=vp8" }
    const mediaRecorder = new MediaRecorder(displaySource, options)

    let recordedChunks = []
    mediaRecorder.ondataavailable = function (e) {
      if (e.data.size > 0) recordedChunks.push(e.data)
    }

    mediaRecorder.onstop = function () {
      saveFile(recordedChunks)
      recordedChunks = []
    }

    mediaRecorder.start()
    setmediaRecorder(mediaRecorder)
  }

  async function stopRecording() {
    setIsRecording(false)
    mediaRecorder.stop()
  }

  function saveFile(recordedChunks) {
    const blob = new Blob(recordedChunks, { type: "video/webm" })

    const dateTime = new Date()
      .toLocaleString()
      .replace(" ", "_")
      .replace(",", "")
    const fileName = "Recording_" + dateTime

    const downloadLink = document.createElement("a")
    downloadLink.href = URL.createObjectURL(blob)
    downloadLink.download = `${fileName}`
    downloadLink.click()

    URL.revokeObjectURL(blob)
    downloadLink.remove()
  }

  return (
    <div className="stickyBottom">
      {isRecording ? (
        <button className="wideBtn stopBtn" onClick={stopRecording}>
          Stop
        </button>
      ) : (
        <button className="wideBtn startBtn" onClick={startRecording}>
          Start
        </button>
      )}
    </div>
  )
}

export default RecordBtn
