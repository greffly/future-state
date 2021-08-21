/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import './styles.sass';

const OurTeam = ({ teamMembers }) => {
  // TODO: add linkedin and email icons
  return (
    <section className='custom-medium-section has-background-grey'>
      <h1 className='has-text-black has-text-weight-light has-text-centered is-size-2 pl-6-desktop'>
        OUR <strong className='has-text-black'>TEAM</strong>
      </h1>
      <div className='columns is-multiline'>
        {teamMembers.members.map((teamMember, i) => (
          <div
            key={i}
            className='column is-4-desktop is-6-tablet p-6 has-text-black'
          >
            <div className='pt-5'>
              <div className='has-text-centered'>
                <ProgressiveImageContainer
                  image={teamMember.image}
                  alt={`team member ${teamMember.name} image`}
                  className='image-container'
                />
              </div>
              <div className='team-info'>
                <div>
                  <p className='is-size-4 is-uppercase pt-3'>
                    {teamMember.name}
                  </p>
                  <p className='is-size-5 is-uppercase'>{teamMember.title}</p>
                </div>
                <div className='team-links'>
                  <ProgressiveImageContainer
                    image='/img/social-linkedin.svg'
                    alt={`team member ${teamMember.name} linkedin link`}
                    className='each-link'
                  />
                  <ProgressiveImageContainer
                    image='/img/social-twitter.svg'
                    alt={`team member ${teamMember.name} email link`}
                    className='each-link'
                  />
                </div>
              </div>
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
