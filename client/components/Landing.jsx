import React from 'react'

import LandingTypewriter from './LandingTypewriter'
import Project from './views/Projects'
import AboutMe from './views/AboutMe'

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="landing-title">
          <h1 id="name">Matthew Hocking</h1>
          <h1 id="role"><LandingTypewriter /></h1>
        </div>
      </div>
      <Project />
      <AboutMe />
    </>
  )
}

export default Landing
