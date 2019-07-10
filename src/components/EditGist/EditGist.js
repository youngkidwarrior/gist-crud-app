import React, { Component, Fragment } from 'react';
import './EditGist.css';
import { connect } from 'react-redux';
import { updateGist } from '../../actions/updateGist';
import { fetchOneGist } from '../../actions/fetchOneGist';
import Header from '../Header/header';
import { Paper } from '../../../node_modules/@material-ui/core';

//Component containing form input for gist title and contents
class EditGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home:false,
      gist: {},
      loading: true
    };
  }

  componentDidMount() {
    this.props
      .fetchOneGist(this.props.match.params.id)
      .then(action => {
        // if (action.payload ==)
        this.setState({
          gist: action.payload,
          loading: false
        });
        console.log(this.state);
      })
      .catch(err => {
        console.error('err', err);
      });
  }

  handleSubmit = e => {
    // e.preventDefault();
    const id = this.state.gist._id;
    const title = this.getTitle.value;
    const content = this.getContent.value;
    const gist = {
      id: id,
      title: title,
      content: content
    };
    this.props.updateGist(gist).then(result => {
      this.setState({
        gist: gist
      });
    });
  };

  render() {
    var gist = this.state.gist;

    return (
      <div className="container-fluid">
        <Header home={this.state.home} />
        <div className="row">
          {this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <Fragment className="edit-gist">
              <div className="edit-gist-display col-md-4">
                <h1 className="edit-gist-title">{gist.title}</h1>
                <pre className="edit-gist-body">{gist.content}</pre>
              </div>
              <div className="col-md-8">
                <Paper>
                  <form className="edit-gist-form" onSubmit={this.handleSubmit}>
                    Title:{' '}
                    <input
                      required
                      type="text"
                      name="title"
                      ref={input => (this.getTitle = input)}
                      defaultValue={gist.title}
                    />
                    <br />
                    <br />
                    Content:{' '}
                    <pre>
                      <textarea
                        rows="5"
                        name="content"
                        ref={input => (this.getContent = input)}
                        defaultValue={gist.content}
                      />
                    </pre>
                    <br />
                    <button> Save Gist </button>
                  </form>
                </Paper>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  updateGist: gist => dispatch(updateGist(gist)),
  fetchOneGist: gistId => dispatch(fetchOneGist(gistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGist);
