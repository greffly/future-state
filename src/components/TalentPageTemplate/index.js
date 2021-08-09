import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { ContactForm } from '../forms';
import WhoWeWorkWith from '../WhoWeWorkWith';
import ProgressiveImageContainer from '../ProgressiveImageContainer';
import './styles.sass';

const TalentPageTemplate = (props) => {
  const {
    title,
    meta_title,
    meta_description,
    why_us,
    talent_members,
    roundedImageClassName,
    quotes,
    talent_quote,
  } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section
        className='custom-medium-section has-background-black'
        id='talent-top-section'
      >
        <h1 className='has-text-info has-text-weight-light is-size-1-desktop is-size-3-mobile'>
          LOREM IPSUM IS
          <br /> <strong className='has-text-info'>
            TALENT BEFS
          </strong> <br /> FILA MING <br />
          <strong className='has-text-info'>SMARN YARGERS</strong>{' '}
        </h1>
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='top-circle-graphic'
        />
        <ProgressiveImageContainer
          image='/img/talent-puzzle.svg'
          alt='circle graphic'
          className='talent-puzzle-pieces'
        />
      </section>

      <section className='custom-medium-section' id='talent-listen-section'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-4-mobile'>
              WHY US? <strong>WE LISTEN</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{why_us}</p>
          </div>
          <div className='column is-flex is-align-items-center'>
            <ProgressiveImageContainer
              image='/img/quote-light-blue.svg'
              alt='quote graphic'
              className='quote-with-talent'
            />
            <p className='is-size-5-desktop talent-quote'>{talent_quote}</p>
          </div>
        </div>
        <ProgressiveImageContainer
          image='/img/talent-sound-waves.svg'
          alt='sound waves graphic'
          className='talent-sound-waves'
        />
      </section>

      <section className='section is-medium has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop is-size-4-mobile has-text-centered-mobile'>
          WHO WE <strong className='has-text-info'>WORK </strong> WITH
        </h1>
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='talent-work-graphic'
        />
        <WhoWeWorkWith
          talent_members={talent_members}
          roundedImageClassName={roundedImageClassName}
        />
      </section>

      <section className='section is-medium has-background-grey'>
        <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-4-mobile'>
          WHAT FOLKS ARE <strong>SAYING</strong>
        </h1>
        <div className='columns'>
          {quotes.blurbs.map((quote, i) => (
            <div key={i} className='column is-third'>
              <ProgressiveImageContainer
                image='/img/quote-light-blue.svg'
                alt='quotation mark graphic'
                className='quote-with-blurbs'
              />
              <div className='mt-3 ml-4'>
                <p className='pr-5 pt-5 is-size-5-desktop'>{quote.text}</p>
                <p className='pr-5 pt-5 is-size-5-desktop'>
                  <strong>{quote.author}</strong>
                </p>
                <p className='pr-5 is-size-5-desktop'>
                  <strong>{quote.title}</strong>
                </p>
                <hr className='has-background-info hr-tag' />
              </div>
            </div>
          ))}
          ;
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

TalentPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  why_us: PropTypes.string,
  talent_members: PropTypes.shape({
    members: PropTypes.array,
  }),
  roundedImageClassName: PropTypes.string,
  quotes: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  talent_quote: PropTypes.string,
};

export default TalentPageTemplate;
