import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ConnectedIndexPage } from './pages/IndexPage';
import { ConnectedAboutPage } from './pages/AboutPage';
import FourOhFourPage from './pages/FourOhFourPage';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={ConnectedIndexPage} />
            <Route exact path="/about" component={ConnectedAboutPage} />
            <Route component={FourOhFourPage} />
          </Switch>
        </div>
    );
  }
}

export default App;
