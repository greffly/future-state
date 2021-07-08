/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const OurTeam = (props) => {
  const { gridItems } = props;
  return (
    <section className='section has-background-grey is-large'>
      <h1 className='has-text-black has-text-weight-light is-size-2-desktop'>
        OUR <strong>TEAM</strong>
      </h1>
    </section>
    // <div className='columns is-multiline'>
    //   {gridItems.map((item, idx) => (
    //     <div key={idx} className='column is-6' style={{ borderRadius: '5px' }}>
    //       <section className='section'>
    //         <p className='has-text-centered'>
    //           {/* <ProgressiveImageContainer
    //             image={item.image}
    //             alt={`gatsby-business-starter-${idx}`}
    //           /> */}
    //         </p>
    //         <p>{item.text}</p>
    //       </section>
    //     </div>
    //   ))}
    // </div>
  );
};
OurTeam.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default OurTeam;
