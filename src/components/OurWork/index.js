/* eslint-disable semi */
import React from 'react';
import { Link } from 'gatsby';

const OurWork = (props) => {
  const { posts } = props;

  return (
    <section className='section is-large has-background-grey'>
      <h1 className='has-text-weight-light is-size-2-desktop is-size-4-mobile'>
        OUR <strong>WORK</strong>
      </h1>
      <button className='button is-white has-text-primary pl-0 p-5 mt-2 is-size-5-desktop'>
        MORE PROJECTS →
      </button>
    </section>
  );
};

export default OurWork;
