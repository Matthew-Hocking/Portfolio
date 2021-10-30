import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Landing from './Landing'
import Projects from './views/Projects'
import AboutMe from './views/AboutMe'

const App = () => (
  <>
    <div className='app-container'>
      <Route path="/" component={Nav} />
    </div>
    <div className="feed">
      <Route exact path="/" component={Landing} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about_me" component={AboutMe} />
    </div>
  </>
)

export default App
