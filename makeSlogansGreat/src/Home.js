import React, { Component } from 'react';
import './App.css';
import {Router, Link} from 'react-router'

//Component for the welcompe page. Button links to the generate page.
class Home extends Component {
  render() {
    return (
      <div>
        <p className='lead text-center'>I Have the Best words</p>
        <Link to='/generate'>
          <button type='button' className="trumpton center-block"> Get Started </button>
        </Link>

      </div>
    )
  }
}

export default Home;
