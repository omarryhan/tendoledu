import React from 'react';
import PropTypes from 'prop-types';
import {
 Formik, Form, Field, ErrorMessage,
} from 'formik';
import styled from 'styled-components';
import { useAlert } from 'react-alert';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import Button_ from '@material-ui/core/Button';
import {
 SIGNUP_ROUTE, RECAPTCHA_PUBLIC_KEY, FONT_SIZES, COLOR_PALETTE,
} from '../constants';
import { sleep } from '../utils';


const recaptchaRef = React.createRef();

const StyledForm = styled(Form)`
`;

const FieldAndFieldErrorWrapper = styled.div`
  margin: 2vh 0;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;

  ${FONT_SIZES.lg}

  border: 1.5px solid ${COLOR_PALETTE.black.primary()};
  -webkit-border-radius: 5px;
  border-radius: 5px;

  font-family: 'Ubuntu';

  &:focus {
    border-color: ${COLOR_PALETTE.blue.primary()};
  };
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  ${FONT_SIZES.lg}
  font-weight: bold;
  padding-top: 2px;
`;

const StyledButton = styled(Button_)`
`;

const StyledLabel = styled.label`
  display: block;
  ${FONT_SIZES.lg}
  margin: 0 0;
  text-align:left;
  padding-top:10px;
`;

const ButtonText = styled.p`
  font-weight: bold;
  margin: 0;
  ${FONT_SIZES.lg}
`;


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
        alert.error('Something went wrong :(. Please try again later. Or send us an email at: contact@tendoledu.com');
        console.error(e);
        return;
    } finally {
        modalSubmitHandler();
        resetForm();
        setSubmitting(false);
      }
      alert.success('Thank you! You\'ll be hearing from us soon');
      await sleep(5000);
      alert.info(`A ${values.expertise === 'Other' ? 'Marketing' : values.expertise} school just signed up`);
};

const expertiseOptions = Object.freeze([
    'Marketing',
    'Web Development',
    'Graphic Design',
    'Other',
]);

const SignUpForm = ({ currentPage, onSubmit: modalSubmitHandler }) => {
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
            errors.expertise = 'Required';
          }

          return errors;
        }}
        onSubmit={async (...args) => onSubmit(...args, alert, currentPage, modalSubmitHandler)}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FieldAndFieldErrorWrapper>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledField type="email" name="email" required />
              <StyledErrorMessage name="email" component="div" />
            </FieldAndFieldErrorWrapper>

            <FieldAndFieldErrorWrapper>
              <StyledLabel htmlFor="expertise">Expertise</StyledLabel>
              <StyledField component="select" name="expertise" required>
                <option value="" disabled selected hidden>Select an Expertise</option>
                {expertiseOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </StyledField>
              <StyledErrorMessage name="expertise" component="div" />
            </FieldAndFieldErrorWrapper>

            <div style={{ marginTop: '3.5vh' }}>
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                <ButtonText>
                    Sign Up!
                </ButtonText>
              </StyledButton>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={RECAPTCHA_PUBLIC_KEY}
            />
          </StyledForm>
            )}
      </Formik>
    );
};

SignUpForm.propTypes = {
  currentPage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
