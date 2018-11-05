// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import { Provider } from 'react-redux';

import EditGist from './components/EditGist/EditGist';
import Register from './components/Register/Register'

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <div>
        <Route exact path="/home" component={App} />
        <Route path="/gist/:id" component={EditGist} />
        <Route path="/user/register" component={Register}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
