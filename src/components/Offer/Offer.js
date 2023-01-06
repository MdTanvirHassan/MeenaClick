import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Grocery from '../Grocery/Grocery'
import img from '../../image/p1.jpg';
import img2 from '../../image/p2.jpg';
import img3 from '../../image/p6.jpg';
import img4 from '../../image/p3.jpg';
import img5 from '../../image/p4.jpg';
import img6 from '../../image/p5.jpg';
import org4 from "../../image/org4.jpg";
import org5 from "../../image/org5.jpg";
import org6 from "../../image/org6.jpg";
import org7 from "../../image/org7.jpg";
import org8 from "../../image/org8.jpg";
import org9 from "../../image/org9.jpg";
import coupons from "../../image/cupons.jpg";
// import Footer from '../Footer/Footer';

import { Link } from 'react-router-dom';

export default function Offer(props) {
    //! preloader2
    const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
    const styles={
      height: '200px',
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
    <div className='mx-4' >
      {/* setProgress={props.setProgress(props.progress + 100)} */}
      <div className="my-3 text-center">
        <img src={coupons} alt="" width='50%' className='border-danger'/>
      </div>
        <div className="text-success text-center">
            <h4 className="">Offer Products</h4><hr />
        </div>
        <div className="row">
          {/* <div className="col-2">

          </div>
          <div className="col-10"> */}

<div className="row my-2 mx-4">
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org4} category="Grocery" title="Organikare Safe Ins Hand Sanitizer spray 100ml" offerPrice="tk140.00" price="130.00" tag='tk10.00 OFF'/>
               
                </div>

                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org5} category="Grocery" title="Organikare Skin Lotion Dry Skin 200ml" offerPrice="tk190.00" price="175.00" tag='10%'/>
                
                </div>
                
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org6} category="Grocery" title="Organikare Glycerine 120ml" offerPrice="tk190.00" price="160.00" tag='tk30.00 OFF'/>
                
                </div>

                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org7} category="Grocery" title="Organikare Glycerine 60ml" offerPrice="tk135.00" price="120.00" tag='tk15.00 OFF'/>
                
                </div>

                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org8} category="Grocery" title="Organikare Hair Oil 75ml" offerPrice="tk1090.00" price="995.00" tag='10%'/>
                
                </div>

                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org9} category="Grocery" title="Organikare Face Wash Cleansing Milk 100gm" offerPrice="tk360.00" price="328.00" tag='tk32.00 OFF'/>
                
                </div>
                       
            </div>

          
        
        <div className={`row mx-lg- mx-xxl-3 mx-xl-3 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" 
                title="Radhuni MAster Oil 1Ltr" offerPrice="tk90.00" price="80.00" tag='10%'></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img4} category="Grocery" 
                title="Span Virgin Olive Oil 1ltr" offerPrice="tk165.00" price="145.00" tag='tk20.00 OFF'></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img3} category="Grocery" 
                title="Aarong Butter  200gm" offerPrice="tk195.00" price="160.00" tag='tk35.00 OFF'></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img2} category="Grocery" 
                title="Aarong Ghee  300gm" offerPrice="tk145.00" price="120.00" tag='tk25.00 OFF'></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img5} category="Grocery"
                 title="Olitalia Sunflower Oil 5ltr" offerPrice="tk1555.00" price="1505.00" tag='tk50.00 OFF'></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img6} category="Grocery" title="Olitalia Pomace Olive Oil 1ltr" offerPrice="tk310.00" price="273.00" tag='tk37.00 OFF'></Grocery>
                </div>
                
           </div> 

               <div className="mx-4">
                <Link to='/details' className='text-decoration-none'>
        <Grocery mode={props.mode} notify={props.notify} img={img4} category="Grocery" offerPrice="tk170.00" title="Span Virgin Olive Oil 1ltr" price="145.00" tag='tk25.00 OFF'/></Link>
        
        </div>
               {/* pagination */}
               <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href='/'>Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href='/'>1</a></li>
                  <li className="page-item"><a className="page-link" href='/'>2</a></li>
                  <li className="page-item"><a className="page-link" href='/'>3</a></li>
                  <li className="page-item">
                    <a className="page-link" href='/'>Next</a>
                  </li>
                </ul>
              </nav>
              </div>  
              </div>   
    // </div>
    
    }
    </>
  )
}
