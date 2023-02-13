import React, { useRef, useEffect } from "react";
import "./VideoPlayer.scss";

function VideoPlayer({ source, setSource }) {
  async function getVideoSources() {
    const source = await navigator.mediaDevices.getDisplayMedia({
      video: {
        mandatory: {
          maxWidth: 1920,
          maxHeight: 1080,
          maxFrameRate: 60,
        },
      },
    });
    setSource(source);
    streamVideo(source);
  }

  const videoRef = useRef(null);
  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.srcObject = source;
    videoElement.play();
  }, [videoRef]);

  async function streamVideo(source) {
    const videoElement = videoRef.current;
    videoElement.srcObject = source;
    videoElement.play();
  }

  return (
    <section className="video--frame" onClick={getVideoSources}>
      <video id="video" className="video--player" ref={videoRef} />
      <h3 className="hovertext">Select Source</h3>
    </section>
  );
}

export default VideoPlayer;
