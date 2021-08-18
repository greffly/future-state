/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import './styles.sass';
import '../../styles/global.sass';

const HomeIntro = (props) => {
  return (
    <div>
      <section className='custom-medium-section'>
        <h1 className='has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
          Relationships <strong>first</strong>.
          <br /> Talent solutions that <strong>last</strong>.
        </h1>
        <div className='column is-two-thirds px-0'>
          <p className='is-size-4 pb-6 pt-3'>
            Future State is a consulting firm that leads with a personal,
            relationship-first approach to deliver top engineering talent and
            team solutions to tech organizations at leading companies.
          </p>
          <div className='buttons column is-half is-flex is-flex-direction-column is-align-content-start is-align-items-start has-text-left p-0'>
            <button className='button is-info is-uppercase p-5 is-size-5 talent-button'>
              I'm looking for talent
            </button>
            <button className='button is-primary has-text-white is-uppercase p-5 mt-2 is-size-5 talent-button'>
              I'm the talent
            </button>
          </div>
        </div>
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='home-circle-graphic-2'
        />
        <ProgressiveImageContainer
          image='/img/home-puzzle-pieces.svg'
          alt='circle graphic'
          className='home-puzzle-pieces'
        />
      </section>
      <section className='custom-large-section has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
          We deliver
          <br /> <strong className='has-text-info'>
            Talent solutions
          </strong>{' '}
          <br /> that help <br />{' '}
          <strong className='has-text-info'>create impact</strong>.
        </h1>
        <div className='column p-0 is-3 buttons'>
          <button className='button is-info is-fullwidth is-size-5 p-5 mt-6 is-uppercase'>
            About Us
          </button>
        </div>
        <ProgressiveImageContainer
          image='/img/home-maze-graphic.svg'
          alt='circle graphic'
          className='home-maze-graphic'
        />
      </section>
      <section className='section is-medium has-text-centered'>
        <h1 className='has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
          We're
          <strong> proud</strong> of the awards <br />{' '}
          <strong>we have received</strong>.
        </h1>
        <p className='column is-8 is-offset-2 is-size-5-desktop py-6 px-0'>
          Gouda stinking bishop rubber cheese smelly cheese swiss red leicester
          port-salut the big cheese. Taleggio stinking bishop manchego hard
          cheese monterey jack chalk and cheese stinking bishop swiss. Fromage
          frais port-salut manchego.
        </p>
        <div
          className='columns is-flex is-align-items-center has-text-centered award-badge-section'
          style={{ maxWidth: '80%', margin: '0 auto' }}
        >
          <div
            className='column is-4 award-badge'
            style={{ paddingRight: '3%', paddingLeft: '3%' }}
          >
            <ProgressiveImageContainer
              image='/img/badge-inc-500.png'
              alt='INC 5000 Award'
            />
          </div>
          <div
            className='column is-4 award-badge'
            style={{ paddingRight: '3%', paddingLeft: '3%' }}
          >
            <ProgressiveImageContainer
              image='/img/badge-private-100.png'
              alt='Private 100 Fastest Growing Companies'
            />
          </div>
          <div
            className='column is-4 award-badge'
            style={{ paddingRight: '3%', paddingLeft: '3%' }}
          >
            <ProgressiveImageContainer
              image='/img/badge-inc-5000.png'
              alt='INC 5000 2019'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

HomeIntro.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default HomeIntro;
