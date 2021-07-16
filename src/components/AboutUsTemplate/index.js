/* eslint-disable semi */
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import './styles.sass';
import { ContactForm } from '../forms';
import OurTeam from '../OurTeam';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const AboutUsTemplate = (props) => {
  const {
    meta_title,
    meta_description,
    values,
    quotes,
    diversity,
    teamMembers,
  } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='section is-medium has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-1-desktop'>
          WE DELIVER
          <br /> <strong className='has-text-info'>
            TALENT SOLUTIONS
          </strong>{' '}
          <br /> THAT HELP <br />{' '}
          <strong className='has-text-info'>CREATE IMPACT.</strong>
        </h1>
      </section>

      <section className='section is-medium'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop'>
              OUR <strong>VALUES</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{values}</p>
          </div>
        </div>
      </section>

      <section className='section is-large has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop'>
          WHY <strong className='has-text-info'>WORK</strong> WITH{' '}
          <strong className='has-text-info'>US</strong>
        </h1>
        <div className='columns'>
          {quotes.blurbs.map((quote, i) => (
            <div key={i} className='column is-third has-text-white'>
              <p className='pr-5 pt-5 is-size-5-desktop'>{quote.text}</p>
              <p className='pr-5 pt-5 is-size-5-desktop'>
                <strong className='has-text-white'>{quote.author}</strong>
              </p>
              <p className='pr-5 is-size-5-desktop'>
                <strong className='has-text-white'>{quotes.title}</strong>
              </p>
            </div>
          ))}
          ;
        </div>

        <h1 className='has-text-info pt-5 has-text-weight-light is-size-2-desktop has-text-centered'>
          WE'RE GOOD AT WHAT WE DO.
        </h1>
        <div className='columns'>
          <div className='column is-third'>
            <p className='has-text-info large-stats'>775</p>
            <p className='has-text-white is-size-3-desktop'>REALLY COOL</p>
          </div>
          <div className='column is-third'>
            <p className='has-text-info large-stats'>95%</p>
            <p className='has-text-white is-size-3-desktop'>SO GREAT</p>
          </div>
          <div className='column is-third'>
            <p className='has-text-info large-stats'>564</p>
            <p className='has-text-white is-size-3-desktop'>THE BEST</p>
          </div>
        </div>

        <h1 className='has-text-info pt-5 has-text-weight-light is-size-2-desktop has-text-centered'>
          WE'RE PROUD OF THE AWARDS WE HAVE WON.
        </h1>
        <div className='columns'>
          <div className='column is-third is-4 p-6'>
            <ProgressiveImageContainer
              image='/img/photoPlaceholder.png'
              alt='INC 5000 Award'
            />
          </div>
          <div className='column is-third is-4 p-6'>
            <ProgressiveImageContainer
              image='/img/photoPlaceholder.png'
              alt='Private 100 Fastest Growing Companies'
            />
          </div>
          <div className='column is-third is-4 p-6'>
            <ProgressiveImageContainer
              image='/img/photoPlaceholder.png'
              alt='INC 5000 2019'
            />
          </div>
        </div>
      </section>

      <section className='section is-medium has-background-white'>
        <h1 className='pt-5 has-text-weight-light is-size-2-desktop'>
          <strong>DIVERSITY, EQUITY</strong> AND <br />
          <strong> INCLUSION</strong>
        </h1>
        <div className='columns'>
          <div className='column is-two-thirds'>
            <p className='pr-5 pt-5 is-size-4-desktop'>{diversity}</p>
          </div>
          <div>
            <p className='has-text-info large-stats'>95%</p>
            <p className='is-size-3-desktop'>SO GREAT</p>
          </div>
        </div>
      </section>
      <OurTeam teamMembers={teamMembers} />
      <ContactForm />
    </div>
  );
};

AboutUsTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  values: PropTypes.string,
  quotes: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  teamMembers: PropTypes.shape({
    members: PropTypes.array,
  }),
};

export default AboutUsTemplate;
