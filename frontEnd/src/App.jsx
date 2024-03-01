//import logo from './logo.svg';
import './App.css';
import Home from './Pages/home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './Pages/menu/Menu';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';
import Login from './Auth/login/Login';
import Signup from './Auth/signup/Signup';
import Traiteur from './Pages/traiteur/Traiteur';
import NoMatch from './components/NoMatch';
import CategoryPage from './Pages/categoriesPage/CategoryPage';
import FoodDetails from './Pages/foodDetails/FoodDetails';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Order from './components/Order/Order';
import OrderDetail from './components/Order/OrderDetail';
import AddressCard from './components/AddressCard/AddressCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import imageSlide from './data';

function App() {
  return (
    <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Home slides={imageSlide}/> }></Route>
                <Route path='/menu' element={<Menu/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
                <Route path='/Traiteur' element={<Traiteur/>}></Route>
                <Route path='/Cart' element={<Cart/>}></Route>
                <Route path='/Checkout' element={<Checkout/>}></Route>
                <Route path='/Order' element={<Order/>}></Route>
                <Route path='/OrderDetails' element={<OrderDetail/>}></Route>
                <Route path='/menu/:slug/*' element={<CategoryPage/>}></Route>
                <Route path='/menu/:slug/:foodName' element={<FoodDetails/>}></Route>
                <Route path='/Address' element={<AddressCard/>}></Route>
                <Route path='*' element={<NoMatch/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
  );
}

export default App;
