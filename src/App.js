import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

import { Routes,  Route,} from "react-router-dom";
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';


function App() {
  const [loading,setLoading]= useState(true);
  const preloader= document.getElementById('preloader-active');
  if (preloader) {
    setTimeout(() => {
      preloader.style.display="none";
      setLoading(false);
    }, 200);
  }
  
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
   const handleCart=(item,action)=>{
    setCart((prevCart)=>{
        return{
            ...prevCart,
            [item]: action==="up"?cart[item]+1:cart[item]-1
        }
    })
}
     const notify = () => {
      toast.success(' Product quantity updated!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     };

  return (
    !loading&&<>
    
      <Fragment>      
      <Header mode={mode} toggleMode={toggleMode} handleCart={handleCart}></Header>
      <Alert alert={alert}></Alert>
      
      <Routes>
        <Route path='/Home' element={<Header />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
      <Carousel mode={mode}></Carousel>
      <Feature mode={mode}></Feature>
      <Product mode={mode} notify={notify} handleCart={handleCart} title='Product Title Quantity' price='price'></Product>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      
      <Footer mode={mode}></Footer>
      <ScrollButton />
    </Fragment>
    <div className="">
    
      
    </div>
    </>
  );
}

export default App;
