import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import AccountCreateOrLogin from './views/account-create-or-login'
import FEATURES from './views/features'
import BLOG from './views/blog'
import CREATEANEWACCOUNT from './views/create-a-new-account'
import Home from './views/home'
import THANKYOUFORBOOKINGYOURVM from './views/thank-you-for-booking-your-vm'
import Login from './views/login'
import TEAM from './views/team'
import BOOKYOURVM from './views/book-your-vm'
import Pricing from './views/pricing'
import YOURNEWACCOUNTHASBEENCREATED from './views/your-new-account-has-been-created'
import ABOUT from './views/about'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={AccountCreateOrLogin}
          exact
          path="/account-create-or-login"
        />
        <Route component={FEATURES} exact path="/features" />
        <Route component={BLOG} exact path="/blog" />
        <Route
          component={CREATEANEWACCOUNT}
          exact
          path="/create-a-new-account"
        />
        <Route component={Home} exact path="/" />
        <Route
          component={THANKYOUFORBOOKINGYOURVM}
          exact
          path="/thank-you-for-booking-your-vm"
        />
        <Route component={Login} exact path="/login" />
        <Route component={TEAM} exact path="/team" />
        <Route component={BOOKYOURVM} exact path="/book-your-vm" />
        <Route component={Pricing} exact path="/pricing" />
        <Route
          component={YOURNEWACCOUNTHASBEENCREATED}
          exact
          path="/your-new-account-has-been-created"
        />
        <Route component={ABOUT} exact path="/about" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
