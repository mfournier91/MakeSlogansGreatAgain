import React from 'react';
import {Router , Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../Main';
import Home from '../Home';
import Generate from '../Generate'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='/generate' component={Generate} />
    </Route>
  </Router>
);

module.exports = routes;
