/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const HomeIntro = (props) => {
  const { data } = props;

  return (
    <div>
      <section className='section is-large'>
        <h1 className='has-text-weight-light is-size-2-desktop is-size-4-mobile'>
          RELATIONSHIPS <strong>FIRST</strong>.
          <br /> TALENT SOLUTIONS THAT <strong>LAST</strong>.
        </h1>
        <div className='column is-two-thirds px-0'>
          <p className='is-size-5-desktop py-6'>
            Future State is a consulting firm that leads with a personal,
            relationship-first approach to deliver top engineering talent and
            team solutions to tech organizations at leading companies.
          </p>
          <div className='buttons column is-half is-flex is-flex-direction-column is-align-content-start is-align-items-start has-text-left p-0'>
            <button className='button is-info is-fullwidth p-5 is-size-5-desktop'>
              I'M LOOKING FOR TALENT
            </button>
            <button
              className='button is-primary has-text-white is-fullwidth p-5 mt-2 is-size-5-desktop'
              id='talent-button'
            >
              I'M THE TALENT
            </button>
          </div>
        </div>
      </section>
      <section className='section is-large has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop is-size-4-mobile'>
          WE DELIVER
          <br /> <strong className='has-text-info'>
            TALENT SOLUTIONS
          </strong>{' '}
          <br /> THAT HELP <br />{' '}
          <strong className='has-text-info'>CREATE IMPACT.</strong>
        </h1>
        <div className='buttons'>
          <button className='button is-info p-5 is-size-5-desktop mt-6'>
            ABOUT US
          </button>
        </div>
      </section>
      <section className='section is-medium has-text-centered'>
        <h1 className='has-text-weight-light is-size-2-desktop is-size-4-mobile'>
          WE'RE
          <strong> PROUD</strong> OF THE AWARDS <br />{' '}
          <strong>WE HAVE RECEIVED.</strong>
        </h1>
        <p className='column is-three-fifths is-offset-one-fifth is-size-5-desktop py-6'>
          Manchego edam goat. Pepper jack smelly cheese mascarpone cow airedale
          edam caerphilly rubber cheese. Swiss cheese and biscuits cheese and
          wine halloumi bavarian bergkase cheddar boursin st. agur blue cheese.
        </p>
        <div className='columns is-flex is-align-items-center p-6'>
          <div className='column is-4 p-6-desktop' style={{ padding: '5%' }}>
            <ProgressiveImageContainer
              image='/img/badge-inc-500.png'
              alt='INC 5000 Award'
            />
          </div>
          <div className='column is-4 p-6-desktop' style={{ padding: '5%' }}>
            <ProgressiveImageContainer
              image='/img/badge-private-100.png'
              alt='Private 100 Fastest Growing Companies'
            />
          </div>
          <div className='column is-4 p-6-desktop' style={{ padding: '5%' }}>
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
