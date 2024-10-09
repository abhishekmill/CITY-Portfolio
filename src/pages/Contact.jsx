import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters long')
      .max(20, 'Username cannot exceed 20 characters')
      .required('Username is required'),
    phone: Yup.string()
      .matches(/^\d+$/, 'Phone number must be numeric')
      .min(10, 'Phone number must be at least 10 digits')
      .max(13, 'Phone number cannot exceed 13 digits')
      .required('Phone number is required'),
    acceptTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('Terms and conditions acceptance is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate form submission (replace with your actual submission logic)
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <div>
     
    </div>
  );
};

export default MyForm;
