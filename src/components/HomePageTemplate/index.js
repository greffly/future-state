/* eslint-disable semi */
import React from 'react';
import Helmet from 'react-helmet';
import { ContactForm } from '../forms';
import HomeIntro from '../HomeIntro';
import OurWork from '../OurWork';
import PropTypes from 'prop-types';

const HomePageTemplate = (props) => {
  const {
    title,
    heading,
    description,
    offerings,
    meta_title,
    meta_description,
    testimonials,
  } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='section is-large has-background-black'>
        <div className='is-flex is-align-items-start'>
          <h1 className='has-text-weight-light has-text-info is-size-1 is-size-4-mobile'>
            WE ARE
            <br />
            <strong className='has-text-info'>
              CONNECTORS, <br />
              BUILDERS
            </strong>{' '}
            AND <br />
            <strong className='has-text-info'> ACCELERATORS</strong>.
          </h1>
        </div>
      </section>
      {/* <section className='section section--gradient'> */}
      <HomeIntro />
      <OurWork />
      <ContactForm />
    </div>
  );
};
HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
};

export default HomePageTemplate;
