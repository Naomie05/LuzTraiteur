//import React from 'react'
import Home from '../Pages/home/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menu from '../Pages/menu/Menu';
import About from '../Pages/about/About';
import Contact from '../Pages/contact/Contact';
import Login from '../Pages/Login/Login';
import Traiteur from '../Pages/traiteur/Traiteur';
import NoMatch from '../components/NoMatch';
import CategoryPage from '../Pages/categoriesPage/CategoryPage';
import FoodDetails from '../Pages/foodDetails/FoodDetails';
import Cart from '../components/cart/Cart';
import Checkout from '../components/checkout/Checkout';
import Order from '../components/Order/Order';
import OrderDetail from '../components/Order/OrderDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import imageSlide from '../data';

const CustomerRoutes = () => {
  return (
    <div>
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Home slides={imageSlide}/> }></Route>
                <Route path='/menu' element={<Menu/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Traiteur' element={<Traiteur/>}></Route>
                <Route path='/Cart' element={<Cart/>}></Route>
                <Route path='/Checkout' element={<Checkout/>}></Route>
                <Route path='/Order' element={<Order/>}></Route>
                <Route path='/OrderDetails' element={<OrderDetail/>}></Route>
                <Route path='/menu/:slug/*' element={<CategoryPage/>}></Route>
                <Route path='/menu/:slug/:foodName' element={<FoodDetails/>}></Route>
                <Route path='*' element={<NoMatch/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default CustomerRoutes
