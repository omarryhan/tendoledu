import React from 'react';
import {
 Formik, Form, Field, ErrorMessage,
} from 'formik';
import styled from 'styled-components';
import { useAlert } from 'react-alert';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import Button_ from '@material-ui/core/Button';
import { SIGNUP_ROUTE, RECAPTCHA_PUBLIC_KEY } from '../constants';


const recaptchaRef = React.createRef();

const onSubmit = async (
    values,
    { setSubmitting, resetForm },
    alert,
    currentPage,
    modalSubmitHandler,
) => {
    await recaptchaRef.current.execute();
    const recaptchaValue = recaptchaRef.current.getValue();
    try {
        const bodyFormData = new FormData();
        bodyFormData.set('expertise', values.expertise);
        bodyFormData.set('email', values.email);
        bodyFormData.set('page_name', currentPage);
        bodyFormData.set('g-recaptcha-response', recaptchaValue);
        await axios({
          method: 'post',
          url: SIGNUP_ROUTE,
          data: bodyFormData,
          config: { headers: { 'Content-Type': 'multipart/form-data' } },
          });
    } catch (e) {
        // If you get a CORS related error in development,
        // don't worry about it. It's working correctly @ tendoledu.com
        alert.error('Something went wrong :(. Please try again later. Or send us an email at: contact@tendoledu.com');
        console.error(e);
        return;
    } finally {
        modalSubmitHandler();
        resetForm();
        setSubmitting(false);
    }
    alert.success('Thank you! You\'ll be hearing from us soon');
};

const expertiseOptions = Object.freeze([
    'Marketing',
    'Finance',
    'Web Development',
    'Graphic Design',
    'Other',
]);

const Button = styled(Button_)`
    width: 1000px;
`;

export default ({ currentPage, onSubmit: modalSubmitHandler }) => {
    const alert = useAlert();
    return (
      <Formik
        initialValues={{ email: '', expertise: '' }}
        validate={(values) => {
                const errors = {};

                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }

                if (!values.expertise) {
                  errors.expertise = 'Missing expertise';
                }

                return errors;
            }}
        onSubmit={async (...args) => onSubmit(...args, alert, currentPage, modalSubmitHandler)}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" required />
            <ErrorMessage name="email" component="div" />
            <Field component="select" name="expertise" required>
              <option value="" disabled selected hidden>Select an Expertise</option>
              {expertiseOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Field>
            <ErrorMessage name="expertise" component="div" />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
                Sign Up
            </Button>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={RECAPTCHA_PUBLIC_KEY}
            />
          </Form>
            )}
      </Formik>
    );
};
