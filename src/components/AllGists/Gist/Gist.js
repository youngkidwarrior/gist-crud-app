import React, { Component } from 'react';
import './Gist.css';
import { Paper, Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class Gist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  redirectToEdit() {
    if (this.props.redirect)
      return (
        <Redirect
          to={{
            pathname: '/' + this.props.updateId
          }}
        />
      );
  }

  render() {
    let selectedGist = this.props.selectedGist;
    let gist = this.props.gistContent;
    console.log(this.props);
    return (
      <Paper
        className={`gist ${gist._id === selectedGist._id ? 'selected' : ''} `}
      >
        <Typography
          variant="title"
          className="gist-title"
          onClick={this.props.selectGist.bind(this, gist)}
          gutterBottom
        >
          {gist.title}
        </Typography>
        <Button
          id={gist._id}
          variant="contained"
          className="edit-gist"
          onClick={this.props.handleRedirect}
        >
          edit
        </Button>
        {this.redirectToEdit()}

        <Button
          variant="contained"
          className="delete-gist"
          onClick={this.props.deleteGist.bind(this, gist._id)}
        >
          delete
        </Button>
      </Paper>
    );
  }
}

export default Gist;
