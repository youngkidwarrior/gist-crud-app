import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { createUser } from '../../actions/createUser';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.getUsername.value;
    const password = this.getPassword.value;
    const credentials = {
      username: username,
      password: password
    };
    this.props.createUser(credentials).then(result => {
      console.log(result.payload);
      this.setState({
        user: result.payload,
        submitted: true
      });
    });
  }

  render() {
    return (
      <div className="register">
      <h2> Register</h2>
      <form onSubmit={this.handleSubmit}>
        <input
          required
          rows="5"
          name="username"
          ref={input => (this.getUsername = input)}
          placeholder="Title"
        />
        <br />
        <br />
        <input
          name="password"
          ref={input => (this.getPassword = input)}
          placeholder="Gist goes here..."
        />
        <br />
        <button> Register User </button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
