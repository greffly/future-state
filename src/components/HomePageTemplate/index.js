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
      <section className='hero is-primary is-bold is-fullheight-with-navbar'>
        <div className='section is-large-desktop'>
          <h1 className='has-text-weight-light is-size-1-desktop'>
            WE ARE
            <br />
            <strong>
              CONNECTORS, <br />
              BUILDERS
            </strong>{' '}
            AND <br />
            <strong> ACCELERATORS</strong>.
          </h1>
        </div>
      </section>
      {/* <section className='section section--gradient'> */}
      <div>
        <div className='content'>
          <HomeIntro />
          <OurWork />
          <ContactForm />
        </div>
      </div>
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
