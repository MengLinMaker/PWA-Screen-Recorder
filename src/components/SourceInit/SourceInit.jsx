import React from 'react'
import './SourceInit.scss'
import img from '../../assets/leaves.jpg'

function SourceInit({setSource}) {
  async function getVideoSources() {
    const source = await navigator.mediaDevices.getDisplayMedia({video: true});
    setSource(source)
  }
  
  return (
    <section className="sourceInit" onClick={getVideoSources}>
      <img src={img}></img>
      <div className="hovertext--container" />
      <div className="hovertext--container" />
      <div className="hovertext--container" />
      <h3 className="hovertext">Select Source</h3>
    </section>
  );
}

export default SourceInit