import React from 'react';
import {Router , Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../Main';
import Home from '../Home';
import GenerateContainer from '../GenerateContainer'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='/generate' component={GenerateContainer} />
    </Route>
  </Router>
);

module.exports = routes;
