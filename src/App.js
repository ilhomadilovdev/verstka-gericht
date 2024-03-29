import React, { Component } from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './Home/Home'
import Pages from './Pages/Pages'

import PageNout from './PageNoutFound/PageNout'
import Navigation from './Navigation/Navigation'
import Footer from './Footer'




export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='contentAlfa'>
          <Navigation />

          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/pages" exact={true}  >
              <Pages />
            </Route>
            <Redirect from="*" to="/404" exact={true}>
              <PageNout />
            </Redirect>

          </Switch>

          <Footer />

        </div>
      </Router>
    )
  }
}
