import React from "react"
import "./Navbar.scss"
import githubLogo from "../../assets/MengLinMaker.svg"

function Navbar() {
  return (
    <nav className="nav">
      <h3 className="nav--title">Web Screen Recorder</h3>
      <a
        className="github-link"
        href="https://github.com/MengLinMaker/PWA-Screen-Recorder"
        target="_blank"
      >
        <img src={githubLogo} className="icon" alt="Github logo" />
        <h4>MengLinMaker</h4>
      </a>
    </nav>
  )
}

export default Navbar
