/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const OurTeam = ({ teamMembers }) => {
  return (
    <section className='section has-background-grey is-medium'>
      <h1 className='has-text-black has-text-weight-light has-text-centered is-size-2 pl-6-desktop'>
        OUR <strong className='has-text-black'>TEAM</strong>
      </h1>
      <div className='columns is-multiline'>
        {teamMembers.members.map((teamMember, i) => (
          <div key={i} className='column is-4 p-6 has-text-black'>
            <div className='pt-5'>
              <p className='has-text-centered'>
                <ProgressiveImageContainer
                  image={teamMember.image}
                  alt={`team member ${teamMember.name} image`}
                />
              </p>
              <p className='is-size-4 is-uppercase pt-3'>{teamMember.name}</p>
              <p className='is-size-5 is-uppercase'>{teamMember.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
OurTeam.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default OurTeam;
