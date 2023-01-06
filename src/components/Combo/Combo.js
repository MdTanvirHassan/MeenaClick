import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Filter from '../Filter/Filter';
import Grocery from '../Grocery/Grocery';
// import Product from "../Product/Product";
import img from '../../image/p1.jpg';
import img2 from '../../image/p2.jpg';
import img3 from '../../image/p6.jpg';
import img4 from '../../image/p3.jpg';
import img5 from '../../image/p4.jpg';
import img6 from '../../image/p5.jpg';
import b1 from '../../image/b1.jpg';
import b2 from '../../image//b2.jpg';
import b3 from '../../image/b3.jpg';
import b4 from '../../image/b4.jpg';
import b5 from '../../image/b5.jpg';
import b6 from '../../image/b6.jpg';

export default function Combo(props) {
    //! preloader2
    const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
    const styles={
      height: '250px',
    }
  return (
    <>
    {
        preLoading?
        <div className='d-flex justify-content-center text-center' style={styles}>
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
    <div className={` mt-2 bg-${props.mode==='dark'?'':''}`}>
      <div>
        <h4 className={`text-center text-success`} >Products</h4>
        {/* setProgress={props.setProgress(props.progress + 10)} */}
      </div>
      <hr />
      <div className="row mx-4">
        <div className="col-md-3 col-sm-6 col-xs-6">
          <Filter />
        </div>
        <div className="col-md-9 col-sm-6">
        <div className={``}>
        <div className="row ">
                <div className="col-lg-3 col-md-3 col-6 col-xl-3 col-xxl-3 col-xs-12 col-sm-12">
                
                    <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni Master Oil 1Ltr" offerPrice="tk379.00" price="360.00" tag='tk19.00 OFF'></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-xl-3 col-xxl-3 col-xs-12 col-sm-12">
                
                    <Grocery mode={props.mode} notify={props.notify} img={img4} category="Grocery" title="Span Virgin Olive Oil 1ltr" price="145.00" tag='5% OFF'></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-xl-3 col-xxl-3 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={img3} category="Grocery" title="Aarong Butter  200gm" price="160.00" tag='OUT OF STOKE'></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-xl-3 col-xxl-3 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={img2} category="Grocery" title="Aarong Ghee  300gm" price="120.00" tag='new'></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-xl-3 col-xxl-3 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={img5} category="Grocery" title="Olitalia Sunflower Oil 5ltr" offerPrice="tk1555" price="1505.00" tag='tk50.00 OFF'></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-xl-3 col-xxl-3 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={img6} category="Grocery" title="Olitalia Pomace Olive Oil 1ltr" price="273.00" tag='new'></Grocery>
  
                
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xs-2">
                
                <Grocery mode={props.mode} notify={props.notify} img={b1} category="Grocery" title="Meena Sweets Sweet Toast-        :350gm" price="135.00" tag='new'></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xs-2">
                
                <Grocery mode={props.mode} notify={props.notify} img={b2} category="Grocery" title="SUNFEAST D FANTASY CHOCO FILLS BIS 300G" price="420.00" tag='new'></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xs-2">
                
                <Grocery mode={props.mode} notify={props.notify} img={b3} category="Grocery" title="MEENA SWEETS DRY CAKE  --  300GM" price="225.00"></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xs-2">
                
                <Grocery mode={props.mode} notify={props.notify} img={b4} category="Grocery" title="PRAN  CHICKEN MINI SAMOSA 250GM 25PCS" price="189.00"></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xs-2">
                
                <Grocery mode={props.mode} notify={props.notify} img={b5} category="Grocery" title="Cadbury Oreo Ori C San Biscuit 120/150gm" price="135.00"></Grocery>
                
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xs-2">
                
                <Grocery mode={props.mode} notify={props.notify} img={b6} category="Grocery" title="Ruchi Premium Mix Chanachur ....    :100gm" price="27.00"></Grocery>
                
                </div>
             
            
            </div>
        </div>
        </div>
      </div>
      
      <div className="">
        
      </div>
      {/* pagination.append */}
      <div className="mx-md-5">
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
      </div>
      {/* pagination-end */}

      
    </div>
}
    </>
  );
}
