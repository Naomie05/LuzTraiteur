//import logo from './logo.svg';
import './App.css';
import Home from './Pages/home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './Pages/menu/Menu';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';
import Login from './Pages/Login/Login';
import Traiteur from './Pages/traiteur/Traiteur';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import imageSlide from './data';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home slides={imageSlide}/> }></Route>
        <Route path='menu' element={<Menu/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Traiteur' element={<Traiteur/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
