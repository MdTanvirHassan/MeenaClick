import React, { useState } from 'react'
import Alert from './components/Alert/Alert';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Feature from './components/Feature/Feature';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import { Fragment } from 'react';
import ScrollButton from './components/ScrollButton';
// import { Content, Heading } from './components/Styles';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';

function App() {
  const[mode,setMode]= useState('light');
  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#ffff';
      showAlert("Light mode is Enable.","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#041628';
      showAlert("Dark mode is Enable.","success");
    }
  }
  const [alert,setAlert]= useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
   const [cart, setCart] = useState(0);
    const handleAddProduct=()=> {
        const newCart = cart+1;
        setCart(newCart);
     }
  return (
    <>
    
      <Fragment>      
      <Header mode={mode} toggleMode={toggleMode} handleAddProduct={handleAddProduct}></Header>
      <Alert alert={alert}></Alert>
      <Routes>
        <Route path='/Home' element={<Header />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
      <Carousel mode={mode}></Carousel>
      <Feature mode={mode}></Feature>
      <Product mode={mode} handleAddProduct={handleAddProduct} title='Product Title Quantity' price='price'></Product>
      <Footer mode={mode}></Footer>
      <ScrollButton />
    </Fragment>
    <div className="">
    
      
    </div>
    </>
  );
}

export default App;
