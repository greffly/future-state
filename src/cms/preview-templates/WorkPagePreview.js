/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import WorkPageTemplate from '../../components/WorkPageTemplate';

const WorkPagePreview = ({ entry, getAsset }) => {
  return (
    <WorkPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
    />
  );
};

WorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default WorkPagePreview;
