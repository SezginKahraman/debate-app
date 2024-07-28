// src/components/Register.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/Register.css';

const Register = ({ onRegister }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    }),
    onSubmit: values => {
      onRegister(values.username, values.password, values.email);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="register-form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;