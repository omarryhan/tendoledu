import React from 'react';
import {
 Formik, Form, Field, ErrorMessage,
} from 'formik';
import styled from 'styled-components';
import { useAlert } from 'react-alert';
import request from 'superagent';
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
        await request.post(SIGNUP_ROUTE)
            .type('form')
            // .send({ expertise: values.expertise })
            .send({ expertise: 'marketing' })
            .send({ email: values.email })
            .send({ page_name: currentPage })
            .send({ 'g-recaptcha-response': recaptchaValue });
    } catch (e) {
        alert.error('Something went wrong :(. Please try again later. Or send us an email at: contact@tendoledu.com');
        console.error(e);
        return;
    } finally {
        console.log('calling modal submit handler');
        modalSubmitHandler();
        resetForm();
        setSubmitting(false);
    }
    alert.success('Thank you! You\'ll be hearing from us soon');
};

// const expertiseOptions = Object.freeze([
//     'Marketing',
//     'Finance',
//     'Web Development',
//     'Graphic Design',
//     'Other',
// ]);

const Button = styled(Button_)`
    width: 1000px;
`;

export default ({ currentPage, onSubmit: modalSubmitHandler }) => {
    const alert = useAlert();
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
                const errors = {};

                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }

                return errors;
            }}
        onSubmit={(...args) => onSubmit(...args, alert, currentPage, modalSubmitHandler)}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
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
