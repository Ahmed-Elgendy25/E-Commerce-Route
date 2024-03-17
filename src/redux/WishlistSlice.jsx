/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addwishlistObj = createAsyncThunk(
  'wishlist/addwishlist',
  async function (productId) {
    const config = {
      headers: {
        token: localStorage.getItem('token'),
      },
    };

    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        config
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

//fullfilled,rejected,pending => 3 cases returned from createAsyncThunk
export const getwishlistObj = createAsyncThunk(
  'wishlist/getwishlist',
  async function () {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );
      const responseData = response.data;
      const contentTypeHeader = response.headers['content-type']; // Extract content-type header

      return { data: responseData, contentType: contentTypeHeader }; // Include custom data in payload
      // return { data: responseData, contentType: contentTypeHeader, size };
    } catch (error) {
      throw error;
    }
  }
);

// Define the async thunk to update product quantity
export const updateProductQuantityObj = createAsyncThunk(
  'wishlist/updatewishlist',
  async function ({ id, newCount }) {
    // Pass an object containing id and newCount
    try {
      console.log(id);
      console.log(newCount);
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        { count: newCount },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );

      const responseData = response.data;
      const contentTypeHeader = response.headers['content-type'];
      console.log(responseData);

      return { data: responseData, contentType: contentTypeHeader };
    } catch (error) {
      throw error;
    }
  }
);

export const removeSpecificwishlistItem = createAsyncThunk(
  'wishlist/removewishlist',
  async function ({ id }) {
    try {
      const response = await axios.delete(
        ` https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );

      return response.data; // Only return serializable data
    } catch (err) {
      throw err; // Rethrow the error to be handled separately
    }
  }
);

// export const getLoggedUserwishlist = createAsyncThunk(
//   'wishlist/getLoggedUserwishlist',
//   async function () {
//     try {
//       const response = await axios.delete(
//         ` https://ecommerce.routemisr.com/api/v1/wishlist`,
//         {},
//         {
//           headers: {
//             token: localStorage.getItem('token'),
//           },
//         }
//       );

//       return response.data; // Only return serializable data
//     } catch (err) {
//       throw err; // Rethrow the error to be handled separately
//     }
//   }
// );

export const addAndThenGet = createAsyncThunk(
  'wishlist/updateThenGet',
  async function (id, { dispatch }) {
    await dispatch(addwishlistObj(id));
    return await dispatch(getwishlistObj());

    // https://stackoverflow.com/questions/63516716/redux-toolkit-is-it-possible-to-dispatch-other-actions-from-the-same-slice-in-o
  }
);

export const updateAndThenGet = createAsyncThunk(
  'wishlist/updateThenGet',
  async function ({ id, newCount }, { dispatch }) {
    await dispatch(updateProductQuantityObj({ id, newCount }));
    return await dispatch(getwishlistObj());

    // https://stackoverflow.com/questions/63516716/redux-toolkit-is-it-possible-to-dispatch-other-actions-from-the-same-slice-in-o
  }
);

export const removeAndThenGet = createAsyncThunk(
  'wishlist/removeThenGet',
  async function ({ id }, { dispatch }) {
    await dispatch(removeSpecificwishlistItem({ id }));
    return await dispatch(getwishlistObj());

    // https://stackoverflow.com/questions/63516716/redux-toolkit-is-it-possible-to-dispatch-other-actions-from-the-same-slice-in-o
  }
);
export const initialState = {
  wishlist: [],
  wishlistLength: 0,
  existedOrNot: false,
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  // reducers: {
  //   increaseQuantity: (state, action) => {
  //     const { productId } = action.payload;
  //     const findProduct = state.products.find(
  //       (item) => item.product._id === productId
  //     );

  //     if (findProduct) {
  //       const id = findProduct.product._id;
  //       findProduct.count++; // Increase the count in the state
  //       state.id = id;
  //       state.count = findProduct.count;
  //     }
  //   },
  // },
  extraReducers: function (builder) {
    //build all states for your response

    // builder.addCase(addwishlistObj.fulfilled, function (state, action) {
    //   console.log('Products have been added successfully 😀');
    // });
    // builder.addCase(addwishlistObj.rejected, function (state, action) {
    //   console.log('Error, Something went wrong 👎.....');
    // });
    // builder.addCase(addwishlistObj.pending, function (state, action) {
    //   console.log('Please Wait ⏳');
    // });

    builder.addCase(getwishlistObj.fulfilled, function (state, action) {
      console.log(action.payload.data?.data);
      state.existedOrNot = true;
      state.wishlist = action.payload.data?.data;
      state.wishlistLength = action.payload.data?.data.length;
    });
    builder.addCase(getwishlistObj.rejected, function (state, action) {
      console.log('Error, Something went wrong 👎.....');
    });
    builder.addCase(getwishlistObj.pending, function (state, action) {
      console.log('Please Wait ⏳');
    });

    builder.addCase(updateProductQuantityObj.fulfilled, (state, action) => {
      // Handle the fulfilled action if needed
      console.log(action.payload);
    });

    builder.addCase(updateProductQuantityObj.pending, function (state, action) {
      console.log('Please Wait ⏳');
    });
    builder.addCase(updateProductQuantityObj.rejected, (state, action) => {
      // Handle the rejected action if needed
      console.log(action.payload);
    });
  },
});

export const wishlistReducer = wishlistSlice.reducer;
