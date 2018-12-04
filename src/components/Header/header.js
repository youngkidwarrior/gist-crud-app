import React, { Component } from 'react';
import { browserHistory } from 'react-router-dom';
import './header.css';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offLandingPage: false
    };
  }
  styles = {
    largeIcon: {
      width: 100,
      height: 100
    }
  };
  setHome() {
    this.setState({
      offLandingPage: false
    });
  }

  componentDidMount() {
    console.log(window.location.href);
    if (window.location.href !== 'http://localhost:3000/home') {
      this.setState({
        offLandingPage: true
      });
      console.log(this.props);
      console.log(this.state);
    }
  }

  render() {
    var headerContent;
    headerContent = this.state.offLandingPage ? (
      <div className="button-wrapper">
        <IconButton
          onClick={() => this.setHome()}
          className="arrow-back"
          href="/home"
        >
          <i className="material-icons">arrow_back</i>
        </IconButton>
      </div>
    ) : null;

    return (
      <div>
        <header className="backgroundColor-brand padding-1">
          {headerContent}
          <h1 className="fontGiant textColor-white ">Maven Gist Clone</h1>
        </header>
      </div>
    );
  }
}

export default Header;
