import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import THANKYOUFORBOOKINGYOURVM from './views/thank-you-for-booking-your-vm'
import BOOKYOURVM from './views/book-your-vm'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route
          component={THANKYOUFORBOOKINGYOURVM}
          exact
          path="/thank-you-for-booking-your-vm"
        />
        <Route component={BOOKYOURVM} exact path="/book-your-vm" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
