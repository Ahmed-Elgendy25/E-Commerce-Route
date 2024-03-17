import React from 'react';
import regularFitJeans from '../../assets/Shop by essentials/Regular fit jeans.jpeg';
import regularFitJeans2 from '../../assets/Shop by essentials/Regular fit jeans-2.png';

import slimFitShirtOlive from '../../assets/Shop by essentials/Slim fit shirt-olive.png';
import slimFitShirtOlive2 from '../../assets/Shop by essentials/Slim fit shirt-olive-2.png';

import overSizedTShirt from '../../assets/Shop by essentials/Oversized T-shirt with convex pattern-2.png';
import overSizedTShirt2 from '../../assets/Shop by essentials/Oversized T-shirt with convex pattern.png';

import hoodedVest from '../../assets/Shop by essentials/Hooded-vest_1.png';
import hoodedVest2 from '../../assets/Shop by essentials/Hooded-vest2.png';

import cottonTShirt from '../../assets/Shop by essentials/Cotton T-shirt-2.png';
import cottonTShirt2 from '../../assets/Shop by essentials/Cotton T-shirt.png';

import cardigan from '../../assets/Shop by essentials/Densely woven cardigan-2.png';
import cardigan2 from '../../assets/Shop by essentials/Densely woven cardigan.png';

function ShoppingEssentials() {
  return (
    <>
      <ShoppingHeading />
      <div className="container-fluid p-5 ">
        <div className="row gy-5  p-5 ">
          <div className="col-md-4 ">
            <img
              src={regularFitJeans2}
              className="w-100 rounded-5"
              alt="Regular fit Jeans"
            />
            <div className=" p-3 rounded-5">
              <h2 className="cord fw-bold fs-2 ">REGULAR FIT JEANS</h2>
              <span className=" cord fw-bold fs-4" style={{ color: '#979797' }}>
                $100
              </span>
            </div>
          </div>

          <div className="col-md-4 ">
            <img
              src={slimFitShirtOlive2}
              className="w-100 rounded-5"
              alt="Slim Fit Shirt Olive"
            />

            <div className=" p-3 rounded-5">
              <h2 className="cord fw-bold fs-2 ">SLIM FIT SHIRT</h2>
              <span className=" cord fw-bold fs-4" style={{ color: '#979797' }}>
                $90
              </span>
            </div>
          </div>

          <div className="col-md-4 ">
            <img
              src={overSizedTShirt2}
              className="w-100 rounded-5 "
              alt="Regular fit Jeans"
            />

            <div className=" p-3 rounded-5">
              <h2 className="cord fw-bold fs-2 ">
                OVERSIZED T-SHIRT WITH CONVEX PATTERN
              </h2>
              <span className=" cord fw-bold fs-4" style={{ color: '#979797' }}>
                $90
              </span>
            </div>
          </div>

          <div className="col-md-4 ">
            <img
              src={hoodedVest2}
              className="w-100 rounded-5"
              alt="Regular fit Jeans"
            />

            <div className=" p-3 rounded-5">
              <h2 className="cord fw-bold fs-2 ">HOODED-VEST</h2>
              <span className=" cord fw-bold fs-4" style={{ color: '#979797' }}>
                $90
              </span>
            </div>
          </div>

          <div className="col-md-4 ">
            <img
              src={cottonTShirt}
              className="w-100 rounded-5"
              alt="Regular fit Jeans"
            />
            <div className=" p-3 rounded-5">
              <h2 className="cord fw-bold fs-2 ">COTTON T-SHIRT</h2>
              <span className=" cord fw-bold fs-4" style={{ color: '#979797' }}>
                $90
              </span>
            </div>
          </div>

          <div className="col-md-4 ">
            <img
              src={cardigan2}
              className="w-100 rounded-5"
              alt="Regular fit Jeans"
            />

            <div className=" p-3 rounded-5">
              <h2 className="cord fw-bold fs-2 ">DENSELY WOVEN CARDIGAN</h2>
              <span className=" cord fw-bold fs-4" style={{ color: '#979797' }}>
                $90
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingEssentials;

function ShoppingHeading() {
  return (
    <div className="container-fluid  p-5">
      <div className="d-flex justify-content-between p-5 flex-wrap align-items-center">
        <div className="title">
          <h2 className="museomoderno fs-2 fw-bold">
            SHOP BY <br />
            ESSENTIALS
          </h2>
        </div>
        <ul
          className=" d-flex  cabin   gap-2 align-items-center flex-wrap list-unstyled"
          style={{ cursor: 'pointer' }}
        >
          <li
            className=" rounded-5   text-center px-4 py-2"
            style={{ border: '1px solid black' }}
          >
            ALL <sub>12</sub>
          </li>

          <li
            className=" rounded-5  px-4 py-2"
            style={{
              border: '1px solid black',
              backgroundColor: 'rgb(31, 21, 17)',
              color: 'rgb(250, 247, 241)',
            }}
          >
            SUMMER COLL <sub>12</sub>
          </li>

          <li
            className=" rounded-5  px-4 py-2"
            style={{ border: '1px solid black' }}
          >
            NEW ARIV <sub>12</sub>
          </li>

          <li
            className=" rounded-5  px-4 py-2"
            style={{ border: '1px solid black' }}
          >
            BEST SELL <sub>12</sub>
          </li>

          <li
            className=" rounded-5  px-4 py-2"
            style={{ border: '1px solid black' }}
          >
            FLASH <sub>12</sub>
          </li>
        </ul>
      </div>
    </div>
  );
}
