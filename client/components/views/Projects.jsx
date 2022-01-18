import React from 'react'

import projects from '../../data/projects'

const Projects = () => {

  return (
    <div className="container">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="container">
        <h2>
          Each project is an opportunity to <span id="tools">learn</span>. The goal is that I'm learning something new and making it work, while having some fun along the way.
        </h2>
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
