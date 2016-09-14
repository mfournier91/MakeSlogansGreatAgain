import React from 'react';
import {Router , Route, IndexRoute, browserHistory} from 'react-router';
import Main from '../Main';
import Home from '../Home';
import GenerateContainer from '../GenerateContainer'

//The root path i.e '/' renders the main component
//The default component is home for any undefined path
//The main component just renders the child components if required
//The '/generate' path renders the GenerateContainer component
var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='/generate' component={GenerateContainer} />
    </Route>
  </Router>
);

module.exports = routes;
