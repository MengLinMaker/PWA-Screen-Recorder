import React from 'react'

import './App.scss'
import { Navbar, SourceSelector, VideoPlayer } from './components'

function App() {
  return (
    <div>
      <Navbar/>
      <SourceSelector/>
      <VideoPlayer/>
    </div>
  )
}

export default App