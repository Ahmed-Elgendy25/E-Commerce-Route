import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer
      className=" bg-black position-absolute w-100   "
      style={{
        // backgroundColor: 'rgb(31 21 17)',
        color: 'rgb(250, 247, 241)',
        // minHeight: '30rem',
      }}
    >
      <div className="container-fluid  p-5">
        <div className="row  p-3 g-5">
          <div className="col-md-4  p-5 ">
            <h2
              className=" museomoderno fw-bolder"
              style={{ fontSize: '4rem' }}
            >
              ORI
              <br />
              GIN
            </h2>
            <p className="cabin mt-3 ">FOR EVERYONE BUT NOT ANYONE</p>
          </div>

          <div className="col-md-4  p-5 ">
            <div className=" w-100 d-flex flex-wrap justify-content-between">
              <div className=" p-3">
                <h3 className="cabin fw-normal">PRODUCT</h3>
                <ul className="cabin list-unstyled d-flex flex-wrap flex-column gap-1 mt-4">
                  <li>Jackets</li>
                  <li>Shirts</li>
                  <li>Dresses</li>
                  <li>Outwears</li>
                  <li>Hats</li>
                </ul>
              </div>

              <div className=" p-3">
                <h3 className="cabin fw-normal">BUYING</h3>
                <ul className="cabin list-unstyled d-flex flex-wrap flex-column gap-1 mt-4">
                  <li>Shop</li>
                  <li>Term of Use</li>
                  <li>Privacy</li>
                  <li>How it works</li>
                  <li>Customer Service</li>
                </ul>
              </div>

              <div className=" p-3">
                <h3 className="cabin fw-normal">SOCIAL</h3>
                <ul className="cabin list-unstyled d-flex flex-wrap flex-column gap-1 mt-4">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4  p-5 ">
            <h2 className=" cabin fw-bolder" style={{ fontSize: '2rem' }}>
              JOIN OUR COMMUNITY
            </h2>
            <div
              className="mt-4 cabin  w-75"
              style={{
                position: 'relative',
              }}
            >
              <input
                type="email"
                className="form-control email-address px-4 py-3 rounded-5  border border-2"
                id="exampleFormControlInput1"
                placeholder="EMAIL ADDRESS"
                style={{ color: 'rgb(250, 247, 241)' }}
              />

              <FontAwesomeIcon
                className="position-absolute  rounded-circle p-3"
                style={{
                  backgroundColor: 'rgb(250, 247, 241)',
                  color: 'rgb(31 21 17)',
                  right: '5px', // Adjust this value as needed to position the icon properly
                  top: '4px', // Adjust this value as needed to vertically center the icon
                  cursor: 'pointer',
                }}
                icon={faPaperPlane}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// <div className="container">
// <div className="row">
//   <div className="col-md-4 p-3">
//     <h3 className="cabin fw-normal">PRODUCT</h3>
//     <ul className="cabin list-unstyled d-flex flex-wrap flex-column gap-1 mt-4">
//       <li>Jackets</li>
//       <li>Shirts</li>
//       <li>Dresses</li>
//       <li>Outwears</li>
//       <li>Hats</li>
//     </ul>
//   </div>

//   <div className="col-md-4 p-3">
//     <h3 className="cabin fw-normal">BUYING</h3>
//     <ul className="cabin list-unstyled d-flex flex-wrap flex-column gap-1 mt-4">
//       <li>Shop</li>
//       <li>Term of Use</li>
//       <li>Privacy</li>
//       <li>How it works</li>
//       <li>Customer Service</li>
//     </ul>
//   </div>

//   <div className="col-md-4 p-3">
//     <h3 className="cabin fw-normal">SOCIAL</h3>
//     <ul className="cabin list-unstyled d-flex flex-wrap flex-column gap-1 mt-4">
//       <li>Instagram</li>
//       <li>Facebook</li>
//       <li>Twitter</li>
//     </ul>
//   </div>
// </div>
// </div>
