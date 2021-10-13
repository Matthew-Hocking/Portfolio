import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'

const App = () => (
  <div className='app-container'>
    <Route path="/" component={Nav} />
  </div>
)

export default App
