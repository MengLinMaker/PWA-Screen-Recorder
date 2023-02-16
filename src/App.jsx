import React, { useState } from "react"

import "./App.scss"
import { Navbar, RecordBtn, VideoPlayer, SourceInit } from "./components"

function App() {
  const [displaySource, setDisplaySource] = useState(false)

  const elements = (
    <>
      <VideoPlayer
        displaySource={displaySource}
        setDisplaySource={setDisplaySource}
      />
      <RecordBtn displaySource={displaySource} />
    </>
  )

  return (
    <div className="colflex">
      <Navbar />
      {displaySource ? (
        elements
      ) : (
        <SourceInit setDisplaySource={setDisplaySource} />
      )}
    </div>
  )
}

export default App
