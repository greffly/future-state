/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './styles.sass';

const OurTeam = ({ teamMembers }) => {
  // TODO: add linkedin and email icons
  return (
    <section className='has-background-grey'>
      <h1 className='has-text-black has-text-weight-light has-text-centered is-size-2 p-6'>
        OUR <strong className='has-text-black'>TEAM</strong>
      </h1>
      <div className='columns is-multiline all-team-members'>
        {teamMembers.members.map((teamMember, i) => (
          <div
            key={i}
            className='column is-4-desktop is-6-tablet p-0 has-text-black'
          >
            <div className='pt-5'>
              <div className='has-text-centered'>
                <GatsbyImage
                  image={getImage(teamMember.image)}
                  alt={`team member ${teamMember.name} image`}
                  className='image-container'
                  style={{ maxHeight: 400 }}
                />
              </div>
              <div className='team-info'>
                <div className='team-name-title has-text-centered'>
                  <p className='is-size-4 is-uppercase pt-3'>
                    {teamMember.name}
                  </p>
                  <p className='is-size-5 is-uppercase'>{teamMember.title}</p>
                </div>
                <div className='team-links'>
                  <a
                    href={teamMember.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='each-link'
                  >
                    <ProgressiveImageContainer
                      image='/img/LinkedinLogo.png'
                      alt={`team member ${teamMember.name} linkedin link`}
                    />
                  </a>
                  <a
                    href={`mailto:${teamMember.email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='each-link'
                  >
                    <ProgressiveImageContainer
                      image='/img/EmailLogo.png'
                      alt={`team member ${teamMember.name} email link`}
                    />
                  </a>
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
