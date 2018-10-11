import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/header';
import MakeGist from './components/MakeGist/MakeGist';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <Header props={this.state} />
        <div className="row">
          <MakeGist />
        </div>
      </div>
    );
  }
}

export default connect()(App);
