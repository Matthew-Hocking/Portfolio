import React from 'react'
import { Link } from 'react-router-dom'

import LandingTypewriter from './LandingTypewriter'

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-title">
        <h1 id="name">Matthew Hocking</h1>
        <h1 id="role"><LandingTypewriter /></h1>
      </div>
      <div className="landing-links">
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about_me">About me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Landing
