/* eslint-disable semi */
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const AboutUsTemplate = (props) => {
  const { meta_title, meta_description, values, quotes } = props;

  quotes.blurbs.map((quote, i) => {
    console.log('author', quote.title);
  });

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='section is-medium has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-1-desktop'>
          WE DELIVER
          <br /> <strong className='has-text-info'>
            TALENT SOLUTIONS
          </strong>{' '}
          <br /> THAT HELP <br />{' '}
          <strong className='has-text-info'>CREATE IMPACT.</strong>
        </h1>
      </section>

      <section className='section is-medium'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop'>
              OUR <strong>VALUES</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{values}</p>
          </div>
        </div>
      </section>

      <section className='section is-large'>
        <h1 className='has-text-black has-text-weight-light is-size-2-desktop'>
          WHY <strong>WORK</strong> WITH <strong>US</strong>
        </h1>
        <div className='columns'>
          {quotes.blurbs.map((quote, i) => (
            <div key={i} className='column is-third'>
              <p className='pr-5 pt-5 is-size-5-desktop'>{quote.text}</p>
              <p className='pr-5 pt-5 is-size-5-desktop'>
                <strong>{quote.author}</strong>
              </p>
              <p className='pr-5 is-size-5-desktop'>
                <strong>{quotes.title}</strong>
              </p>
            </div>
          ))}
          ;
        </div>

        <h1 className='has-text-black pt-5 has-text-weight-light is-size-2-desktop'>
          WE'RE PROUD OF THE AWARDS WE HAVE WON.
        </h1>
      </section>
    </div>
  );
};
AboutUsTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  values: PropTypes.string,
  quotes: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

export default AboutUsTemplate;
