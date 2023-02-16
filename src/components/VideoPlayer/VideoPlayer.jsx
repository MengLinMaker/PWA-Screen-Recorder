import React, { useRef, useEffect } from "react"
import getDisplayMedia from "../getDisplayMedia"
import "./VideoPlayer.scss"

function VideoPlayer({ source, setSource }) {
  async function getVideoSources() {
    try {
      const source = await getDisplayMedia()
      setSource(source)
      streamVideo(source)
    } catch {}
  }

  const videoRef = useRef(null)
  useEffect(() => {
    // Return function in useEffect executes once in React 18+
    return () => {
      streamVideo(source)
    }
  }, [videoRef])

  async function streamVideo(source) {
    const videoElement = videoRef.current
    videoElement.srcObject = source
    videoElement.play()
  }

  return (
    <section className="video--frame" onClick={getVideoSources}>
      <video id="video" className="video--player" ref={videoRef} />
      <h3 className="hovertext">Select Source</h3>
    </section>
  )
}

export default VideoPlayer
