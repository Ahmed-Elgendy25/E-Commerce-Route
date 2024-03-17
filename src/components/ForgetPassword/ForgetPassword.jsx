import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import './Signup.css';

function ForgetPassword() {
  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState('');

  function sendDataToApi(values) {
    axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        { email: values.email },
        {}
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate('/resetcode');
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
    });
    return validate;
  }

  const formik = useFormik({
    initialValues: {
      email: '',
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
              Forgot Password
            </h3>
            <p
              style={{ color: '#1C1C1C', maxWidth: '25rem' }}
              className=" fw-light cabin mx-auto  "
            >
              We will send an email with verification code. If you don&apos;t
              see it, please check your spam folder.
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
                NEXT &rarr;
              </button>

              <p className="signup mt-3  fw-light">
                Remember password? <Link to="/signin">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ForgetPassword;
