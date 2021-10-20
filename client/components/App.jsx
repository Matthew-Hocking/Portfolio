import React from 'react'
import { Route } from 'react-router-dom'

import Projects from './views/Projects'
import Landing from './Landing'
import BlogList from './views/BlogList'
import Blog from './views/Blog'
import AboutMe from './views/AboutMe'
import Contact from './views/Contact'

const App = () => (
  <div className='app-container'>
    <Route exact path="/" component={Landing} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/blogs" component={BlogList} />
    <Route exact path="/blogs/:id" component={Blog} />
    <Route exact path="/about_me" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
  </div>
)

export default App
