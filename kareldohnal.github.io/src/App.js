import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { Landing } from "./pages/Landing/Landing";
import { Resume } from "./pages/Resume/Resume";

const App = () => (
  <Router>
    <Switch>
      <Route path='/resume' component={Resume} />
      <Route path='/' component={Landing} />
      </Switch>
  </Router>
)

export default App