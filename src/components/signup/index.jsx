import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './signUp.css'

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
export default function SignupForm () {

  const [user, setUser] = useState({});

  const handleClick = () => {
    console.log(user.firstName);
  }

  return (
    <div className='backgroundStyle'>
      <h1 >Create account</h1>
      <p className='please'>Please enter your informations</p>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'password must be atleast 8 character long')
            .matches(/[0-9]/, 'password must contain numbers')
            .matches(/[^\w]/, 'weak password'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            alert("Go ahead and login")
            localStorage.setItem('currencyUser', JSON.stringify(values))
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className='mystyle'>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter only one name eg: Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MyTextInput
            label = "Password"
            name = "password"
            type = "password"
          />

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button
            type="submit"
            onClick={handleClick}
            className='submit'
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};