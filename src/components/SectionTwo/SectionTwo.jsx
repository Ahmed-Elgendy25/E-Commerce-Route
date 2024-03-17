/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './SectionTwo.css';
import sweatMan from '../../assets/sweatMan.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendUp,
  faEarthAfrica,
  faPersonCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
function SectionTwo() {
  return (
    <div className="container-fluid p-5">
      <div className="row p-5 gx-5   ">
        <div className="col-md-4  h-100 position-relative   ">
          <div className="notch  bg-black">
            <img
              src={sweatMan}
              alt="A-22-years old youth wearing sweatShirt"
              className="sweatMan w-100"
            />
          </div>

          <svg className="svg  ">
            <clipPath id="clip" clipPathUnits="objectBoundingBox">
              <path d="M0.003,0.039 V0.959 C0.014,1,0.175,1,0.195,0.978 C0.205,0.96,0.212,0.92,0.251,0.92 L0.637,0.917 H0.717 C0.807,0.921,0.78,0.97,0.837,0.993 C0.893,1,0.972,0.997,1,0.966 L0.999,0.055 C0.999,0.027,0.994,0.017,0.955,0.001 H0.484 H0.048 C0.022,0.011,0.009,0.021,0.003,0.039" />
            </clipPath>
          </svg>

          <div
            className="layerz  text-white   "
            style={{ backgroundColor: '#DBDAD8' }}
          >
            <div className="d-flex  w-100 h-100 align-items-center justify-content-between   p-md-3  ">
              <div>
                <h6
                  className="learnMore mx-md-0 ms-3 my-md-0 my-2  cabin text-black  "
                  style={{ fontSize: '1.2rem' }}
                >
                  Learn More
                </h6>
              </div>
              <div>
                <FontAwesomeIcon
                  className="arrowTrendUp mx-md-0 me-3 my-md-0 mb-1 text-black"
                  style={{ fontSize: '1.2rem' }}
                  icon={faArrowTrendUp}
                />
              </div>
            </div>
          </div>

          <svg className="svg ">
            <clipPath id="clip2" clipPathUnits="objectBoundingBox">
              <path d="M0.953,0.013 L0.058,0.04 C0.016,0.23,-0.033,0.895,0.045,1 C0.354,1,0.973,1,0.981,0.987 C1,0.862,0.994,0.354,0.953,0.013" />
            </clipPath>
          </svg>
        </div>

        <div
          className="col-md-8 h-100   rounded-5  "
          style={{
            backgroundColor: 'rgb(31 21 17)',
            color: 'rgb(250, 247, 241)',
          }}
        >
          <div className="d-flex flex-column justify-content-between     p-4 h-100">
            <div className=" text-lg-start mb-5 p-md-5 py-3">
              <h2
                className=" responsive-font-example2 museomoderno fw-bolder me-4 w-75 p-md-5  "
                style={{ fontSize: '4rem' }}
              >
                WE'RE CHANGING THE WAY THINGS GET MADE
              </h2>
            </div>
            <div
              className="parent  d-flex flex-sm-wrap flex-xl-nowrap  border rounded-5 m-5 p-xl-5  h-100  p-4"
              // style={{ minHeight: '30%' }}
            >
              <div className=" child my-auto">
                <div className="  d-flex align-items-center gap-3">
                  <FontAwesomeIcon
                    icon={faPersonCircleCheck}
                    className="fs-1 rounded-5  p-1"
                    style={{
                      backgroundColor: 'rgb(250, 247, 241)',
                      color: 'rgb(31 21 17)',
                    }}
                  />
                  <h3 className="museomoderno d-inline fw-bolder ">
                    SUSTAINABILITY
                  </h3>
                </div>
                <p
                  className="museomoderno mt-2 fw-semibold"
                  style={{ maxWidth: '75%' }}
                >
                  We're challenging conventional retail, putting an end to dead
                  stock, unconventional waste and more fantastic
                </p>
              </div>

              <div className=" child my-auto">
                <div className="  d-flex align-items-center gap-3">
                  <FontAwesomeIcon
                    icon={faEarthAfrica}
                    className="fs-1 rounded-5  p-1"
                    style={{
                      backgroundColor: 'rgb(250, 247, 241)',
                      color: 'rgb(31 21 17)',
                    }}
                  />
                  <h3 className="museomoderno d-inline fw-bolder">MISSION</h3>
                </div>
                <p
                  className="museomoderno mt-2 fw-semibold"
                  style={{ maxWidth: '75%' }}
                >
                  We're on a mission to empower create independence in a
                  commercial world and incredible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;

{
  /* <div
  className="col-md-8 px-3 rounded-5  "
  style={{
    backgroundColor: 'rgb(31 21 17)',
    color: 'rgb(250, 247, 241)',
    maxHeight: '50rem',
  }}
>
  <div className="container  bg-danger h-100 ">
    <div className="row">
      <div className="col-md-12 bg-warning text-lg-start mb-5 p-md-5 py-3">
        <h2
          className=" responsive-font-example2 museomoderno fw-bolder me-4 w-75 p-md-5  "
          style={{ fontSize: '4rem' }}
        >
          WE'RE CHANGING THE WAY THINGS GET MADE
        </h2>
      </div>a
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-info d-flex  align-items-center gap-3">
              <FontAwesomeIcon
                icon={faPersonCircleCheck}
                className="fs-1 rounded-5  p-1"
                style={{
                  backgroundColor: 'rgb(250, 247, 241)',
                  color: 'rgb(31 21 17)',
                }}
              />
              <h3 className="museomoderno d-inline fw-bolder">
                SUSTAINABILITY
              </h3>
            </div>

            <p
              className="museomoderno mt-2 fw-semibold"
              style={{ maxWidth: '64%' }}
            >
              We're challenging conventional retail, putting an end to dead
              stock, unconventional waste and more fantastic
            </p>
          </div>

          <div className="col-md-6">
            <div className="bg-info d-flex  align-items-center gap-3">
              <FontAwesomeIcon
                icon={faPersonCircleCheck}
                className="fs-1 rounded-5  p-1"
                style={{
                  backgroundColor: 'rgb(250, 247, 241)',
                  color: 'rgb(31 21 17)',
                }}
              />
              <h3 className="museomoderno d-inline fw-bolder">
                SUSTAINABILITY
              </h3>
            </div>

            <p
              className="museomoderno mt-2 fw-semibold"
              style={{ maxWidth: '64%' }}
            >
              We're challenging conventional retail, putting an end to dead
              stock, unconventional waste and more fantastic
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> */
}
