/* eslint-disable react/no-unescaped-entities */
import {
  faPlus,
  faMinus,
  faTruckFast,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/CartSlice';
import { openCart } from '../../redux/ToggleCartSlice';
import { addAndThenGet, addCartObj, getCartObj } from '../../redux/CartSlice';

const reducer = (state, action) => {
  switch (action.type) {
    case 'size':
      return { ...state, size: action.payload };
    case 'color':
      return { ...state, color: action.payload };
    case 'accordionBtn1':
      return { ...state, accordionBtn1: action.payload };

    case 'accordionBtn2':
      return { ...state, accordionBtn2: action.payload };

    case 'accordionBtn3':
      return { ...state, accordionBtn3: action.payload };
    default:
      return state;
  }
};

function ProductDetails() {
  const [isStoppedScrolling, setIsStoppedScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop >= 820) {
        setIsStoppedScrolling(true);
      } else {
        setIsStoppedScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let dispatchRedux = useDispatch();

  // handlers for cartSlice

  function handleAddToCart(id) {
    // dispatchRedux(addToCart(product));
    // dispatchRedux(addCartObj(id));
    dispatchRedux(addAndThenGet(id));
    dispatchRedux(openCart());
  }

  let { id } = useParams();
  let [product, setProduct] = useState([]);
  // console.log(id);
  useEffect(() => {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => setProduct(data?.data))
      .catch((err) => console.log(err));
  }, []);

  const [
    { size, color, accordionBtn1, accordionBtn2, accordionBtn3 },
    dispatch,
  ] = useReducer(reducer, {
    size: 'S/M',
    color: 'Indigo',
    accordionBtn1: false,
    accordionBtn2: false,
    accordionBtn3: false,
  });

  // console.log('size: ', size);
  // console.log('color: ', color);
  // console.log('Accordionbtn: ', accordionBtn1);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-md-8 bg-white">
            <div className="d-flex flex-wrap justify-content-center">
              <img
                src={product.imageCover}
                className="mw-100"
                alt={product.title}
              />
            </div>
          </div>
          <div className="col-md-4 bg-white    ">
            <div
              className={`p-4 mt-5  position ${
                isStoppedScrolling ? 'position-static' : 'position-fixed'
              }`}
              style={{ bottom: 0, top: 0, zIndex: 0 }}
            >
              {/* productTitle&Price */}
              <div className="mt-5 pt-3">
                <h3 className=" fs-4 cabin fw-semibold">{product.title}</h3>
                <p className=" fs-4  fw-semibold cabin">${product.price}</p>
              </div>

              {/* productDescription */}
              <div className="fw-light cabin  my-4    ">
                <p style={{ maxWidth: '600px' }}>
                  Crafted with meticulous attention to detail, this piece is a
                  testament to timeless design and unparalleled comfort.
                </p>
                <p style={{ maxWidth: '600px' }}>
                  Its versatile style seamlessly transitions from day to night,
                  making it a staple for any wardrobe, whether you're navigating
                  the bustling city streets or enjoying a serene coastal
                  retreat.
                </p>
              </div>
              {/* Size */}
              <ul className="mx-2  list-unstyled">
                <h3 className="fs-5 fw-medium">Size</h3>
                <div className="d-flex gap-3">
                  <li
                    className="px-3 py-2 fw-semibold"
                    style={{
                      border:
                        size === 'S/M'
                          ? '1px solid black'
                          : '1px solid rgba(33, 26, 26, 0.1)',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch({ type: 'size', payload: 'S/M' })}
                  >
                    S/M
                  </li>
                  <li
                    className="px-3 py-2 fw-semibold"
                    style={{
                      border:
                        size === 'L/XL'
                          ? '1px solid black'
                          : '1px solid rgba(33, 26, 26, 0.1)',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch({ type: 'size', payload: 'L/XL' })}
                  >
                    L/XL
                  </li>
                </div>
              </ul>
              {/* Color */}
              <ul className="mx-2  list-unstyled">
                <h3 className="fs-5 fw-medium">Color</h3>
                <div className="d-flex gap-3">
                  <li
                    className="px-3 py-2 fw-semibold"
                    style={{
                      border:
                        color === 'Indigo'
                          ? '1px solid black'
                          : '1px solid rgba(33, 26, 26, 0.1)',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      dispatch({ type: 'color', payload: 'Indigo' })
                    }
                  >
                    Indigo
                  </li>
                  <li
                    className="px-3 py-2 fw-semibold"
                    style={{
                      border:
                        color === 'Olive'
                          ? '1px solid black'
                          : '1px solid rgba(33, 26, 26, 0.1)',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      dispatch({ type: 'color', payload: 'Olive' })
                    }
                  >
                    Olive
                  </li>
                </div>
              </ul>
              {/* Accordion */}
              <div className="accordion mt-4" id="accordionExample">
                <div
                  className="accordion-item p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    dispatch({
                      type: 'accordionBtn1',
                      payload: !accordionBtn1,
                    })
                  }
                >
                  <h2 className="accordion-header  fs-6 fw-semibold  d-flex align-items-center gap-2">
                    <FontAwesomeIcon
                      className="fs-6 "
                      icon={accordionBtn1 === false ? faPlus : faMinus}
                      type="button"
                      style={{
                        transition: 'transform 0.3s ease-in-out', // Apply transition to transform property
                        transform:
                          accordionBtn1 === false
                            ? 'rotate(0deg)'
                            : 'rotate(180deg)', // Rotate the icon
                      }}
                    />
                    Details
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse p-0"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body fw-semibold cabin p-0  ">
                      <p>
                        Rooted in the crossroads of street elegance and
                        contemporary minimalism, ORIGIN celebrates the art of
                        understated style.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    dispatch({
                      type: 'accordionBtn2',
                      payload: !accordionBtn2,
                    })
                  }
                >
                  <h2 className="accordion-header  fs-6 fw-semibold  d-flex align-items-center ">
                    <FontAwesomeIcon
                      className="fs-6 me-2"
                      icon={accordionBtn2 === false ? faPlus : faMinus}
                      type="button"
                      style={{
                        transition: 'transform 0.3s ease-in-out', // Apply transition to transform property
                        transform:
                          accordionBtn2 === false
                            ? 'rotate(0deg)'
                            : 'rotate(180deg)', // Rotate the icon
                      }}
                    />
                    MATERIAL<span style={{ marginInline: '3px' }}>&</span>
                    CARE
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse p-0"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body fw-semibold cabin mt-3 p-0">
                      <p>
                        100% cotton. Machine wash cold, hang dry. Made in
                        Sweden.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item p-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    dispatch({
                      type: 'accordionBtn3',
                      payload: !accordionBtn3,
                    })
                  }
                >
                  <h2 className="accordion-header  fs-6 fw-semibold  d-flex align-items-center ">
                    <FontAwesomeIcon
                      className="fs-6 me-2 "
                      icon={accordionBtn3 === false ? faPlus : faMinus}
                      type="button"
                      style={{
                        transition: 'transform 0.3s ease-in-out', // Apply transition to transform property
                        transform:
                          accordionBtn3 === false
                            ? 'rotate(0deg)'
                            : 'rotate(180deg)', // Rotate the icon
                      }}
                    />
                    FIT<span style={{ marginInline: '3px' }}>&</span>
                    SIZE
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse p-0"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body p-0">
                      <p>
                        Fits true to size. Model is 6'1 wearing size Medium.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* addToCartButton */}
              <button
                className="btn addToCart mt-4 rounded-0 border-black mx-auto fs-6 fw-medium cabin"
                onClick={() => handleAddToCart(id)}
              >
                ADD TO CART
              </button>

              {/* FREE SHIPPING & FREE RETURNS */}
              <div className=" d-flex mt-3 flex-wrap justify-content-center align-items-center  gap-3">
                <div>
                  <FontAwesomeIcon className="mx-2" icon={faTruckFast} />
                  <span className="fw-semibold">FREE SHIPPING OVER $50</span>
                </div>

                <div>
                  <FontAwesomeIcon className="mx-2" icon={faRotateRight} />
                  <span className="fw-semibold">FREE RETURNS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
