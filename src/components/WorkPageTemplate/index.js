/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import { ContactForm } from '../forms';
import './styles.sass';

const WorkPageTemplate = (props) => {
  const { projects } = props;

  return (
    <div>
      <section className='section is-large has-background-black'>
        <h1 className='has-text-weight-light is-size-1-desktop is-size-3-mobile has-text-info'>
          OUR WORK IS <br />
          <strong className='has-text-info'>WHAT WE DO</strong>
        </h1>
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='top-circle-graphic'
        />
      </section>

      <section className='section is-medium has-background-grey'>
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
      </section>
      <ContactForm />
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
      services: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default WorkPageTemplate;
