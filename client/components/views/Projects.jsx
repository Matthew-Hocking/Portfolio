import React from 'react'

import ProjectTypewriter from '../ProjectTypewriter'
import projects from '../../data/projects'

const Projects = () => {

  return (
    <div className="container">
      <div className="title">
        <h1 id="heading">Every project is an opportunity to</h1>
        <h1 id="heading">
          <span id="tools"><ProjectTypewriter /> </span>
        </h1>
      </div>

      <div className="card-container">
        {projects.map(project => {
          return (
            <div className="project-card" key={project.name}>
              <img src={project.image} alt={project.name} />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p id="tools">{project.tools}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
