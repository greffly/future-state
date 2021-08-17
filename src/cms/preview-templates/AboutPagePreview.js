import React from 'react';
import PropTypes from 'prop-types';
import AboutPageTemplate from '../../components/AboutPageTemplate';

const AboutPagePreview = ({ entry, getAsset }) => {
  const quoteBlurbs = entry.getIn(['data', 'quotes', 'blurbs']);
  const blurbs = quoteBlurbs ? quoteBlurbs.toJS() : [];

  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      values={entry.getIn(['data', 'values', 'description'])}
      quotes={{ blurbs }}
      diversity={entry.getIn(['data', 'diversity'])}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutPagePreview;
