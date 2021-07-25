/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const WorkPageTemplate = (props) => {
  const { projects } = props;

  return (
    <div>
      <section className='section is-large has-background-black'>
        <h1 className='has-text-weight-light is-size-2-desktop has-text-info'>
          OUR WORK IS <br />
          <strong className='has-text-info'>WHAT WE DO</strong>
        </h1>
      </section>

      <section className='section is-large has-background-grey'>
        {projects.summary.map((project, i) => (
          <div
            key={i}
            className='columns has-text-black is-flex is-flex-direction-row'
          >
            <div className='column is-4 has-text-centered'>
              <ProgressiveImageContainer
                image={project.image}
                alt={`image of ${project.company}`}
              />
            </div>
            <div>
              <p className='pb-3 is-size-3-desktop is-uppercase'>
                {project.company}
              </p>
              <p className='is-size-4-desktop is-uppercase'>Project Brief</p>
              <p className='pb-3 is-size-5-desktop'>{project.blurb}</p>
              <p className='is-size-4-desktop is-uppercase'>Services Used</p>
              <p className='pr-5 is-size-5-desktop'>{project.services}</p>
            </div>
          </div>
        ))}
        ;
      </section>
    </div>
  );
};

WorkPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      blurb: PropTypes.string,
      service: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default WorkPageTemplate;
