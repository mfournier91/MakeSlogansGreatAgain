import React, { Component } from 'react';
import './App.css';
import {Router, Link} from 'react-router'

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
