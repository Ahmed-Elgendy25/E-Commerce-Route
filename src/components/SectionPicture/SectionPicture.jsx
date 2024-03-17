import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './SectionPicture.css';
function SectionPicture() {
  return (
    <div className="container-fluid mt-5  p-5 overflow-hidden">
      <div className="row  gx-5   ">
        <div className="col-12  position-relative   ">
          <div className="notch2   bg-black w-75 mx-auto h-25   p-5 bg-black"></div>

          <div
            className="layerz2  text-white   "
            style={{ backgroundColor: '#DBDAD8' }}
          >
            <div className="d-flex  w-100 h-100 align-items-center justify-content-center gap-3   p-md-3  ">
              <div>
                <FontAwesomeIcon
                  className="arrowTrendUp mx-md-0 me-3 my-md-0 mb-1 text-black"
                  style={{ fontSize: '1.2rem' }}
                  icon={faPlay}
                />
              </div>
              <div>
                <h6
                  className="learnMore mx-md-0 ms-3 my-md-0 my-2  cabin text-black  "
                  style={{ fontSize: '1.2rem' }}
                >
                  Watch to learn more
                </h6>
              </div>
            </div>
          </div>
          <svg className="svg ">
            <clipPath id="clip2" clipPathUnits="objectBoundingBox">
              <path d="M0.953,0.013 L0.058,0.04 C0.016,0.23,-0.033,0.895,0.045,1 C0.354,1,0.973,1,0.981,0.987 C1,0.862,0.994,0.354,0.953,0.013" />
            </clipPath>
          </svg>

          <svg className="svg">
            <clipPath id="clip3" clipPathUnits="objectBoundingBox">
              <path d="M0.001,0.04 V0.967 C0.003,0.982,0.007,0.988,0.014,1 C0.141,1,0.27,1,0.397,0.999 C0.409,0.974,0.404,0.931,0.418,0.911 C0.472,0.911,0.582,0.911,0.585,0.913 C0.599,0.937,0.594,0.985,0.612,1 H0.982 C0.99,0.997,0.998,0.986,1,0.969 V0.036 C0.997,0.021,0.993,0.011,0.986,0.002 H0.016 C0.008,0.012,0.004,0.023,0.001,0.04" />
            </clipPath>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SectionPicture;
