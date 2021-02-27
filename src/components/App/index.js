/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import SubscribePage from '../Subscribe';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const Header = () => (
  <header>Logo</header>
);

const Footer = () => (
  <footer><p>© 2021 VRfor.us </p></footer>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.SUBSCRIBE} component={SubscribePage} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default withFirebase(App);
