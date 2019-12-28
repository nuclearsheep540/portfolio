import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Landing from '../Landing'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {

    }
    //binds
  }

  render() {
    return (
      <BrowserRouter>
        <Link className='' to='/about'>About Me</Link>
        <Link className='' to='/skills'>Skills</Link>
        <Link className='' to='/projects'>Projects</Link>

        <Switch>
          <Route exact path='/' Component={Landing}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/skills' Component={Skills}></Route>
          <Route path='/projects' Component={Projects}></Route>
        </Switch>

      </BrowserRouter>
    )
  }
}