import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';


class App extends Component {
  render() {
    return !this.props.isAuthenticate ? (
      <Router>
        <Route component={Login} />
      </Router>  
    ) : (
      <Router>
        <Route component={Home} />
      </Router>
    )
  }
}

const mapStateToProps = state =>{
  return {
    isAuthenticate : state.isAuthenticate
  }
}

export default connect(mapStateToProps)(App);