import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Recipes'

function src() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recipes' component={Recipes} />
      </Switch>
    </Router>
  )
}

export default src
