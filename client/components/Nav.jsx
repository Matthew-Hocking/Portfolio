import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav--container">
      <div className="name">
        <Link to="/">Matthew Hocking</Link>
      </div>
      <div className="navigations">
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about_me">About Me</Link>
      </div>
    </div>
  )
}

export default Nav
