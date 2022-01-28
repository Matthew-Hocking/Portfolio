import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './views/Nav'
import Landing from './views/Landing'
import Projects from './views/Projects'
import AboutMe from './views/AboutMe'
import Footer from './views/Footer'

const App = () => (
  <>
    <div id="bg"></div>
    <Route path="/" component={Nav} />
    <Route exact path="/" component={Landing} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about_me" component={AboutMe} />
    <Route path="/" component={Footer} />
  </>
)

export default App
