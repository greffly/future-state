/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import WorkPageTemplate from '../../components/WorkPageTemplate';

const WorkPagePreview = ({ entry, getAsset }) => {
  const projectBlurbs = entry.getIn(['data', 'projects', 'summary']);
  const summary = projectBlurbs ? projectBlurbs.toJS() : [];

  return (
    <WorkPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      projects={{ summary }}
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
