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
    value_quote,
  } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section
        className='custom-medium-section has-background-black'
        id='about-top-section'
      >
        <h1 className='has-text-info has-text-weight-light is-size-1-desktop is-size-2-tablet is-size-3-mobile is-uppercase'>
          We deliver
          <br /> <strong className='has-text-info'>
            talent solutions
          </strong>{' '}
          <br /> that help <br />{' '}
          <strong className='has-text-info'>create impact</strong>.
        </h1>
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='top-circle-graphic'
        />
        <ProgressiveImageContainer
          image='/img/about-us-clackers.svg'
          alt='circle graphic'
          className='about-us-clackers'
        />
      </section>

      <section className='custom-medium-section'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
              Our <strong>Values</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{values}</p>
          </div>
          <div className=''>
            <div className='column is-flex is-align-items-center about-graphics'>
              <ProgressiveImageContainer
                image='/img/about-us-circle.svg'
                alt='circle graphic'
                className='about-us-circle'
              />
              <ProgressiveImageContainer
                image='/img/quote-light-blue.svg'
                alt='circle graphic'
                className='quote-with-value'
              />
            </div>
            <p className='column is-size-5-desktop is-third value-quote'>
              {value_quote}
            </p>
          </div>
        </div>
      </section>

      <section className='custom-medium-section has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
          Why <strong className='has-text-info'>Work</strong> With{' '}
          <strong className='has-text-info'>Us</strong>
        </h1>
        <div className='columns'>
          {quotes.blurbs.map((quote, i) => (
            <div key={i} className='px-5 pt-6'>
              <ProgressiveImageContainer
                image='/img/quote-light-blue.svg'
                alt='quotation mark graphic'
                className='quote-with-blurbs'
              />
              <div className='column mt-5 ml-2 is-third has-text-white'>
                <p className='is-size-5-desktop'>{quote.text}</p>
                <p className='is-size-5-desktop'>
                  <strong className='has-text-white'>{quote.title}</strong>
                </p>
                <hr className='has-background-info hr-tag' />
              </div>
            </div>
          ))}
          ;
        </div>

        <div className='about-subsection'>
          <h1 className='pt-5 has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered'>
            <strong className='has-text-info is-uppercase'>
              We're good at what we do.
            </strong>
          </h1>
          <div className='columns has-text-centered is-uppercase'>
            <div className='column is-third'>
              <p className='has-text-info large-stats'>25</p>
              <p className='has-text-white is-size-2-desktop is-size-3-tablet is-size-4-mobile stats-descriptor'>
                Client Partnerships
              </p>
            </div>
            <div className='column is-third'>
              <p className='has-text-info large-stats'>87%</p>
              <p className='has-text-white is-size-2-desktop is-size-3-tablet is-size-4-mobile stats-descriptor'>
                Employee Satisfaction
              </p>
            </div>
            <div className='column is-third'>
              <p className='has-text-info large-stats'>14</p>
              <p className='has-text-white is-size-2-desktop is-size-3-tablet is-size-4-mobile stats-descriptor'>
                Industries Served
              </p>
            </div>
          </div>
        </div>

        <div className='about-subsection'>
          <h1 className='pt-5 has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered'>
            <strong className='has-text-info is-uppercase'>
              We're proud of the awards we have won.
            </strong>
          </h1>
          <div
            className='columns is-flex is-align-items-center has-text-centered award-badge-section pt-6'
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
        </div>
      </section>

      <section className='custom-medium-section has-background-white'>
        <div className='columns'>
          <div className='column is-two-thirds pr-6'>
            <h1 className='pt-5 has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile'>
              <strong>DIVERSITY, EQUITY</strong> AND <br />
              <strong> INCLUSION</strong>
            </h1>
            <p className='pr-6 pt-5 is-size-4-desktop'>{diversity}</p>
          </div>
          <div className='has-text-centered'>
            <p className='has-text-info large-stats'>47%</p>
            <p className='is-size-3 stats-descriptor'>
              of our consultants are identified within Future State's DE&I
              parameters
            </p>
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
  value_quote: PropTypes.string,
  quotes: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  teamMembers: PropTypes.shape({
    members: PropTypes.array,
  }),
};

export default AboutUsTemplate;
