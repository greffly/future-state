/* eslint-disable semi */
import React from 'react';
import Helmet from 'react-helmet';
import Pricing from '../Pricing';
import PropTypes from 'prop-types';

const PricingPageTemplate = (props) => {
  const { title, meta_title, meta_description, pricing } = props;

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
            <p className='pr-5 pt-5 is-size-4-desktop'>{pricing.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

export default PricingPageTemplate;
