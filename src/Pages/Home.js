import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import Feature from '../components/Feature/Feature';
import Product from '../components/Product/Product';
// import Footer from '../components/Footer/Footer';


export default function Home(props) {
    // const {mode}=props.mode;
    // const {notify}=props.notify;
    //! preloader2
  const [preLoading,setPreLoading]= useState(false);
  useEffect(()=>{
    setPreLoading(true);
    setTimeout(()=>{
      setPreLoading(false);
    },10);
  },[]);
    
  return (
    <div>
        {
        preLoading?
        <div className='d-flex justify-content-center text-center'>
            <HashLoader 
            color="#36d7b7" 
            // color={color}
            loading={preLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
          :
        <Link to='/' className='text-decoration-none'>
        <Carousel mode={props.mode}/>
         <Feature mode={props.mode}/>
         <Product mode={props.mode} notify={props.notify} handleCart={props.handleCart} onClick={() => setPreLoading(!preLoading)} title='Product Title Quantity' price='price'/>
      

      </Link>
}
    </div>
  )
}
