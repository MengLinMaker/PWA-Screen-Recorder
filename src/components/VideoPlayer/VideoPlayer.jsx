import React, { useRef } from 'react'
import './VideoPlayer.scss'

function VideoPlayer() {

  async function getVideoSources(props) {
    const source = await navigator.mediaDevices.getDisplayMedia({video: true})
    streamVideo(source)
  }

  const videoRef = useRef(null)
  async function streamVideo(source) {
    const videoElement = videoRef.current
    videoElement.srcObject = source
    videoElement.play()
  }

  return (
    <section className='video--frame'>
      <video
        id="video"
        className="video--player"
        ref={videoRef}
        onClick={getVideoSources}
      >hello</video>
      <h3 className='hovertext'>Select Source</h3>
    </section>
  );
}

export default VideoPlayer