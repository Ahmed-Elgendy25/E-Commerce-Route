/* eslint-disable no-undef */
/* eslint-disable no-unsafe-optional-chaining */
// eslint-disable-next-line no-unsafe-optional-chaining

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import './MenProducts.css';
import Loading from '../Loading/Loading';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAndThenGet,
  addwishlistObj,
  getwishlistObj,
} from '../../redux/WishlistSlice';
function MenProducts() {
  let dispatch = useDispatch();

  function getMenProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`, {
      params: {
        category: '6439d5b90049ad0b52b90048',
      },
    });
  }
  let { wishlist } = useSelector((state) => state.wishlistState);
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item._id === productId);
  };

  const getHeartIconClass = (productId) => {
    return isProductInWishlist(productId);
  };
  let { data, isError, isLoading, isFetching } = useQuery(
    'men-products',
    getMenProducts
  );

  // console.log(data?.data.data);
  // const { price, priceAfterDiscount, imageCover, description, _id } =
  //   data?.data.data;
  const products = data?.data.data;

  if (isLoading) return <Loading />;
  return (
    <div className="container-fluid p-5 ">
      <div className="row gy-5 gx-4   ">
        {products.map((item) => {
          const {
            price,
            priceAfterDiscount,
            imageCover,
            description,
            _id,
            title,
          } = item;
          return (
            <div key={_id} className="col-md-3   ">
              <Link to={'/product-details/' + _id}>
                <img
                  src={imageCover}
                  className="w-100 products rounded-top-5"
                  alt={description}
                />
                <div className="layer d-flex  align-items-end">
                  <button className="btn addToCart mt-4 rounded-0  mx-auto fs-6 fw-medium cabin">
                    ADD TO CART
                  </button>
                </div>
              </Link>
              <div className=" my-3 rounded-5">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="cord fw-bold fs-5 cabin">{title}</h2>
                  <FontAwesomeIcon
                    icon={isProductInWishlist(_id) ? solidHeart : regularHeart}
                    className="fs-3 mb-2"
                    style={{
                      cursor: 'pointer',
                      color: isProductInWishlist(_id) ? 'red' : 'inherit',
                    }}
                    onClick={() => dispatch(addAndThenGet(_id))}
                  />
                </div>

                <span
                  className=" cord fw-bold fs-5 cabin"
                  style={{ color: '#979797' }}
                >
                  $ {price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenProducts;
