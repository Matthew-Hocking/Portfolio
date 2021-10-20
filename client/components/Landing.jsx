import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="Landing-container">
      <h1>Matthew Hocking</h1>
      <Link to="/projects">Projects</Link>
    </div>
  )
}

export default Landing
