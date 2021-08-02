/* eslint-disable semi */
import React from 'react';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import { Link } from 'gatsby';

const OurWork = ({ projects }) => {
  return (
    <section className='section is-medium has-background-grey'>
      <h1 className='has-text-weight-light is-size-2-desktop is-size-4-mobile'>
        OUR <strong>WORK</strong>
      </h1>
      <div>
        {projects.summary.map((project, i) => (
          <div key={i}>
            <div className='columns py-6 has-text-black is-flex-desktop is-flex-direction-row-desktop'>
              <div className='column is-4-desktop has-text-centered'>
                <ProgressiveImageContainer
                  image={project.image}
                  alt={`image of ${project.company}`}
                />
              </div>
              <div className='pl-6'>
                <p className='pb-3 is-size-3-desktop is-uppercase'>
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
        ;
      </div>
      <button className='button is-white pl-0 p-5 mt-2 is-size-5-desktop'>
        <Link className='has-text-black' to='/work'>
          MORE PROJECTS →
        </Link>
      </button>
    </section>
  );
};

export default OurWork;
