import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, toogle } from '../../redux/ToggleCartSlice';
import { toogleOpenCloseList } from '../../redux/ToggleWishlistSlice';
function Navbar() {
  let dispatch = useDispatch();
  let { cartLength } = useSelector((state) => state.cartState);
  return (
    <div className="container-fluid pt-2 ">
      <nav
        className="navbar navbar-expand-lg "
        style={{ border: '1px solid black' }}
      >
        <div className="container-fluid p-2 ">
          <Link className="navbar-brand ms-3 fw-bold " to="/">
            <h1 className="fs-4 cabin mb-2 mb-lg-0">ORIGIN</h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto   d-flex justify-content-end gap-3 px-3  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link  cabin active"
                  aria-current="page"
                  to="/menproducts"
                >
                  MENSWEAR
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link cabin  active"
                  aria-current="page"
                  to="/categories"
                >
                  CATEGORIES
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link cabin  active"
                  aria-current="page"
                  to="/brands"
                >
                  BRANDS
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control cabin me-2 rounded-5"
                style={{ backgroundColor: 'rgb(217, 217, 217)' }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav mx-2 d-flex align-items-center justify-content-end gap-3 px-3 mb-2 mb-lg-0">
              <li
                className="nav-item d-flex flex-wrap gap-1 cart-parent p-1 cabin  align-items-center "
                style={{ fontSize: '1.1rem', cursor: 'pointer' }}
                onClick={() => dispatch(toogle())}
              >
                <span className="fw-medium  cart ">Cart</span>
                <div
                  className=" rounded-circle border border-black border-1 fw-bold  "
                  style={{
                    minWidth: '25px',
                    textAlign: 'center',
                    padding: '0 0.5rem',
                  }}
                >
                  {cartLength}
                </div>
              </li>

              <li
                className="nav-item d-flex flex-wrap gap-1 cart-parent p-1 cabin  align-items-center "
                style={{ fontSize: '1.1rem', cursor: 'pointer' }}
                onClick={() => dispatch(toogleOpenCloseList())}
              >
                <FontAwesomeIcon icon={faHeart} className="fs-5" />
              </li>
              <li className="nav-item">
                <Link to="/signin">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    style={{ cursor: 'pointer' }}
                    className="fs-5"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
