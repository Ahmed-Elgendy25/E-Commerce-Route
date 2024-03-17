import { createSlice } from '@reduxjs/toolkit';

export const initialState = { toogleList: false };

export const wishlistToogle = createSlice({
  name: 'toogleList',
  initialState,
  reducers: {
    toogleOpenCloseList: (state) => {
      state.toogleList = !state.toogleList;
    },

    openList: (state) => {
      state.toogleList = true;
    },

    closeList: (state) => {
      state.toogleList = false;
    },
  },
});

export const toogleListReducer = wishlistToogle.reducer;

export const { toogleOpenCloseList, closeList, openList } =
  wishlistToogle.actions;
