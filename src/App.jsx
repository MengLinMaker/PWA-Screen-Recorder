import React, { useState } from 'react'

import './App.scss'
import { Navbar, RecordBtn, VideoPlayer, SourceInit } from './components'

function App() {
  const [source, setSource] = useState(false)

  const elements = (
    <>
      <VideoPlayer source={source} setSource={setSource} />
      <RecordBtn source={source} />
    </>
  )
  
  return (
    <div className="colflex">
      <Navbar />
      {source ? elements : <SourceInit setSource={setSource}/>}
    </div>
  );
}

export default App