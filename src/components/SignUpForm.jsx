import React from 'react';
import {
 Formik, Form, Field, ErrorMessage,
} from 'formik';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

import Button_ from '@material-ui/core/Button';

import { sleep } from '../utils';


const onSubmit = async (values, { setSubmitting }, alert) => {
    await sleep(2000);
    setSubmitting(false);
    alert.success('Thank you! You\'ll be hearing from us soon');
};

const Button = styled(Button_)`
    width: 1000px;
`;

export default () => {
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
        onSubmit={(...args) => onSubmit(...args, alert)}
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
          </Form>
            )}
      </Formik>
    );
};
