/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from '../forms';
import './styles.sass';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const DeiPageTemplate = () => {
  return (
    <div>
      <section className='custom-large-section is-large has-background-black'>
        <h1 className='has-text-weight-light is-size-1-desktop is-size-3-mobile has-text-info'>
          DIVERSITY, EQUITY <br />
          <strong className='has-text-info'>& INCLUSION</strong>
        </h1>
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='dei-circle-graphic'
        />
        <ProgressiveImageContainer
          image='/img/bee.png'
          alt='bee graphic'
          className='bee-graphic'
        />
        <ProgressiveImageContainer
          image='/img/bee1.png'
          alt='bee graphic'
          className='bee-graphic-1'
        />
      </section>
      <section className='custom-medium-section'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
              How we get this <strong>done</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>
              Future State’s mission is to promote equitable hiring through our
              commitment to embrace diverse identities, thoughts, and
              backgrounds, free from implicit bias. We believe that diversity of
              people leads to the diversity of thought, creativity, and a more
              equitable workplace and world. We are committed to being allies
              and advocates for marginalized people everywhere. We stand
              alongside anyone fighting for Social Justice, Racial Justice, and
              Economic Justice.{' '}
            </p>
          </div>
        </div>
      </section>
      <section className='custom-medium-section has-background-black'>
        <h1 className='has-text-info has-text-centered has-text-weight-light p-5 is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
          Differentiators
        </h1>
        <div className='columns pt-6'>
          <div className='column is-third p-5 service-blurbs'>
            <p className='is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-centered'>
              <strong className='has-text-info is-uppercase'>
                CUSTOM SOLUTIONS
              </strong>
            </p>
            <p className='pt-5 is-size-5-desktop has-text-white has-text-centered'>
              We develop custom, streamlined processes and solutions for
              projects and ongoing initiatives.
            </p>
          </div>
          <div className='column is-third p-5 service-blurbs'>
            <p className='is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-centered'>
              <strong className='has-text-info is-uppercase'>
                RELATIONSHIPS FIRST
              </strong>
            </p>
            <p className='pt-5 is-size-5-desktop has-text-white has-text-centered'>
              We nurture relationships with a diverse range of exceptional
              engineering talent to help fulill a tech organization’s unique
              strategy and goals.
            </p>
          </div>
          <div className='column is-third p-5 service-blurbs'>
            <p className='is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-centered'>
              <strong className='has-text-info is-uppercase'>
                ORGANIZATIONAL IMPACT
              </strong>
            </p>
            <p className='pt-5 is-size-5-desktop has-text-white has-text-centered'>
              We are committed to individual and organizational results and
              success.
            </p>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

DeiPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
};

export default DeiPageTemplate;
