/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const WhoWeWorkWith = ({ talent_members, roundedImageClassName }) => {
  return (
    <div className='columns is-multiline'>
      {talent_members.members.map((talent_member, i) => (
        <div key={i} className='column is-half py-6 is-flex-direction-row'>
          <div className='columns'>
            <div className='column pl-6 pr-5'>
              <p className='has-text-centered image is-128x128'>
                <ProgressiveImageContainer
                  image={talent_member.photo}
                  alt={`team member ${talent_member.name} photo`}
                  className={roundedImageClassName}
                />
              </p>
            </div>
            <div>
              <p className='is-size-4-desktop has-text-info'>
                {talent_member.name}
              </p>
              <p className='is-size-5-desktop has-text-white'>
                {talent_member.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

WhoWeWorkWith.propTypes = {
  talent_members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      photo: PropTypes.string,
    })
  ),
};

export default WhoWeWorkWith;
