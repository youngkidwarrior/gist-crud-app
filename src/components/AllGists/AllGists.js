import React, { Component } from 'react';

import './AllGists.css';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ShowGist from '../../components/ShowGist/ShowGist';
import Gist from './Gist/Gist';

import { connect } from 'react-redux';
import { fetchGists } from '../../actions/fetchGists';
import { deleteGist } from '../../actions/deleteGist';

class AllGists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gists: [],
      searchString: '',
      loading: true,
      selectedGist: {},
      redirect: false,
      updateId: ''
    };
    this.selectGist = this.selectGist.bind(this);
    this.deleteGist = this.deleteGist.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  searchGists = e => {
    this.setState({
      searchString: e.target.value
    });
  };

  deleteGist(gistId) {
    console.log(this.props);
    this.props.deleteGist(gistId).then(result => {
      var newGists = [...this.state.gists];
      newGists = newGists.filter(gist => gist._id !== gistId);
      this.setState({
        gists: newGists
      });
      console.log(newGists);
    });
  }

  handleRedirect(e) {
    this.setState({
      redirect: true,
      updateId: e.currentTarget.id
    });
  }

  selectGist(gist) {
    this.setState({
      selectedGist: gist
    });
  }

  loading() {
    if (this.state.loading) {
      return <h1> Loading... </h1>;
    }
    if (this.state.gists.length === 0){
      return <h1> No gists yet! </h1>
    }
  }

  componentDidMount() {
    this.props.fetchGists().then(result => {
      var orderedGists = result.payload.slice(0).reverse();
      this.setState({
        gists: orderedGists,
        loading: false
      });
    });
  }

  componentWillReceiveProps(props) {
    //if a gist is created add it to our gists state
    if (props.newGist.submitted) {
      this.setState({
        gists: [props.newGist.gist, ...this.state.gists]
      });
    }
  }

  render() {
    let gists = this.state.gists,
      selectedGist = this.state.selectedGist;
    let searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      gists = gists.filter(i => {
        return i.title.toLowerCase().match(searchString);
      });
    }

    return (
      <div className="all-gists">
        {Object.keys(selectedGist).length !== 0 ? (
          <ShowGist gist={selectedGist} />
        ) : null}

        <header className="all-gists-top">
          <div className="">
            <Input
              className="search-bar"
              type="text"
              placeholder="Search Gists..."
              value={this.state.searchString}
              onChange={this.searchGists}
            />
          </div>
        </header>
        <hr />
        {this.loading()}
        <ul className="gists">
          {/* reverse list so gists are sorted newest->oldest */}
          {gists.map(gist => {
            return (
              <Gist
                key={gist._id}
                gistContent={gist}
                updateId={this.state.updateId}
                selectedGist={this.state.selectedGist}
                redirect={this.state.redirect}
                deleteGist={this.deleteGist}
                selectGist={this.selectGist}
                handleRedirect={this.handleRedirect}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  fetchGists: () => dispatch(fetchGists()),
  deleteGist: gistId => dispatch(deleteGist(gistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllGists);
