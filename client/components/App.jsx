import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Projects from './Projects'

const App = () => (
  <div className='app-container'>
    <Route path="/" component={Nav} />
    <Route exact path="/projects" component={Projects} />
  </div>
)

export default App
