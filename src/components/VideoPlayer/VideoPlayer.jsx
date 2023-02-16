import React, { useRef, useEffect } from "react"
import { getDisplayMedia } from "../getDisplayMedia"
import "./VideoPlayer.scss"

function VideoPlayer({ displaySource, setDisplaySource }) {
  async function getVideoSources() {
    try {
      const displaySource = await getDisplayMedia()
      setDisplaySource(displaySource)
      streamVideo(displaySource)
    } catch {}
  }

  const videoRef = useRef(null)
  useEffect(() => {
    // Return function in useEffect executes once in React 18+
    return () => {
      streamVideo(displaySource)
    }
  }, [videoRef])

  async function streamVideo(displaySource) {
    const videoElement = videoRef.current
    videoElement.srcObject = displaySource
    videoElement.play()
  }

  return (
    <section className="video--frame" onClick={getVideoSources}>
      <video id="video" muted className="video--player" ref={videoRef} />
      <h3 className="hovertext">Select Source</h3>
    </section>
  )
}

export default VideoPlayer
