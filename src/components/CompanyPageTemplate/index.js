import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { ContactForm } from '../forms';

const CompanyPageTemplate = (props) => {
  const {
    title,
    meta_title,
    meta_description,
    save_time,
    we_find_your_person,
    quotes,
  } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='section is-large has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-1-desktop'>
          SOMETHING GREAT
          <br />{' '}
          <strong className='has-text-info'>ABOUT COMPANIES HERE.</strong>
        </h1>
      </section>

      <section className='section is-medium'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop'>
              WHY US? <br /> WE FIND YOUR <strong>10/10 PERSON</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{we_find_your_person}</p>
          </div>
        </div>
      </section>

      <section className='section is-medium has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop'>
          OUR <strong className='has-text-info'>SERVICES </strong>
        </h1>
      </section>

      <section className='section is-medium'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop'>
              WE SAVE YOU <strong>TIME</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{save_time}</p>
          </div>
        </div>
      </section>

      <section className='section is-medium has-background-grey'>
        <h1 className='has-text-black has-text-weight-light is-size-2-desktop'>
          WHAT FOLKS ARE <strong>SAYING</strong>
        </h1>
        <div className='columns'>
          {quotes.blurbs.map((quote, i) => (
            <div key={i} className='column is-third'>
              <p className='pr-5 pt-5 is-size-5-desktop'>{quote.text}</p>
              <p className='pr-5 pt-5 is-size-5-desktop'>
                <strong>{quote.author}</strong>
              </p>
              <p className='pr-5 is-size-5-desktop'>
                <strong>{quote.title}</strong>
              </p>
            </div>
          ))}
          ;
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

CompanyPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  save_time: PropTypes.string,
  talent_members: PropTypes.shape({
    members: PropTypes.array,
  }),
  roundedImageClassName: PropTypes.string,
  quotes: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  we_find_your_person: PropTypes.string,
};

export default CompanyPageTemplate;
