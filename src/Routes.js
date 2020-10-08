import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Night from './components/Night'
import NightRecipes from './pages/NightRecipes'
import Tropical from './components/Tropical'
import Home from './pages/Home'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/night' component={Night} />
        <Route path='/night-recipes' component={NightRecipes} />
        <Route path='/tropical' component={Tropical} />
      </Switch>
    </Router>
  )
}

export default Routes
