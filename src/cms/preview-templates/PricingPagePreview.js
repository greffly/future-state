/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import AboutUsTemplate from '../../components/AboutUsTemplate';

const PricingPagePreivew = ({ entry, getAsset }) => {
  const quoteBlurbs = entry.getIn(['data', 'quotes', 'blurbs']);
  const blurbs = quoteBlurbs ? quoteBlurbs.toJS() : [];

  return (
    <AboutUsTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      values={entry.getIn(['data', 'values', 'description'])}
      quotes={{ blurbs }}
      diversity={entry.getIn(['data', 'diversity'])}
    />
  );
};

PricingPagePreivew.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PricingPagePreivew;
