import React, { Component } from 'react';
import './ShowGist.css';

class ShowGist extends Component {
  render() {
    var gist = this.props.gist;
    return (
      <div className="show-gist">
        <h2> {gist.title} </h2>
        <pre className="resizable" draggable="true">
          {' '}
          {gist.content}{' '}
        </pre>
      </div>
    );
  }
}

export default ShowGist;
