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
            alt='Private 100 Fastest Growing Companies'
          />
        </Link>
      </div>
      <div id='menuToggle'>
        <input type='checkbox' />
        <span />
        <span />
        <span />
        <ul id='menu'>
          <Link className='navbar-item' to='/pricing'>
            ABOUT US
          </Link>
          <Link className='navbar-item' to='/talent'>
            FOR TALENT
          </Link>
          <Link className='navbar-item' to='/companies'>
            FOR COMPANIES
          </Link>
          <Link className='navbar-item' to='/work'>
            OUR WORK
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
