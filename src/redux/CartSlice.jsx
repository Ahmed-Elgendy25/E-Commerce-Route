/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addCartObj = createAsyncThunk(
  'cart/addCart',
  async function (productId, size, color) {
    const config = {
      headers: {
        token: localStorage.getItem('token'),
      },
    };

    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart `,
      { productId },
      config
    );
    return data;
  }
);

//fullfilled,rejected,pending => 3 cases returned from createAsyncThunk
export const getCartObj = createAsyncThunk('cart/getCart', async function () {
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/cart`,
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
});

// Define the async thunk to update product quantity
export const updateProductQuantityObj = createAsyncThunk(
  'cart/updateCart',
  async function ({ id, newCount }) {
    // Pass an object containing id and newCount
    try {
      console.log(id);
      console.log(newCount);
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
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

export const addAndThenGet = createAsyncThunk(
  'wishlist/updateThenGet',
  async function (id, { dispatch }) {
    await dispatch(addCartObj(id));
    return await dispatch(getCartObj());

    // https://stackoverflow.com/questions/63516716/redux-toolkit-is-it-possible-to-dispatch-other-actions-from-the-same-slice-in-o
  }
);

export const removeSpecificCartItem = createAsyncThunk(
  'cart/removeCart',
  async function ({ id }) {
    try {
      const response = await axios.delete(
        ` https://ecommerce.routemisr.com/api/v1/cart/${id}`,
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

// export const getLoggedUserCart = createAsyncThunk(
//   'cart/getLoggedUserCart',
//   async function () {
//     try {
//       const response = await axios.delete(
//         ` https://ecommerce.routemisr.com/api/v1/cart`,
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

export const updateAndThenGet = createAsyncThunk(
  'cart/updateThenGet',
  async function ({ id, newCount }, { dispatch }) {
    await dispatch(updateProductQuantityObj({ id, newCount }));
    return await dispatch(getCartObj());

    // https://stackoverflow.com/questions/63516716/redux-toolkit-is-it-possible-to-dispatch-other-actions-from-the-same-slice-in-o
  }
);

export const removeAndThenGet = createAsyncThunk(
  'cart/removeThenGet',
  async function ({ id }, { dispatch }) {
    await dispatch(removeSpecificCartItem({ id }));
    return await dispatch(getCartObj());

    // https://stackoverflow.com/questions/63516716/redux-toolkit-is-it-possible-to-dispatch-other-actions-from-the-same-slice-in-o
  }
);
export const initialState = {
  cart: [],
  products: [],
  total: 0,
  cartLength: 0,
  // size: '',
  // color: '',
  cartID: '',
};

export const cartSlice = createSlice({
  name: 'cart',
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

    // builder.addCase(addCartObj.fulfilled, function (state, action) {
    //   console.log('Products have been added successfully 😀');
    // });
    // builder.addCase(addCartObj.rejected, function (state, action) {
    //   console.log('Error, Something went wrong 👎.....');
    // });
    // builder.addCase(addCartObj.pending, function (state, action) {
    //   console.log('Please Wait ⏳');
    // });

    builder.addCase(getCartObj.fulfilled, function (state, action) {
      // console.log(action.payload);

      state.cartLength = action.payload.data?.numOfCartItems;
      state.total = action.payload.data?.data.totalCartPrice;

      state.cart = action.payload.data?.data.products;
      state.products = action.payload.data?.data.products;
      state.cartID = action.payload.data?.data._id;

      // state.count = action.payload.data?.data.products.count;
      // console.log(action.payload.data?.data.products.count);
      // custom-data
      // state.size = action.payload.size;
    });
    builder.addCase(getCartObj.rejected, function (state, action) {
      console.log('Error, Something went wrong 👎.....');
    });
    builder.addCase(getCartObj.pending, function (state, action) {
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

export const cartReducer = cartSlice.reducer;

// export const { decreaseQuantity, increaseQuantity, removeProduct } =
//   cartSlice.actions;

/*
reducers: {
  addToCart: (state, action) => {
    const newItem = action.payload;
    const alreadyItemExistOrNot = state.cart.find(
      (item) => item.id === newItem.id
    );

    if (alreadyItemExistOrNot) {
      state.cart = state.cart.map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      state.cart = [...state.cart, { ...newItem, quantity: 1 }];
    }

    state.total = state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    console.log(state.cart);
  },
  decreaseQuantity: (state, action) => {
    let newItem = action.payload;
    const itemToUpdateIndex = state.cart.findIndex(
      (item) => item.id === newItem.id
    );

    if (itemToUpdateIndex !== -1) {
      if (newItem.quantity > 1) {
        state.cart[itemToUpdateIndex] = {
          ...newItem,
          quantity: newItem.quantity - 1,
        };
      } else {
        state.cart = state.cart.filter((item) => item.id !== newItem.id);
      }
      state.total -= newItem.price;
    }
  },
  increaseQuantity: (state, action) => {
    const newItem = action.payload;
    const itemToUpdateIndex = state.cart.findIndex(
      (item) => item.id === newItem.id
    );
    if (itemToUpdateIndex !== -1) {
      state.cart[itemToUpdateIndex] = {
        ...newItem,
        quantity: newItem.quantity + 1,
      };

      state.total += newItem.price;
    }
  },

  removeProduct: (state, action) => {
    let productToBeRemoved = action.payload;
    const removedItem = state.cart.filter(
      (item) => item.id !== productToBeRemoved.id
    );
    state.cart = removedItem;
    state.total -= productToBeRemoved.price * productToBeRemoved.quantity;
    console.log(state.cart);
  },
},
*/
