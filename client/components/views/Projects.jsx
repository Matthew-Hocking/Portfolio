import React from 'react'

import projects from '../../../data/projects'

const Projects = () => {
  console.log(projects)


  return (
    <div>
        {projects.map(project => {
          return (
            <div className="project-card">
              {/* <img src={project.image} alt={project.name} /> */}
              <h3><a href={`${project.link}`} >{project.name}</a></h3>
              <h3>{project.description}</h3>
            </div>
          )
        })}
    </div>
  )
}

export default Projects
