

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer/Footer'
import men_banner from './assets/banner_kids.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_mens.png';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar> 
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productId' element={<Product/>}>
      </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  
    </>
  )
}

export default App
