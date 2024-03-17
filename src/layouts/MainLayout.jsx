import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';
import Wishlist from '../components/Wishlist/Wishlist';
import { useDispatch } from 'react-redux';
import { getCartObj } from '../redux/CartSlice';
import { getwishlistObj } from '../redux/WishlistSlice';

function MainLayout() {
  let token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartObj());
    dispatch(getwishlistObj());
  }, [token]);

  return (
    <>
      <Navbar />
      <Cart />
      <Wishlist />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
