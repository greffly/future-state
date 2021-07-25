import React, { useState } from 'react';
import { Link } from 'gatsby';
import './styles.sass';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const toggleNavBar = () => {
    setActive(!active);
  };

  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item' id='navbar-title'>
          <strong>Future State</strong>
          <p>Consulting</p>
        </Link>
        <button
          className={`button navbar-burger ${active ? 'is-active' : ''}`}
          data-target='navMenu'
          onClick={toggleNavBar}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar-menu ${active ? 'is-active' : ''}`} id='navMenu'>
        <div className='navbar-end'>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
