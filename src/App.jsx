import React from 'react'

import './App.scss'
import { Navbar, RecordBtn, VideoPlayer } from './components'

function App() {


  return (
    <div className="colflex">
      <Navbar />
      <div className="spacer" />
      <VideoPlayer />
      <RecordBtn />
    </div>
  );
}

export default App