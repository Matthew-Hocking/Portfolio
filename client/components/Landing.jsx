import React from 'react'

import LandingTypewriter from './LandingTypewriter'
import Project from './views/Projects'

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="landing-title">
          <h1>
            Hi, I'm
          </h1>
          <h1 id="name">Matthew Hocking</h1>
          <h1 id="role"><LandingTypewriter /></h1>
        </div>
        <div className='container'>
          <h2>
            Welcome to my portfolio!
          </h2>
        </div>
      </div>
    </>
  )
}

export default Landing
