import React from 'react';
import { Link } from 'gatsby';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import './styles.sass';

const Footer = () => {
  return (
    <footer className='footer has-background-black'>
      <div
        className='container py-4 mx-4 has-text-info'
        style={{ maxWidth: '2000px' }}
      >
        <div className='is-flex is-align-items-center is-justify-content-center'>
          <Link to='/' style={{ maxWidth: '320px' }}>
            <ProgressiveImageContainer
              image='/img/logo-future-state-footer.png'
              alt='Future State Logo'
            />
          </Link>
        </div>
        <div className='footer-social py-5 is-fullwidth'>
          <div className='is-size-4-desktop is-size-6-mobile'>
            <p>© 2019 Future State Consulting</p>
          </div>
          <ul
            className='is-flex is-flex-direction-row'
            style={{ maxWidth: '80%' }}
          >
            <li className='p-2'>
              <Link
                className='has-text-black is-uppercase'
                to='https://twitter.com/fsconsults'
                target='_blank'
              >
                <ProgressiveImageContainer
                  image='/img/social-twitter.svg'
                  alt='twitter icon'
                />
              </Link>
            </li>
            <li className='p-2'>
              {' '}
              <Link
                className='has-text-black is-uppercase'
                to='https://www.facebook.com/pages/Future%20State%20Consulting/484518591750928/'
                target='_blank'
              >
                <ProgressiveImageContainer
                  image='/img/social-facebook.svg'
                  alt='facebook icon'
                />
              </Link>
            </li>
            <li className='p-2'>
              {' '}
              <Link
                className='has-text-black is-uppercase'
                to='https://www.linkedin.com/company/future-state-consulting/'
                target='_blank'
              >
                <ProgressiveImageContainer
                  image='/img/social-linkedin.svg'
                  alt='linkedin icon'
                />
              </Link>
            </li>
            {/* <li className='p-2'>
              {' '}
              <Link className='has-text-black is-uppercase' to='#'>
                <ProgressiveImageContainer
                  image='/img/social-youtube.svg'
                  alt='youtube icon'
                />
              </Link>
            </li>
            <li className='p-2'>
              {' '}
              <Link className='has-text-black is-uppercase' to='#'>
                <ProgressiveImageContainer
                  image='/img/social-insta.svg'
                  alt='instagram icon'
                />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
