/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import CompanyPageTemplate from '../../components/CompanyPageTemplate';

const CompanyPagePreview = ({ entry, getAsset }) => {
  const oneMember = entry.getIn(['data', 'talent_members', 'members']);
  const members = oneMember ? oneMember.toJS() : [];

  const quoteBlurbs = entry.getIn(['data', 'quotes', 'blurbs']);
  const blurbs = quoteBlurbs ? quoteBlurbs.toJS() : [];

  return (
    <CompanyPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      talent_members={{ members }}
      quotes={{ blurbs }}
    />
  );
};

CompanyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CompanyPagePreview;
