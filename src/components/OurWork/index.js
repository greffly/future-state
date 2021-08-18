/* eslint-disable semi */
import React from 'react';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import { Link } from 'gatsby';
import './styles.sass';

const OurWork = ({ projects }) => {
  return (
    <section className='custom-medium-section has-background-grey'>
      <h1 className='has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
        Our <strong>Work</strong>
      </h1>
      <div>
        {projects.summary.map((project, i) => (
          <div key={i}>
            <div className='columns py-6 has-text-black is-flex-desktop is-flex-direction-row-desktop'>
              <div className='column is-4 has-text-centered'>
                <ProgressiveImageContainer
                  image={project.image}
                  alt={`image of ${project.company}`}
                />
              </div>
              <div className='work-details'>
                <p className='pb-3 pt-2 is-size-3-desktop is-size-4-tablet is-size-5-mobile is-uppercase'>
                  {project.company}
                </p>
                <p className='pb-2 is-size-4-desktop is-uppercase'>
                  Project Brief
                </p>
                <p className='pb-3 is-size-5-desktop'>{project.blurb}</p>
                <p className='pb-2 is-size-4-desktop is-uppercase'>
                  Services Used
                </p>
                {project.services.split(',').map((service) => (
                  <p key={service} className='pr-5 is-size-5-desktop'>
                    {service}
                  </p>
                ))}
              </div>
            </div>
            <hr className='has-background-grey-dark hr-tag' />
          </div>
        ))}
      </div>
      <button className='button is-white pl-0 p-5 mt-2 is-size-5'>
        <Link className='has-text-black is-uppercase' to='/work'>
          More Projects →
        </Link>
      </button>
    </section>
  );
};

export default OurWork;
