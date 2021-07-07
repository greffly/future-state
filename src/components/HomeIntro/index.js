/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';

const HomeIntro = (props) => {
  const { data } = props;

  return (
    <div>
      <section className='section is-large'>
        <h1 className='has-text-weight-light is-size-2-desktop'>
          RELATIONSHIPS <strong>FIRST</strong>.
          <br /> TALENT SOLUTIONS THAT <strong>LAST</strong>.
        </h1>
        <p>
          Future State is a consulting firm that leads with a personal,
          relationship-first approach to deliver top engineering talent and team
          solutions to tech organizations at leading companies.
        </p>
        <div className='buttons'>
          <button className='button is-info'>I'M LOOKING FOR TALENT</button>
          <button
            className='button is-primary has-text-white'
            id='talent-button'
          >
            I'M THE TALENT
          </button>
        </div>
      </section>
      <section className='section is-large has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop'>
          WE DELIVER
          <br /> <strong className='has-text-info'>
            TALENT SOLUTIONS
          </strong>{' '}
          <br /> THAT HELP <br />{' '}
          <strong className='has-text-info'>CREATE IMPACT.</strong>
        </h1>
        <div className='buttons'>
          <button className='button is-info'>ABOUT US</button>
        </div>
      </section>
      <section className='section is-large has-text-centered'>
        <h1 className='has-text-weight-light is-size-2-desktop'>
          WE'RE
          <strong> PROUD</strong> OF THE AWARDS <br />{' '}
          <strong>WE HAVE RECEIVED.</strong>
        </h1>
        <p>
          Manchego edam goat. Pepper jack smelly cheese mascarpone cow airedale
          edam caerphilly rubber cheese. Swiss cheese and biscuits cheese and
          wine halloumi bavarian bergkase cheddar boursin st. agur blue cheese.
        </p>
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
