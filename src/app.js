import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Home from './components/Home'

import 'normalize.css'
import 'animate.css'
import './style.scss'
// import './nav_arrow.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)