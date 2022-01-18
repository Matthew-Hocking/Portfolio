import React from 'react'

import LandingTypewriter from './LandingTypewriter'
import Project from './views/Projects'

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="landing-title">
          <h1 id="name">Matthew Hocking</h1>
          <h1 id="role"><LandingTypewriter /></h1>
        </div>
      </div>

      <div className="container">
      <div>
        <h1>
          Hey there! My name's Matthew and I'm a Full Stack Web Developer who loves to learn and create.
        </h1>
        <br />
        <h2>
          I'm proficient in <span id="tools">HTML</span>, <span id="tools">CSS</span>/<span id="tools">SASS</span>, and <span id="tools">JavaScript</span> libraries including but not limited to; <span id="tools">React</span>, <span id="tools">Redux</span>, and <span id="tools">Node</span>.
          I'm also proficient in <span id="tools">SQlite</span>, <span id="tools">Knex</span>, <span id="tools">Express</span>, and <span id="tools">SuperAgent</span>.
        </h2>
      </div>
    </div>
      <Project />
    </>
  )
}

export default Landing
