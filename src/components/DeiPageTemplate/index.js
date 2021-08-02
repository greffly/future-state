/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from '../forms';

const DeiPageTemplate = () => {
  return (
    <div>
      <section className='section is-large has-background-black'>
        <h1 className='has-text-weight-light is-size-1-desktop is-size-3-mobile has-text-info'>
          DIVERSITY, EQUITY & INCLUSION
        </h1>
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
