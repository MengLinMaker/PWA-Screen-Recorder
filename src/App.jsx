import React from 'react'

import './App.scss'
import { Navbar, RecordBtn, SourceSelector, VideoPlayer } from './components'

function App() {


  return (
    <div>
      <Navbar />
      <SourceSelector />
      <section className="colflex">
        <div className="" />
        <VideoPlayer />
        <RecordBtn />
      </section>
    </div>
  );
}

export default App