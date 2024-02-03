import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import SingleProduct from './Pages/SingleProduct/SingleProduct.jsx';
import CartPage from './Pages/Shop/CartPage.jsx';
import BlogPost from './Pages/Blog/BlogPost.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Login from './Components/Login/Login.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element:  <App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/blog",
        element:<Blog />
      },
      {
        path:"/blog/:id",
        element:<BlogPost />
      },
      {
        path:"/shop/:id",
        element:<SingleProduct />
      },
      {
        path:"/shop/cart",
        element:<CartPage />
      },
      {
        path:"/About",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/shop",
        element:<Shop />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
   
    </RouterProvider>
  
  </React.StrictMode>,
)
