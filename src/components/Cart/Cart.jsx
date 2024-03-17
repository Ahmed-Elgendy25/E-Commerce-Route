/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../../redux/ToggleCartSlice';
import './Cart.css';
import {
  getCartObj,
  removeAndThenGet,
  updateAndThenGet,
} from '../../redux/CartSlice';
import axios from 'axios';

function Cart() {
  let { toogleCart } = useSelector((state) => state.toogleCart);
  let { cart, cartLength } = useSelector((state) => state.cartState);

  if (toogleCart === false) return;
  return (
    <div
      className="d-flex bg-white flex-column   min-vh-100 end-0 top-0 position-fixed z-3"
      style={{ width: '27rem' }}
    >
      <HeaderCart />
      <FreeShipping />

      {cartLength > 0 && <BodyCart />}
      <div className="mt-auto">
        <FooterCart />
      </div>
    </div>
  );
}

export function HeaderCart({ numOfCartItems }) {
  let dispatch = useDispatch();
  let { cartLength } = useSelector((state) => state.cartState);

  return (
    <div className=" border-bottom  container ">
      <div className="row p-4 ">
        <div className="col-6 ">
          <h2 className="fs-4 fw-medium cabin ">{cartLength} Items in cart</h2>
        </div>
        <div className="col-6  ">
          <span
            className="fs-4 d-block   w-25 ms-auto  cabin fw-normal"
            onClick={() => dispatch(closeCart())}
            style={{ cursor: 'pointer' }}
          >
            &#10005;
          </span>
        </div>
      </div>
    </div>
  );
}

export function FreeShipping() {
  return (
    <div className="p-2 border-bottom">
      <p className="text-center my-3 cabin fw-bold">
        Spend $50 and get free shipping
      </p>
    </div>
  );
}

export function BodyCart() {
  let { cart, products, size, quantity } = useSelector(
    (state) => state.cartState
  );
  let dispatch = useDispatch();
  let token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(getCartObj());
  }, [dispatch]);

  return (
    <ul className=" list-unstyled   ">
      {cart.map((item) => {
        let { count } = item;
        let { title, imageCover, _id } = item.product;
        if (count === 0) return;
        return (
          <li key={_id} className="p-2 border-bottom">
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <img
                    src={imageCover}
                    alt={title}
                    className="rounded-3"
                    style={{ width: '4rem' }}
                  />
                </div>

                <div className="col-10">
                  <div className="d-flex justify-content-between h-100">
                    <div className="left d-flex w-50 justify-content-evenly p-1  flex-column">
                      <h3 className="cabin fw-medium fs-6">
                        {title.slice(0, 19)}
                      </h3>
                      {/* <p className="cabin fw-light fs-6">
                        Size: {size}
                        <span style={{ fontSize: '0.9rem' }}>{item.size}</span>
                      </p> */}

                      <div
                        style={{ backgroundColor: 'rgb(242, 242, 242)' }}
                        className="d-flex w-50 gap-1 h-25 justify-content-evenly align-items-center rounded-5"
                      >
                        <button
                          className="btn cabin border-0 increase fw-semibold fs-6 btn-sm h-25 d-flex align-items-center justify-content-center w-25 rounded-5"
                          onClick={() =>
                            dispatch(
                              updateAndThenGet({
                                id: _id,
                                newCount: count - 1,
                              })
                            )
                          }
                        >
                          -
                        </button>
                        <span className="cabin fw-lighter fs-6">{count}</span>
                        <button
                          className="btn cabin border-0 decrease fw-semibold fs-6 btn-sm h-25 d-flex align-items-center justify-content-center w-25 rounded-5"
                          onClick={() =>
                            dispatch(
                              updateAndThenGet({
                                id: _id,
                                newCount: count + 1,
                              })
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="right d-flex flex-column w-50 align-items-end justify-content-between">
                      <span className="fw-light p-1 fs-5 cabin">
                        ${item.price}
                      </span>
                      <span
                        className="fs-4 d-block p-2 me-1 cabin fw-normal"
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch(removeAndThenGet({ id: _id }))}
                      >
                        &#10005;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function FooterCart() {
  const { total, cartID } = useSelector((state) => state.cartState);

  console.log(total);
  let token = localStorage.getItem('token');
  async function checkoutSession() {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}`,
        {
          url: 'http://localhost:5173',
        },
        {
          headers: {
            token,
          },
        }
      );
      return data.session;
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCheckout() {
    let sessionData = await checkoutSession();
    window.location.href = sessionData.url;
  }

  return (
    <footer className=" pb-5 border-top container h-100 ">
      <div className="row p-1 g-0">
        <div className="col-6 ">
          <div className="cabin p-2 h-100  d-flex flex-column justify-content-between ">
            <span className="fw-semibold fs-5 ">Subtotal</span>
            <span className="fw-semibold">Taxes & shipping</span>
          </div>
        </div>

        <div className="col-6">
          <div className="cabin h-100 p-2  d-flex flex-column align-items-end justify-content-between ">
            <span className="fw-semibold fs-5 ">{total}</span>
            <span className="fw-semibold fs-">Calculated at checkout</span>
          </div>
        </div>

        <div className="col-12">
          <button
            className="btn addToCart mt-4 rounded-0 border-black mx-auto fs-6 fw-medium cabin"
            onClick={handleCheckout}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Cart;
