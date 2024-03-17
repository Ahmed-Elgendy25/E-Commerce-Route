import { createSlice } from '@reduxjs/toolkit';

const initialState = { toogleCart: false };

export const toggleCart = createSlice({
  name: 'toogleCart',
  initialState,
  reducers: {
    toogle: (state) => {
      state.toogleCart = !state.toogleCart;
    },

    openCart: (state) => {
      state.toogleCart = true;
    },

    closeCart: (state) => {
      state.toogleCart = false;
    },
  },
});

export const toogleReducer = toggleCart.reducer;

export const { toogle, closeCart, openCart } = toggleCart.actions;
