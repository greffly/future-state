import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../forms'
import WhoWeWorkWith from '../WhoWeWorkWith'

const TalentPageTemplate = (props) => {
  const { title, meta_title, meta_description, why_us, talent_members, roundedImageClassName } = props

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='section is-large has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-1-desktop'>
          SOMETHING GREAT
          <br /> <strong className='has-text-info'>
            ABOUT TALENT HERE.
          </strong>
        </h1>
      </section>

      <section className='section is-medium'>
        <div className='columns'>
          <div className='column is-half'>
            <h1 className='has-text-black has-text-weight-light is-size-2-desktop'>
              WHY US? <strong>WE LISTEN</strong>
            </h1>
            <p className='pr-5 pt-5 is-size-4-desktop'>{why_us}</p>
          </div>
        </div>
      </section>

      <section className='section is-medium has-background-black'>
        <h1 className='has-text-info has-text-weight-light is-size-2-desktop'>
          WHO WE <strong className='has-text-info'>WORK </strong> WITH
        </h1>
        <WhoWeWorkWith talent_members={talent_members} roundedImageClassName={roundedImageClassName} />
      </section>

      <ContactForm />
    </div>
  )
}

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
}

export default TalentPageTemplate
