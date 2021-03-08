/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

import Logo from '../../logo.svg';
import HomePage from '../Home';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

export const ScrollerHandler = () => {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

const Header = () => {
  const scroll = ScrollerHandler();

  return (
    <Navbar expand="lg" fixed="top" className="bg-transparent">
      <div className={(scroll) ? '' : 'header'} />
      <Container>
        <Navbar.Brand href={ROUTES.HOME}>
          <img
            src={Logo}
            className="d-inline-block align-top logo"
            alt="VRfor.us"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

const Footer = () => (
  <footer className="footer">
    <Container>© 2021 VRfor.us </Container>
  </footer>
);

const App = () => (
  <Router>
    <Header />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Redirect to={ROUTES.HOME} />
    <Footer />
  </Router>
);

export default withFirebase(App);
