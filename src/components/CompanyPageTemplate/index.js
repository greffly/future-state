import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import './styles.sass';
import { ContactForm } from '../forms';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const CompanyPageTemplate = (props) => {
  const {
    title,
    meta_title,
    meta_description,
    save_time,
    we_find_your_person,
    quotes,
    services,
    industries,
  } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='section is-large has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-1-desktop is-size-3-mobile'>
          SOMETHING GREAT
          <br />{' '}
          <strong className='has-text-info'>ABOUT COMPANIES HERE.</strong>
        </h1>
      </section>

      <section className='section is-medium'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-4-mobile'>
              WHY US? <br /> WE FIND YOUR <strong>10/10 PERSON</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{we_find_your_person}</p>
          </div>
        </div>
      </section>

      <section className='section is-medium has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop is-size-4-mobile'>
          OUR <strong className='has-text-info'>SERVICES </strong>
        </h1>
        <div className='columns is-flex pt-6'>
          {services.service_blurbs.map((service, i) => (
            <div
              key={i}
              className='column is-third is-flex is-flex-direction-column p-6 service-blurbs'
            >
              <div className='column is-5'>
                <ProgressiveImageContainer
                  image='/img/coffee-gear.png'
                  alt='INC 5000 2019'
                />
              </div>
              <p className='pr-5 is-size-3-desktop'>
                <strong className='has-text-info is-uppercase'>
                  {service.title}
                </strong>
              </p>
              <p className='pr-5 pt-5 is-size-5-desktop has-text-white has-text-centered'>
                {service.text}
              </p>
            </div>
          ))}
          ;
        </div>
        <div>
          <p className='pr-5 is-size-3-desktop'>
            <strong className='has-text-info is-uppercase is-flex is-flex-direction-column p-6 industries-served'>
              Industries Served
            </strong>
          </p>
          <div className='columns is-multiline is-flex pt-6'>
            {industries.names.map((industry, i) => (
              <div
                key={i}
                className='has-text-white column is-4 has-text-centered'
              >
                <p className='pr-5 is-size-3-desktop is-uppercase'>
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='section is-medium'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-4-mobile'>
              WE SAVE YOU <strong>TIME</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{save_time}</p>
          </div>
        </div>
      </section>

      <section className='section is-medium has-background-grey'>
        <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-4-mobile'>
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
  services: PropTypes.shape({
    service_blurbs: PropTypes.array,
  }),
  industries: PropTypes.shape({
    names: PropTypes.array,
  }),
};

export default CompanyPageTemplate;
