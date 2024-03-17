import React, { useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Signin() {
  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState('');

  function sendDataToApi(values) {
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then(({ data }) => {
        console.log(data);
        if (data.message === 'success') {
          localStorage.setItem('token', data.token);
          navigate('/home');
        }
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        console.log(err.response.data.message);
      });
  }

  function validationSchema() {
    let validate = Yup.object({
      email: Yup.string().email('Invalid email address').required(''),

      password: Yup.string()
        .matches(/^[A-Z][a-zA-Z0-9]{6,}$/)
        .required(),
    });
    return validate;
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
      sendDataToApi(values);
    },
  });

  return (
    <form className=" my-5 p-5 h-100" onSubmit={formik.handleSubmit}>
      <div className="container  h-100  ">
        <div className="row ">
          <div className="title text-center my-3    ">
            <h3
              className="my-3 "
              style={{ letterSpacing: '5px', fontWeight: 350 }}
            >
              Login
            </h3>
            <p style={{ color: '#1C1C1C' }} className=" fw-light">
              Enter your email and password to login:
            </p>
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

              <div
                className=" mt-2  d-flex justify-content-end mx-auto fw-lighter "
                style={{ maxWidth: '30rem' }}
              >
                <Link
                  className="  text-end    cabin"
                  style={{ letterSpacing: '2px', fontSize: '0.85rem' }}
                  to="/forgetpassword"
                >
                  Forget Password?
                </Link>
              </div>
            </div>
          </div>

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
                LOGIN
              </button>

              <p className="signup mt-3  fw-light">
                Don&apos;t have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signin;
