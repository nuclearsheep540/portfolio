import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'

import 'normalize.css'
import './style.scss'
import 'animate.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)