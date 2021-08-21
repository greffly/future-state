/* eslint-disable semi */
import React from 'react';
import './styles.sass';
import '../../../styles/global.sass';

const ContactForm = () => {
  return (
    <section className='custom-form-section has-background-grey-dark'>
      <div className='contact-form'>
        <h1 className='has-text-white is-size-2-desktop is-size-3-tablet is-size-4-mobile pb-3 ml-3 is-uppercase'>
          Drop us a line
        </h1>
        <form
          method='POST'
          action='https://getform.io/f/66772fd8-35a0-4090-8de4-a1808af5f46d'
          name='contact'
          id='contact-form'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <div className='columns'>
            <div className='column m-3'>
              <div className='field'>
                <label className='label has-text-info is-size-5'>Name</label>
                <div className='control'>
                  <input
                    className='input has-text-info is-info has-background-grey-dark'
                    type='text'
                    placeholder='Type Something'
                    name='Name'
                    id='Name'
                  />
                </div>
              </div>

              <div className='field pt-4'>
                <label className='label has-text-info is-size-5'>Email</label>
                <div className='control'>
                  <input
                    className='input has-text-info is-info has-background-grey-dark'
                    type='email'
                    placeholder='Type Something'
                    name='Email'
                    id='Email'
                  />
                </div>
              </div>

              <div className='field pt-4'>
                <label className='label has-text-info is-size-5'>
                  Company (Optional)
                </label>
                <div className='control'>
                  <input
                    className='input has-text-info is-info has-background-grey-dark'
                    type='text'
                    placeholder='Type Something'
                    name='Company'
                    id='Company'
                    rows='6'
                  />
                </div>
              </div>
            </div>

            <div className='column m-3'>
              <label className='label has-text-info is-size-5'>About You</label>
              <div className='control pb-2 custom-talent-radio'>
                <label className='radio has-text-info pr-5'>
                  <input
                    type='radio'
                    name='Talent'
                    value='Looking for talent'
                    className='mr-2'
                  />
                  Looking for talent
                </label>
                <div>
                  <label className='radio has-text-info'>
                    <input
                      type='radio'
                      name='Talent'
                      value='I am the talent'
                      className='mr-2'
                    />
                    I am the talent
                  </label>
                </div>
              </div>

              <div className='field pt-4'>
                <label className='label has-text-info is-size-5'>Comment</label>
                <div className='control'>
                  <textarea
                    className='textarea has-text-info is-info has-background-grey-dark custom-textarea'
                    component='textarea'
                    placeholder='Type Something'
                    name='Comment'
                    id='Comment'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='field'>
            <div className='control column is-2 p-0'>
              <button
                className='button is-info p-5 is-size-5 is-fullwidth mt-3 form-submit-button'
                type='submit'
              >
                SEND
              </button>
            </div>
          </div>
          {/* {successMessage && <Alert color='success'>Message Sent!</Alert>} */}
        </form>
      </div>
    </section>
  );
};

export { ContactForm };
