/* eslint-disable semi */
import React from 'react';
import { Formik, Field } from 'formik';
import { navigate } from 'gatsby';
import validationSchema from './validationSchema';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  return (
    <section className='section is-medium has-background-grey-dark'>
      <h1 className='has-text-white'>DROP US A LINE</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch('/?no-cache=1', {
            //eslint-disable-line
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': 'contact',
              ...values,
            }),
          })
            .then(() => {
              navigate('/contact/success');
              setSubmitting(false);
            })
            .catch((error) => {
              console.log(error);
              alert('Error: Please Try Again!'); //eslint-disable-line
              setSubmitting(false);
            });
        }}
        render={({
          errors,
          touched,
          isSubmitting,
          handleSubmit,
          handleReset,
        }) => (
          <form
            name='contact'
            id='contact-form'
            onSubmit={handleSubmit}
            onReset={handleReset}
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <div className='columns'>
              <div className='column'>
                <div className='field'>
                  <label className='label has-text-info'>Name</label>
                  <div className='control'>
                    <Field
                      className='input'
                      type='text'
                      placeholder='Type Something'
                      name='name'
                      id='name'
                    />
                  </div>
                  {touched.name && errors.name && (
                    <small className='has-text-danger'>{errors.name}</small>
                  )}
                </div>

                <div className='field'>
                  <label className='label has-text-info'>Email</label>
                  <div className='control'>
                    <Field
                      className='input'
                      type='email'
                      placeholder='Type Something'
                      name='email'
                      id='email'
                    />
                  </div>
                  {touched.email && errors.email && (
                    <small className='has-text-danger'>{errors.email}</small>
                  )}
                </div>

                <div className='field'>
                  <label className='label has-text-info'>
                    Company (Optional)
                  </label>
                  <div className='control'>
                    <Field
                      className='input'
                      type='text'
                      placeholder='Type Something'
                      name='message'
                      id='message'
                      rows='6'
                    />
                  </div>
                  {touched.message && errors.message && (
                    <small className='has-text-danger'>{errors.message}</small>
                  )}
                </div>
              </div>

              <div className='column'>
                <label className='label has-text-info'>About You</label>
                <div className='control pb-2'>
                  <label className='radio has-text-info pr-5'>
                    <input type='radio' name='answer' className='mr-2' />
                    Looking for talent
                  </label>
                  <label className='radio has-text-info'>
                    <input type='radio' name='answer' className='mr-2' />I am
                    the talent
                  </label>
                </div>

                <div className='field'>
                  <label className='label has-text-info'>Comment</label>
                  <div className='control'>
                    <Field
                      className='textarea'
                      component='textarea'
                      placeholder='Type Something'
                      name='message'
                      id='message'
                      rows='5'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='field'>
              <div className='control'>
                <button
                  className='button is-info'
                  type='submit'
                  disabled={isSubmitting}
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
        )}
      />
    </section>
  );
};

export { ContactForm };
