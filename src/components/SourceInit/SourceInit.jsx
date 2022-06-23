import React from 'react'
import './SourceInit.scss'
import img from '../../assets/leaves.jpg'

function SourceInit({setSource}) {
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
    setSource(source)
  }
  
  return (
    <section className="sourceInit" onClick={getVideoSources}>
      <img src={img} alt="ambient dark background"></img>
      <div className="hovertext--container" />
      <div className="hovertext--container" />
      <div className="hovertext--container" />
      <h3 className="hovertext">Select Source</h3>
    </section>
  );
}

export default SourceInit