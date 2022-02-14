import React from 'react'

import LandingTypewriter from '../Typewriters/LandingTypewriter'

function Landing() {
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
      </div>
    </>
  )
}

export default Landing
