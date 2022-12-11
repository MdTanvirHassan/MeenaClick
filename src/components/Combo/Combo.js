import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
// import Footer from "../Footer/Footer";
import Product from "../Product/Product";

export default function Combo(props) {
    //! preloader2
    const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
  return (
    <>
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
    <div className={`mx- mt-2 bg-${props.mode==='dark'?'':''}`}>
      <div>
        <h4 className={`text-center text-success`}>Products</h4>
      </div>
      <hr />
      <div className="">
        <div className={``}>
          <Product mode={props.mode} notify={props.notify}></Product>
        </div>
      </div>
      {/* pagination.append */}
      <nav aria-label={`Page navigation example bg-${props.mode==='dark'?'dark':'body'}`}>
        <ul className={`pagination justify-content-end bg-${props.mode==='dark'?'':''}`}>
          <li className={`page-item disabled bg-${props.mode==='dark'?'dark':'body'}`}>
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* pagination-end */}

      {/* <Footer /> */}
    </div>
}
    </>
  );
}
