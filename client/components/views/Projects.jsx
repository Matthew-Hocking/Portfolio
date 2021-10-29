import React from 'react'

import projects from '../../../data/projects'

const Projects = () => {

  return (
    <div className="project-container">
      <div class="title">Projects</div>
        <div className="card-container">
          {projects.map(project => {
            return (
              <div className="project-card">
                <a href={project.link}>
                  <h3>{project.name}</h3>
                  <h3>{project.description}</h3>
                </a>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Projects
