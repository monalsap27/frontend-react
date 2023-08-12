import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import Bayar from './pages/Bayar'
// import ProductCatalog from './pages/ProductCatalog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <p className='mt-24 text-center'>404 Not Found</p>
  },
  {
    path: '/detail',
    element: <ProductDetails/>
  },
  {
    path: '/checkout',
    element: <Checkout/>
  },
  {
    path: '/bayar',
    element: <Bayar/>
  }
  // {
  //   path: '/catalog',
  //   element: <ProductCatalog/>
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
