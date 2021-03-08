import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import Insights from './components/Insights';


const insights = new Insights();

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('app'),
);
