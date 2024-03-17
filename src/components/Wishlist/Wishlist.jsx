import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Wishlist.css';
import { closeList } from '../../redux/ToggleWishlistSlice';
import { removeAndThenGet } from '../../redux/WishlistSlice';

function Wishlist() {
  let { wishlistLength } = useSelector((state) => state.wishlistState);
  let { toogleList } = useSelector((state) => state.wishlistToggle);
  if (toogleList === false) return;

  return (
    <div
      className="d-flex bg-white flex-column   min-vh-100 end-0 top-0 position-fixed z-3"
      style={{ width: '27rem' }}
    >
      <HeaderWishlist />
      <FreeShipping />

      {wishlistLength > 0 && <BodyCart />}
    </div>
  );
}

export function HeaderWishlist() {
  let dispatch = useDispatch();
  let { wishlistLength } = useSelector((state) => state.wishlistState);
  return (
    <div className=" border-bottom  container ">
      <div className="row p-4 ">
        <div className="col-6 ">
          <h2 className="fs-4 fw-medium cabin ">{wishlistLength} Wishlist</h2>
        </div>
        <div className="col-6  ">
          <span
            className="fs-4 d-block   w-25 ms-auto  cabin fw-normal"
            onClick={() => dispatch(closeList())}
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
  let { wishlist } = useSelector((state) => state.wishlistState);
  let dispatch = useDispatch();
  return (
    <ul className=" list-unstyled   ">
      {wishlist.map((item) => (
        <li key={item._id} className="p-2 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-2  ">
                <img
                  src={item.imageCover}
                  alt={item.title}
                  className=" rounded-3"
                  style={{ width: '4rem' }}
                />
              </div>
              <div className="col-10">
                <div className=" d-flex justify-content-between   h-100 ">
                  <div className="left d-flex w-50 justify-content-evenly p-1  flex-column">
                    <h3 className="cabin fw-medium fs-6">
                      {item.title.slice(0, 19)}
                    </h3>
                  </div>
                  <div className="right d-flex flex-column w-50 align-items-end justify-content-between ">
                    <span className="fw-light p-1 fs-5 cabin">
                      ${item.price}
                    </span>
                    <span
                      className="fs-4 d-block p-2 me-1  cabin fw-normal"
                      style={{ cursor: 'pointer' }}
                      onClick={() =>
                        dispatch(removeAndThenGet({ id: item._id }))
                      }
                    >
                      &#10005;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Wishlist;
