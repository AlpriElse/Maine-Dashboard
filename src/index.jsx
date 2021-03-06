import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './components/routes';
require('moment');

require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

require('./stylesheets/styles.scss');

ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#app')
);
