import React from 'react'
import './SourceSelector.scss'

function SourceSelector({ sourceSelect }) {
  async function getVideoSources() {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then((screenStream) => {
        console.log(screenStream);
      });
  }

  return (
    <button className="smallBtn" onClick={getVideoSources}>
      Source
    </button>
  );
}

export default SourceSelector