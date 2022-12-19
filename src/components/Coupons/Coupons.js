import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import coupons from '../../image/cupons.jpg'

export default function Coupons() {
  //! preloader2
  const [preLoading,setPreLoading]= useState(false);
  useEffect(()=>{
    setPreLoading(true);
    setTimeout(()=>{
      setPreLoading(false);
    },1000);
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
            className='mt-5'
          />
          </div>
          :
        <div className="coupons text-center m-5 ">
            <img src={coupons} alt="" width='80%' className='border-danger' />
        </div>
}
    </div>
  )
}
