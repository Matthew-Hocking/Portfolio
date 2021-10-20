import React from 'react'

import Nav from './Nav'
import projects from '../../../data/projects'

const Projects = () => {
  console.log(projects)


  return (
    <div>
      <Nav />
        {projects.map(project => {
          return (
            <div className="project-card">
              <h3><a href={`${project.link}`} >{project.name}</a></h3>
              <h3>{project.description}</h3>
            </div>
          )
        })}
    </div>
  )
}

export default Projects
