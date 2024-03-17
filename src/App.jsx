import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

// Routing

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Signin from './components/Signin/Signin';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import MenProducts from './components/MenProducts/MenProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Categories from './components/Categories/Categories';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ResetCode from './components/Reset Code/ResetCode';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Brands from './components/Brands/Brands';

// import Wishlist from './components/Wishlist/Wishlist';

function App() {
  const routes = createHashRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: 'home',
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: 'menproducts',
          element: (
            <ProtectedRoutes>
              <MenProducts />
            </ProtectedRoutes>
          ),
        },

        {
          path: 'forgetpassword',
          element: (
            <ProtectedRoutes>
              <ForgetPassword />
            </ProtectedRoutes>
          ),
        },

        {
          path: 'resetcode',
          element: (
            <ProtectedRoutes>
              <ResetCode />
            </ProtectedRoutes>
          ),
        },

        {
          path: 'resetpassword',
          element: (
            <ProtectedRoutes>
              <ResetPassword />
            </ProtectedRoutes>
          ),
        },

        {
          path: 'categories',
          element: (
            <ProtectedRoutes>
              <Categories />
            </ProtectedRoutes>
          ),
        },

        {
          path: 'brands',
          element: (
            <ProtectedRoutes>
              <Brands />
            </ProtectedRoutes>
          ),
        },
        {
          path: 'product-details/:id',
          element: (
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          ),
        },

        {
          path: 'signin',
          element: <Signin />,
        },
        {
          path: 'signup',
          element: <Signup />,
        },
      ],
    },
  ]);

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#FAF7F1' }}>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;

// backgroundColor: '#F4F1E0'
