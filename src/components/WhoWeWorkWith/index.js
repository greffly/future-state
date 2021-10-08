/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import './styles.sass';
// import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

const WhoWeWorkWith = ({ talent_members, roundedImageClassName }) => {
  const firstFour = talent_members.members.slice(0, 4);
  const secondFour = talent_members.members.slice(4, 8);
  return (
    <div className='columns is-multiline'>
      <Carousel id='carousel-container' plugins={['arrows']}>
        <div className='carousel-grid'>
          {firstFour.map((talent_member, i) => (
            <div key={i} className='column talent-member'>
              <div className='columns'>
                <div className='column work-image-container'>
                  <div className='image is-128x128'>
                    <ProgressiveImageContainer
                      image={talent_member.image}
                      alt={`team member ${talent_member.name} image`}
                      className='rounded-image'
                    />
                  </div>
                </div>
                <div>
                  <p className='is-size-4-desktop is-uppercase pb-2'>
                    <strong className='has-text-info'>
                      {talent_member.name}
                    </strong>
                  </p>
                  <p className='is-size-5-desktop has-text-white'>
                    {talent_member.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='carousel-grid'>
          {secondFour.map((talent_member, i) => (
            <div key={i} className='column p-6 is-flex-direction-row'>
              <div className='columns'>
                <div className='column work-image-container'>
                  <p className='has-text-centered image is-128x128'>
                    <ProgressiveImageContainer
                      image={talent_member.image}
                      alt={`team member ${talent_member.name} image`}
                      className='rounded-image'
                    />
                  </p>
                </div>
                <div>
                  <p className='is-size-4-desktop is-uppercase pb-2'>
                    <strong className='has-text-info'>
                      {talent_member.name}
                    </strong>
                  </p>
                  <p className='is-size-5-desktop has-text-white'>
                    {talent_member.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Carousel>
      <div className='carousel-mobile'>
        <div className='carousel-grid'>
          {talent_members.members.map((talent_member, i) => (
            <div key={i} className='column talent-member'>
              <div className='columns'>
                <div className='column work-image-container'>
                  <p className='has-text-centered image is-128x128'>
                    <ProgressiveImageContainer
                      image={talent_member.image}
                      alt={`team member ${talent_member.name} image`}
                      className='rounded-image'
                    />
                  </p>
                </div>
                <div>
                  <p className='is-size-4-desktop is-uppercase pb-2'>
                    <strong className='has-text-info'>
                      {talent_member.name}
                    </strong>
                  </p>
                  <p className='is-size-5-desktop has-text-white'>
                    {talent_member.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

WhoWeWorkWith.propTypes = {
  talent_members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default WhoWeWorkWith;
