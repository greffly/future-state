/* eslint-disable semi */
import React from 'react'
import PropTypes from 'prop-types'
import TalentPageTemplate from '../../components/TalentPageTemplate'

const TalentPagePreview = ({ entry, getAsset }) => {
  const oneMember = entry.getIn(['data', 'talent_members', 'members']);
  const members = oneMember ? oneMember.toJS() : [];

  return (
    <TalentPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      talent_members={{ members }}
    />
  )
}

TalentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TalentPagePreview
