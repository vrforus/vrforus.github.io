/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import SubscribePage from '../Subscribe';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.SUBSCRIBE} component={SubscribePage} />
        </Router>
      </div>
    );
  }
}

export default withFirebase(App);
