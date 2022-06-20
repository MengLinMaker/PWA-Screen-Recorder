import React, { useRef } from 'react'
import './VideoPlayer.scss'

function VideoPlayer() {


  async function getVideoSources() {
    navigator.mediaDevices.getDisplayMedia({video: true})
    .then(source => {
    
      streamVideo(source)
  
    })
  }


  const videoRef = useRef(null)
  async function streamVideo(source) {
    console.log(source)
    const constraints = {
      video: { deviceId: source.id}
    }

    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    const videoElement = videoRef.current
    videoElement.srcObject = stream
    videoElement.play()
  }

  return (
    <video
      id="video"
      className="videoplayer"
      ref={videoRef}
      onClick={getVideoSources}
    ></video>
  );
}

export default VideoPlayer