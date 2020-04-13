import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';

import './App.css';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function App() {

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />

              </Switch>
            </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
