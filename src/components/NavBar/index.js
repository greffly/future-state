import React from 'react';
import { Link } from 'gatsby';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import './styles.sass';

const NavBar = () => {
  return (
    <nav
      className='navbar is-fixed-top custom-nav-height'
      aria-label='main navigation'
    >
      <div>
        <Link to='/' className='navbar-title is-flex is-align-items-center'>
          <ProgressiveImageContainer
            image='/img/future-state-logo.svg'
            alt='Future State Consulting Logo'
          />
        </Link>
      </div>
      <div id='menuToggle'>
        <input type='checkbox' />
        <span />
        <span />
        <span />
        <ul className='is-uppercase' id='menu'>
          <Link className='navbar-item' to='/about'>
            About Us
          </Link>
          <Link className='navbar-item' to='/talent'>
            For Talent
          </Link>
          <Link className='navbar-item' to='/companies'>
            For Companies
          </Link>
          <Link className='navbar-item' to='/dei'>
            Diversity, Equity & Inclusion
          </Link>
          {/* <Link className='navbar-item' to='/work'>
            Our Work
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
