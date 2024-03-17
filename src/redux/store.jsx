import { configureStore } from '@reduxjs/toolkit';
import { toogleReducer } from './ToggleCartSlice';
import { cartReducer } from './CartSlice';
import { wishlistReducer } from './WishlistSlice';
import { toogleListReducer } from './ToggleWishlistSlice';

export const store = configureStore({
  reducer: {
    toogleCart: toogleReducer,

    cartState: cartReducer,
    wishlistState: wishlistReducer,
    wishlistToggle: toogleListReducer,
  },
});
