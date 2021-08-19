import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import './styles.sass';
import { ContactForm } from '../forms';
import ProgressiveImageContainer from '../ProgressiveImageContainer';

const CompanyPageTemplate = (props) => {
  const {
    meta_title,
    meta_description,
    save_time,
    we_find_your_person,
    quotes,
    services,
    industries,
  } = props;

  return (
    <div className='hey'>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='custom-large-section has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-1-desktop is-size-2-tablet is-size-3-mobile is-uppercase'>
          Something great
          <br />{' '}
          <strong className='has-text-info'>about companies here.</strong>
        </h1>
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='company-circle-graphic'
        />
      </section>
      <div className='graphic-container'>
        <ProgressiveImageContainer
          image='/img/companies-binoculars.svg'
          alt='binocular graphic'
          className='company-binoculars'
        />
      </div>

      <section className='custom-medium-section graphic-container'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
              Why us? <br /> We find your <strong>10/10 person</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{we_find_your_person}</p>
          </div>
          <div className='column is-flex is-align-items-center is-justify-content-center'>
            <ProgressiveImageContainer
              image='/img/companies-checkmarks.svg'
              alt='checkmark graphic'
              className='company-checkmarks'
            />
          </div>
        </div>
      </section>

      <section className='custom-medium-section has-background-black'>
        <h1 className='has-text-info has-text-centered has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
          Our <strong className='has-text-info'>Services </strong>
        </h1>
        <ProgressiveImageContainer
          image='/img/home-circle-graphic.svg'
          alt='circle graphic'
          className='company-work-graphic'
        />
        <div className='columns pt-6'>
          {services.service_blurbs.map((service, i) => (
            <div key={i} className='column is-third p-5 service-blurbs'>
              <div className='column is-5 is-flex is-justify-content-center'>
                <ProgressiveImageContainer
                  image={service.image}
                  alt='INC 5000 2019'
                />
              </div>
              <p className='is-size-3-desktop has-text-centered'>
                <strong className='has-text-info is-uppercase'>
                  {service.title}
                </strong>
              </p>
              <p className='pt-5 is-size-5-desktop has-text-white has-text-centered'>
                {service.text}
              </p>
            </div>
          ))}
          ;
        </div>
        <div>
          <p className='is-size-3 is-size-4-mobile'>
            <strong className='has-text-info has-text-centered is-uppercase is-flex is-flex-direction-column p-6'>
              Industries Served
            </strong>
          </p>
          <div className='columns is-multiline is-flex pt-5'>
            {industries.names.map((industry, i) => (
              <div
                key={i}
                className='has-text-white column is-4 is-full-mobile has-text-centered'
              >
                <p className='is-size-4-desktop is-uppercase'>
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='custom-medium-section'>
        <div className='columns'>
          <div className='column is-half-desktop is-two-thirds-tablet'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
              We save you <strong>time</strong>
            </h1>
            <p className='pt-5 is-size-4-desktop'>{save_time}</p>
          </div>
          <div className='column is-flex is-align-items-center is-justify-content-center'>
            <ProgressiveImageContainer
              image='/img/companies-clock.svg'
              alt='clock graphic'
              className='company-clock'
            />
          </div>
        </div>
      </section>

      <section className='custom-medium-section has-background-grey'>
        <h1 className='has-text-black has-text-weight-light is-size-2-desktop is-size-3-tablet is-size-4-mobile is-uppercase'>
          What folks are <strong>saying</strong>
        </h1>
        <div className='columns'>
          {quotes.blurbs.map((quote, i) => (
            <div key={i} className='column is-third'>
              <ProgressiveImageContainer
                image='/img/quote-light-blue.svg'
                alt='quotation mark graphic'
                className='quote-with-blurbs'
              />
              <div className='mt-3 mx-5'>
                <p className='pt-5 is-size-5-desktop'>{quote.text}</p>
                <p className='pt-5 is-size-5-desktop'>
                  <strong>{quote.author}</strong>
                </p>
                <p className='is-size-5-desktop'>
                  <strong>{quote.title}</strong>
                </p>
                <hr className='has-background-info hr-tag' />
              </div>
            </div>
          ))}
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
