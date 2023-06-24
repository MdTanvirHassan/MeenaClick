import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
// import { Link } from "react-router-dom";
import './Brands.css'
import org from "../../image/org.jpg";
import org2 from "../../image/org2.jpg";
import org3 from "../../image/org3.jpg";
import org4 from "../../image/org4.jpg";
import org5 from "../../image/org5.jpg";
import org6 from "../../image/org6.jpg";
import org7 from "../../image/org7.jpg";
import org8 from "../../image/org8.jpg";
import org9 from "../../image/org9.jpg";
import Grocery from "../Grocery/Grocery";

const brand= [
 {id:1, img: org4, category:"Grocery", title:"Organikare Safe Ins Hand Sanitizer spray 100ml", url:'/details', tag:'15% OFF',offerPrice:'tk 150 /EA', price:135.00},
 {id:2, img: org5, category:"Grocery", title:"Organikare Skin Lotion Dry Skin 200ml", url:'/details', tag:"tk 25 OFF",offerPrice:'tk 200.00/EA', price:175.00},
 {id:3, img: org6, category:"Grocery", title:"Organikare Glycerine 120ml", url:'/details', tag:"",offerPrice:'', price:160.00},
 {id:4, img: org7, category:"Grocery", title:"Organikare Glycerine 60ml", url:'/details', tag:"",offerPrice:'', price:120.00},
 {id:5, img: org8, category:"Grocery", title:"Organikare Hair Oil 75ml", url:'/details', tag:"",offerPrice:'', price:995.00},
 {id:6, img: org9, category:"Grocery", title:"Organikare Face Wash Cleansing Milk 100gm", url:'/details', tag:"",offerPrice:'', price:338.00},
 {id:7, img: org4, category:"Grocery", title:"Organikare Safe Ins Hand Sanitizer spray 100ml", url:'/details', tag:"",offerPrice:'', price:130.00},
 {id:8, img: org5, category:"Grocery", title:"Organikare Skin Lotion Dry Skin 200ml", url:'/details', tag:"",offerPrice:'', price:175.00},
 {id:9, img: org6, category:"Grocery", title:"Organikare Glycerine 120ml", url:'/details', tag:"",offerPrice:'', price:160.00},
 {id:10, img: org7, category:"Grocery", title:"Organikare Glycerine 60ml", url:'/details', tag:"",offerPrice:'', price:120.00},
 {id:11, img: org8, category:"Grocery", title:"Organikare Hair Oil 75ml", url:'/details', tag:"",offerPrice:'', price:995.00},
 {id:12, img: org9, category:"Grocery", title:"Organikare Face Wash Cleansing Milk 100gm", url:'/details', tag:"",offerPrice:'', price:338.00},
 {id:13, img: org4, category:"Grocery", title:"Organikare Safe Ins Hand Sanitizer spray 100ml", url:'/details', tag:"",offerPrice:'', price:130.00},
 {id:14, img: org5, category:"Grocery", title:"Organikare Skin Lotion Dry Skin 200ml", url:'/details', tag:"",offerPrice:'', price:175.00},
 {id:15, img: org6, category:"Grocery", title:"Organikare Glycerine 120ml", url:'/details', tag:"",offerPrice:'', price:160.00},
 {id:16, img: org7, category:"Grocery", title:"Organikare Glycerine 60ml", url:'/details', tag:"",offerPrice:'', price:120.00},
 {id:17, img: org8, category:"Grocery", title:"Organikare Hair Oil 75ml", url:'/details', tag:"",offerPrice:'', price:995.00},
 {id:18, img: org9, category:"Grocery", title:"Organikare Face Wash Cleansing Milk 100gm", url:'/details', tag:"",offerPrice:'', price:338.00},
 

]


export default function Brands(props) {
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
    <div>
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
      <div className="mx-5">
        <div className="headerCover mb-4">
          
            <img src={org} alt="" width="100%" />
          
        </div>
        <div className="row my-4">
          <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-sm-12 col-xs-12 mb-1">
            
              <img src={org2} alt="" width="100%" className="border-danger"/>
            
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-sm-12 col-xs-12 mb-1">
            
              <img src={org3} alt="" width="100%" className="border-danger"/>
            
          </div>
        </div>

        {/* //todo brands product */}
        <section>
        <div className="row my-2">
            {brand.map((item,index)=>{
                return(
                    <div key={item.id} className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                     <Grocery mode={props.mode} notify={props.notify} 
                        img={item.img} category={item.category} title={item.title} tag={item.tag} offerPrice={item.offerPrice} price={item.price} url={item.url}/>
                    </div>
                )
            })}          
         </div>
        </section>

      </div>
     }
    </div>
  );
}
