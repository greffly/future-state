/* eslint-disable semi */
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { ContactForm } from '../forms';
import HomeIntro from '../HomeIntro';
import OurWork from '../OurWork';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import './styles.sass';
import '../../styles/global.sass';

const HomePageTemplate = (props) => {
  const { meta_title, meta_description } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='background-image custom-large-section'>
        <div className='is-flex is-align-items-start'>
          <h1 className='custom-header has-text-weight-light has-text-info is-size-1 is-size-4-mobile'>
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
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='home-circle-graphic'
        />
        <ProgressiveImageContainer
          image='/img/home-arrow-circles.svg'
          alt='circle and arrow graphic'
          className='home-arrow-circles'
        />
      </section>
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
