import React from 'react'

import projects from '../../data/projects'

const Projects = (props) => {
  console.log(projects)


  return (
    <div>
      <ul>
        {projects.map(project => {
          return (
            <div className="project-card">
              <li><a href={`${project.link}`} >{project.name}</a></li>
              <li>{project.description}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects
