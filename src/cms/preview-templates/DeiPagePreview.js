/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import DeiPageTemplate from '../../components/DeiPageTemplate';

const DeiPagePreview = ({ entry, getAsset }) => {
  return (
    <DeiPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
    />
  );
};

DeiPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default DeiPagePreview;
