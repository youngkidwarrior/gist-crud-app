import React, { Component } from 'react';
import './MakeGist.css';
import { connect } from 'react-redux';
import { createGist } from '../../actions/createGist';
import AllGists from '../AllGists/AllGists';
import 'typeface-roboto';


//Component containing form input for gist title and contents
class MakeGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gist: {},
      submitted: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const content = this.getContent.value;
    const gist = {
      title: title,
      content: content
    };
    this.props.createGist(gist).then(result => {
      console.log(result.payload);
      this.setState({
        gist: result.payload,
        submitted: true
      });
      this.afterSubmit();
    });
  };

  afterSubmit() {
    if (this.state.submitted) {
      this.setState({
        gist: {},
        submitted: false
      });
    }
  }



  render() {
    return (
      <div>
      <div className="Column --two">
        <div className="Wrapper">
          <div className="fontRegularPlus fontWeight-light"> Make a Gist </div>
          <form className="gist-body" onSubmit={this.handleSubmit}>
            <input
              className="Field"
              required
              rows="5"
              name="title"
              ref={input => (this.getTitle = input)}
              placeholder="Title"
            />
            <textarea
              className="Field"
              name="content"
              ref={input => (this.getContent = input)}
              placeholder="Gist goes here..."
            />
            <br />
            <button className="Button --narrow --solid-negative"> Save Gist </button>
          </form>
        </div>
        </div>

        <AllGists newGist={this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  createGist: gist => dispatch(createGist(gist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeGist);
