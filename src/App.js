import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/header';
import MakeGist from './components/MakeGist/MakeGist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true
    };
  }

  render() {
    return (
      <div className="container-fluid App">
        <Header home={this.state.home} />
        <div className="row">
          <MakeGist props={this.state} />
        </div>
      </div>
    );
  }
}

export default connect()(App);
