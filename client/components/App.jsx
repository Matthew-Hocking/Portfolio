import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './Landing'
import Projects from './views/Projects'
import AboutMe from './views/AboutMe'

const App = () => (
  <>
    <div className='app-container'>
      <Route exact path="/" component={Landing} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about_me" component={AboutMe} />
    </div>
  </>
)

export default App
