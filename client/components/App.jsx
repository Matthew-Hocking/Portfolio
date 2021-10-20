import React from 'react'
import { Route } from 'react-router-dom'

import Projects from './views/Projects'
import Landing from './Landing'

const App = () => (
  <div className='app-container'>
    <Route exact path="/" component={Landing} />
    <Route exact path="/projects" component={Projects} />
  </div>
)

export default App
