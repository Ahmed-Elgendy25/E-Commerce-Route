import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { PinInput } from 'react-input-pin-code';

import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import './Signup.css';

function ForgetPassword() {
  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState('');
  // const [values, setValues] = useState();
  function validateResetCode(values) {
    let code = values.join('');
    axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        { resetCode: code },
        {}
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate('/resetpassword');
        }
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        console.log(err.response.data.message);
      });
  }

  const formik = useFormik({
    initialValues: {
      resetCode: ['', '', '', '', '', ''],
    },
    onSubmit: (values) => {
      console.log(values.resetCode.join('')); // Access resetCode directly
      validateResetCode(values.resetCode);
    },
  });
  const handlePinChange = (index, value) => {
    const newValues = [...formik.values.resetCode];
    newValues[index] = value;
    formik.setFieldValue('resetCode', newValues);
  };
  return (
    <form className=" my-5 p-5 h-100" onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="row ">
          <div className="title text-center my-3   ">
            <h3
              className="my-3 "
              style={{ letterSpacing: '5px', fontWeight: 350 }}
            >
              Reset Code
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
            <div className="mb-4  d-flex justify-content-center">
              <PinInput
                name="resetCode"
                values={formik.values.resetCode}
                onChange={(newValue, index) => handlePinChange(index, newValue)}
                onBlur={formik.handleBlur}
                hasError={formik.errors.resetCode && formik.touched.resetCode}
                errorText={formik.errors.resetCode}
              />
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
