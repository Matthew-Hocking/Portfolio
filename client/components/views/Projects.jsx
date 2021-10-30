import React from 'react'

import projects from '../../data/projects'

const Projects = () => {

  return (
    <div className="project-container">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="card-container">
        {projects.map(project => {
          return (
            <div className="project-card" key={project.name}>
              <img src={project.image} alt={project.name} />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
