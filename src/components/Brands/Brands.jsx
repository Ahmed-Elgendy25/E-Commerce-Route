/* eslint-disable no-unsafe-optional-chaining */
// eslint-disable-next-line no-unsafe-optional-chaining

import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import Loading from '../Loading/Loading';

function Brands() {
  function getBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }

  let { data, isError, isLoading, isFetching } = useQuery('brands', getBrands);
  // console.log(data?.data.data);
  // const { price, priceAfterDiscount, imageCover, description, _id } =
  //   data?.data.data;
  console.log(data?.data.data);
  const products = data?.data.data;
  if (isLoading) return <Loading />;
  return (
    <div className="container-fluid p-5 ">
      <div className="row gy-5 gx-4   ">
        {products.map((item) => {
          const { image, _id, name } = item;
          return (
            <div key={_id} className="col-md-3   ">
              <Link>
                <img
                  src={image}
                  className="w-100 products rounded-top-5"
                  alt={name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brands;
