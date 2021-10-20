import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Projects from './Projects'
import BlogList from './BlogList'
import Blog from './Blog'
import AboutMe from './AboutMe'
import Contacts from './Contacts'

const App = () => (
  <div className='app-container'>
    <Route path="/" component={Nav} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/blogs" component={BlogList} />
    <Route exact path="/blogs/:id" component={Blog} />
    <Route exact path="/about_me" component={AboutMe} />
    <Route exact path="/contacts" component={Contacts} />
  </div>
)

export default App
