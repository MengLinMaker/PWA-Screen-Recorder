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

    mediaRecorder.ondataavailable = function (e) {
      if (e.data.size > 0) recordedChunks.push(e.data)
    }

    let recordedChunks = []
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
    let fileName = window.prompt("Enter file name"),
      downloadLink = document.createElement("a")
    document.body.appendChild(downloadLink)
    downloadLink.href = URL.createObjectURL(blob)

    // Check if file is saved
    if (fileName != null) {
      // Give default name for unnamed video files
      if (fileName == "") {
        const dateTime = new Date()
          .toLocaleString()
          .replace(" ", "_")
          .replace(",", "")
        fileName = "Recording_" + dateTime
      }
      downloadLink.download = `${fileName}`
      downloadLink.click()
      URL.revokeObjectURL(blob) // clear from memory
      document.body.removeChild(downloadLink)
    }
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
