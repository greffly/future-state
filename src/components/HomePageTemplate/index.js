/* eslint-disable semi */
import React from 'react';
import Helmet from 'react-helmet';
import { ContactForm } from '../forms';
import HomeIntro from '../HomeIntro';
import OurWork from '../OurWork';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import './styles.sass';
import '../../styles/global.sass';

const HomePageTemplate = (props) => {
  const { meta_title, meta_description, projects } = props;

  // TODO: fix font
  // TODO: looks good on tablet
  // TODO: looks good on large screen
  // TODO: add social icons
  // TODO: figure out CMS
  // TODO: make sure meta is good / on every page
  // TODO: delete unneeded code
  // TODO: make sure emails go to fs
  // breakpoints:
  // 480px
  // 768px
  // 1024px
  // 1200px

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='background-image custom-large-section'>
        <div className='is-flex is-align-items-start'>
          <h1 className='custom-header has-text-weight-light has-text-info is-size-1-desktop is-size-2-tablet is-size-3-mobile is-uppercase'>
            We are
            <br />
            <strong className='has-text-info'>
              connectors, <br />
              builders
            </strong>{' '}
            and <br />
            <strong className='has-text-info'> accelerators</strong>.
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
      <OurWork projects={projects} />
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
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      blurb: PropTypes.string,
      services: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default HomePageTemplate;
