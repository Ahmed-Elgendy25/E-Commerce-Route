import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './Signup.css';
function Signup() {
  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState('');

  function sendDataToApi(values) {
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((response) => {
        console.log(response);
        if (response.data.message === 'success') {
          navigate('/signin');
        }
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        console.log(err.response.data.message);
      });
  }

  function validationSchema() {
    let validate = Yup.object({
      name: Yup.string().max(5, 'Must be 15 characters or less').required(''),

      lastName: Yup.string()

        .max(20, 'Must be 20 characters or less')

        .required(''),

      email: Yup.string().email('Invalid email address').required(''),

      password: Yup.string()
        .matches(/^[A-Z][a-zA-Z0-9]{6,}$/)
        .required(),

      rePassword: Yup.string().oneOf(
        [Yup.ref('password')],
        'Repassword not same as password'
      ),
    });
    return validate;
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
      sendDataToApi(values);
    },
  });

  return (
    <form className=" my-5 p-5 h-100" onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="row ">
          <div className="title text-center my-3   ">
            <h3
              className="my-3 "
              style={{ letterSpacing: '5px', fontWeight: 350 }}
            >
              Sign up
            </h3>
            <p style={{ color: '#1C1C1C' }} className=" fw-light ">
              Please fill in the information below:
            </p>
          </div>
          <div className="col-md-12 mx-auto">
            <div className="mb-4   ">
              <input
                type="text"
                className="form-control  mx-auto"
                style={{ maxWidth: '30rem' }}
                id="exampleFormControlInput1"
                placeholder="First name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div
                  className=" p-1 mx-auto fw-lighter "
                  style={{ maxWidth: '30rem' }}
                >
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
          </div>

          <div className="col-md-12 mx-auto">
            <div className="mb-4 ">
              <input
                type="text"
                className="form-control  mx-auto"
                style={{ maxWidth: '30rem' }}
                id="exampleFormControlInput1"
                placeholder="Last name"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />

              {formik.touched.lastName && formik.errors.lastName ? (
                <div
                  className=" p-1 mx-auto fw-lighter "
                  style={{ maxWidth: '30rem' }}
                >
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>

          <div className="col-md-12 mx-auto">
            <div className="mb-4 ">
              <input
                type="email"
                className="form-control  mx-auto"
                style={{ maxWidth: '30rem' }}
                id="exampleFormControlInput1"
                placeholder="E-mail"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              {formik.touched.email && formik.errors.email ? (
                <div
                  className=" p-1 mx-auto fw-lighter "
                  style={{ maxWidth: '30rem' }}
                >
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div className="col-md-12 mx-auto">
            <div className="mb-4 ">
              <input
                type="password"
                className="form-control  mx-auto"
                style={{ maxWidth: '30rem' }}
                id="exampleFormControlInput1"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              {formik.touched.password && formik.errors.password ? (
                <div
                  className=" p-1 mx-auto fw-lighter "
                  style={{ maxWidth: '30rem' }}
                >
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <div className="col-md-12 mx-auto">
            <div className="mb-4 ">
              <input
                type="password"
                className="form-control  mx-auto"
                style={{ maxWidth: '30rem' }}
                id="exampleFormControlInput1"
                placeholder="Re-password"
                name="rePassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
              />

              {formik.touched.rePassword && formik.errors.rePassword ? (
                <div
                  className=" p-1 mx-auto fw-lighter "
                  style={{ maxWidth: '30rem' }}
                >
                  {formik.errors.rePassword}
                </div>
              ) : null}
            </div>
          </div>
          {errMsg && (
            <div
              className="p-2 mx-auto  alert alert-danger"
              style={{ maxWidth: '30rem' }}
            >
              {errMsg}
            </div>
          )}

          <div className="col-md-12 mx-auto">
            <div className="mb-4 text-center">
              <button
                className="btn  mx-auto  fs-6"
                style={{
                  backgroundColor: 'rgb(31 21 17)',
                  color: 'white',
                  letterSpacing: '3px',
                  fontWeight: 350,
                  maxWidth: '30rem',
                }}
                type="submit"
              >
                CREATE ACCOUNT
              </button>

              <p className="signup mt-3  fw-light">
                Already have an account? <Link to="/signin">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
