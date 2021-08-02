import React from 'react';
import { Link } from 'gatsby';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const Footer = () => {
  return (
    <footer className='footer has-background-black'>
      <div className='container py-4 has-text-info is-flex is-flex-direction-column'>
        <div className='p-5'>
          <Link to='/' className='navbar-title is-flex is-align-items-center'>
            <ProgressiveImageContainer
              image='/img/logo-future-state-footer.svg'
              alt='Private 100 Fastest Growing Companies'
            />
          </Link>
        </div>
        {/* <div className='is-flex is-flex-direction-row is-fullwidth'>
          <div className='is-justify-content-flex-start'>
            <p>2019 Future State Consulting</p>
          </div>
          <ul className='is-justify-content-flex-end'>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
