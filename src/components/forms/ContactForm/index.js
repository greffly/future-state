/* eslint-disable semi */
import React from 'react';
import { Formik, Field } from 'formik';
import { navigate } from 'gatsby';
import validationSchema from './validationSchema';
import './styles.sass';
import '../../../styles/global.sass';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  return (
    <section className='section is-small has-background-grey-dark'>
      <div className='contact-form'>
        <h1 className='has-text-white is-size-2-desktop is-size-3-tablet is-size-4-mobile pb-3 ml-3'>
          DROP US A LINE
        </h1>
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
                <div className='column m-3'>
                  <div className='field'>
                    <label className='label has-text-info is-size-5'>
                      Name
                    </label>
                    <div className='control'>
                      <Field
                        className='input is-info has-background-grey-dark'
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

                  <div className='field pt-4'>
                    <label className='label has-text-info is-size-5'>
                      Email
                    </label>
                    <div className='control'>
                      <Field
                        className='input is-info has-background-grey-dark'
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

                  <div className='field pt-4'>
                    <label className='label has-text-info is-size-5'>
                      Company (Optional)
                    </label>
                    <div className='control'>
                      <Field
                        className='input is-info has-background-grey-dark'
                        type='text'
                        placeholder='Type Something'
                        name='message'
                        id='message'
                        rows='6'
                      />
                    </div>
                    {touched.message && errors.message && (
                      <small className='has-text-danger'>
                        {errors.message}
                      </small>
                    )}
                  </div>
                </div>

                <div className='column m-3'>
                  <label className='label has-text-info is-size-5'>
                    About You
                  </label>
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

                  <div className='field pt-4'>
                    <label className='label has-text-info is-size-5'>
                      Comment
                    </label>
                    <div className='control'>
                      <Field
                        className='textarea is-info has-background-grey-dark'
                        component='textarea'
                        placeholder='Type Something'
                        name='message'
                        id='message'
                        rows='6'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='field'>
                <div className='control column is-2 p-0'>
                  <button
                    className='button is-info p-5 is-size-5 is-fullwidth mt-3 ml-3'
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
      </div>
    </section>
  );
};

export { ContactForm };
