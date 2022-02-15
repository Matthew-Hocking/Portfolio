import React from 'react'

import projects from '../../data/projects'
import ProjectTypewriter from '../Typewriters/ProjectTypewriter'

function checkForLink(project) {
  return project.link ?
    <a href={project.link} target="_blank">App</a>
    : null
}

function checkforGithub(project) {
  return project.github ?
    <a href={project.github} target="_blank">Github</a>
    : null
}

function checkForImage(project) {
  return project.image ?
    <img src={project.image} alt={projects.name} />
    : null
}

function Projects() {

  return (
    <div className="container">

      <div className="title">
        <h1 id="heading">Every project is an opportunity to</h1>
        <h1 id="role">
          <span id="highlight"><ProjectTypewriter /> </span>
        </h1>
      </div>

      <div className="card-container">
        {projects.map(project => {
          return (
            <div className="project-card" key={project.name}>
              {checkForImage(project)}
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <p id="tools">{project.tools}</p>
              <div className='project-links'>
                {checkforGithub(project)}
                {checkForLink(project)}
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Projects
