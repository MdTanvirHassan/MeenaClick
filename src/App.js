import React, { useState } from 'react'
import Alert from './components/Alert/Alert';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Feature from './components/Feature/Feature';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';

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
  return (
    <div className="App">
      <Header mode={mode} toggleMode={toggleMode}></Header>
      <Alert alert={alert}></Alert>
      <Carousel mode={mode}></Carousel>
      <Feature mode={mode}></Feature>
      <Product mode={mode}></Product>
      <Footer mode={mode}></Footer>
    </div>
  );
}

export default App;
