import React from 'react'
// import { useState } from 'react'
import PropTypes from 'prop-types';
import img from '../../image/p1.jpg';
import img2 from '../../image/p2.jpg';
import img3 from '../../image/p6.jpg';
import img4 from '../../image/p3.jpg';
import img5 from '../../image/p4.jpg';
import img6 from '../../image/p5.jpg';
import dd from '../../image/dd.jpg';
import dd2 from '../../image/dd2.jpg';
import dd3 from '../../image/dd3.jpg';
import dd4 from '../../image/dd4.jpg';
import dd5 from '../../image/dd5.jpg';
import dd6 from '../../image/dd6.jpg';
import g from '../../image/g1.jpg';
import g2 from '../../image/g2.jpg';
import g3 from '../../image/g3.jpg';
import g4 from '../../image/g4.jpg';
import g5 from '../../image/g5.jpg';
import g6 from '../../image/g6.jpg';
import b1 from '../../image/b1.jpg';
import b2 from '../../image//b2.jpg';
import b3 from '../../image/b3.jpg';
import b4 from '../../image/b4.jpg';
import b5 from '../../image/b5.jpg';
import b6 from '../../image/b6.jpg';
import org4 from "../../image/org4.jpg";
import org5 from "../../image/org5.jpg";
import org6 from "../../image/org6.jpg";
import org7 from "../../image/org7.jpg";
import org8 from "../../image/org8.jpg";
import org9 from "../../image/org9.jpg";
import './Product.css';
import Grocery from '../Grocery/Grocery';
import Category from '../Category/Category';
import { Link } from 'react-router-dom';
// import { Route, Router } from 'react-router';


export default function Product(props) {
    //const [cart, setCart] = useState(0)
    //* const handleCart=(item,action)=>{
    //     setCart((prevCart)=>{
    //         return{
    //             ...prevCart,
    //             [item]: action=="up"?cart[item]+1:cart[item]-1
    //         }
    //     })
    // }
    // const handleAddProduct=(product)=> {
    //     console.log("Product Added.",product);
    //     const newCart = [...cart,product];
    //     setCart(newCart);
    //  }
    const cooking= [
    {id:1, img: img, category:"Cooking & Oil", title:"Radhuni Master Oil 1Ltr", url:'/details', tag:'tk19.00 OFF',offerPrice:'tk 379.00/EA', price:360.00},
    {id:2, img: img4, category:"Cooking & Oil", title:"Span Virgin Olive Oil 1ltr", url:'/details', tag:'5% OFF',offerPrice:'', price:1450.00},
    {id:3, img: img2, category:"Cooking & Oil", title:"Aarong Ghee 300gm", url:'/details', tag:'New',offerPrice:'', price:120.00},
    {id:4, img: img5, category:"Cooking & Oil", title:"Olitalia Sunflower Oil 5ltr", url:'/details', tag:'tk50.00 OFF',offerPrice:'tk 1555/EA', price:1505.00},
    {id:5, img: img6, category:"Cooking & Oil", title:"Olitalia Pomace Olive Oil 1ltr", url:'/details', tag:'New',offerPrice:'', price:1280.00},
    {id:6, img: img3, category:"Cooking & Oil", title:"Aarong Butter  200gm", url:'/details', tag:'',offerPrice:'', price:160.00},
    ];
    const bakery= [
        {id:1, img: b1, category:"Bakery  & Snacks", title:"Meena Sweets Sweet Toast-        :350gm", url:'/details', tag:'New',offerPrice:'tk 379.00/EA', price:135.00},
        {id:2, img: b2, category:"Bakery  & Snacks", title:"SUNFEAST D FANTASY CHOCO FILLS BIS 300G", url:'/details', tag:'5% OFF',offerPrice:'', price:420.00},
        {id:3, img: b3, category:"Bakery  & Snacks", title:"MEENA SWEETS DRY CAKE  --  300GM", url:'/details', tag:'New',offerPrice:'', price:225.00},
        {id:4, img: b4, category:"Bakery  & Snacks", title:"PRAN  CHICKEN MINI SAMOSA 250GM 25PCS", url:'/details', tag:'tk50.00 OFF',offerPrice:'tk 240/EA', price:190.00},
        {id:5, img: b5, category:"Bakery  & Snacks", title:"Cadbury Oreo Ori C San Biscuit 120/150gm", url:'/details', tag:'New',offerPrice:'', price:135.00},
        {id:6, img: b6, category:"Bakery  & Snacks", title:"Ruchi Premium Mix Chanachur ....    :100gm", url:'/details', tag:'',offerPrice:'', price:27.00},
        ];
    const grocery= [
        {id:1, img: g, category:"Grocery", title:"Najir Rice Premium Bulk", url:'/details', tag:'',offerPrice:'', price:135.00},
        {id:2, img: g2, category:"Grocery", title:"Musur Dal (Lentil) Local Premium  Bulk", url:'/details', tag:'5% OFF',offerPrice:'', price:120.00},
        {id:3, img: g3, category:"Grocery", title:"Maggi Noodles Masala 8PX62g", url:'/details', tag:'New',offerPrice:'', price:225.00},
        {id:4, img: g4, category:"Grocery", title:"Banana (Sagor) Ripe Regular Pcs", url:'/details', tag:'',offerPrice:'', price:10.00},
        {id:5, img: g5, category:"Grocery", title:"Coconut (Narikel] Pcs", url:'/details', tag:'',offerPrice:'', price:80.00},
        {id:6, img: g6, category:"Grocery", title:"Fresh Malta Yellow 1KG", url:'/details', tag:'',offerPrice:'', price:270.00},
        ];
    const beauty= [
        {id:1, img: org4, category:"Beauty & Hygiene", title:"Organikare Safe Ins Hand Sanitizer spray 100ml", url:'/details', tag:'10% OFF',offerPrice:'tk 150/EA', price:135.00},
        {id:2, img: org5, category:"Beauty & Hygiene", title:"Organikare Glycerine 120ml", url:'/details', tag:'5% OFF',offerPrice:'', price:180.00},
        {id:3, img: org6, category:"Beauty & Hygiene", title:"Organikare Glycerine 120ml", url:'/details', tag:'New',offerPrice:'', price:225.00},
        {id:4, img: org7, category:"Beauty & Hygiene", title:"Organikare Glycerine 60ml", url:'/details', tag:'',offerPrice:'', price:310.00},
        {id:5, img: org8, category:"Beauty & Hygiene", title:"Organikare Hair Oil 75ml", url:'/details', tag:'tk 40 OFF',offerPrice:'tk 1020/EA', price:980.00},
        {id:6, img: org9, category:"Beauty & Hygiene", title:"Organikare Face Wash Cleansing Milk 100gm", url:'/details', tag:'',offerPrice:'', price:370.00},
        ];
     const dairy= [
        {id:1, img: dd, category:"Beauty & Hygiene", title:"Aarong Dairy Laban(500ml)", url:'/details', tag:'tk 19 OFF',offerPrice:'tk 79/EA', price:60.00},
        {id:2, img: dd4, category:"Beauty & Hygiene", title:"Farm Fresh Butter 200gm", url:'/details', tag:'5% OFF',offerPrice:'', price:180.00},
        {id:3, img: dd3, category:"Beauty & Hygiene", title:"Danish Condensed Milk 397gm", url:'/details', tag:'5% OFF',offerPrice:'', price:80.00},
        {id:4, img: dd2, category:"Beauty & Hygiene", title:"Farm Fresh Yoghurt Sour 500ml", url:'/details', tag:'new',offerPrice:'', price:310.00},
        {id:5, img: dd5, category:"Beauty & Hygiene", title:"Diploma Milk Powder Poly 200gm", url:'/details', tag:'tk 40 OFF',offerPrice:'tk 220/EA', price:180.00},
        {id:6, img: dd6, category:"Beauty & Hygiene", title:"Radhuni Ready Mix Masala 80gm", url:'/details', tag:'',offerPrice:'', price:170.00},
        ];

  return (
    <div className=''>
        {/* <div className="">
            <Router>
                {
                    products.map((product) =><div><Link to={'/Product/'+product.id+'/'}></div>)
                }
                <Route path='/Product/:id'> <Grocery /></Route>
            </Router>
        </div> */}
        <div className=" my-5 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} link="/#" category="Cooking Oil & Ghee"> </Category><hr />
            <div className="row ">
            {cooking.map((item,index)=>{
                return( 
                    <div key={item.id} className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                        <Link to={item.url} key={index}  className='text-decoration-none'>
                        <Grocery mode={props.mode} notify={props.notify} 
                        img={item.img} category={item.category} title={item.title} tag={item.tag} offerPrice={item.offerPrice} price={item.price} url={item.url}/>
                         </Link>
                    </div>  
                )
            })} 
            </div>
            </div>               
        </div>


        {/* -------BAkery and snacks------------------------- */}
        <div className=" my-3 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} link="/#" category="Bakery & Snacks"> </Category><hr />
            <div className="row ">
            {bakery.map((item,index)=>{
                return( 
                    <div key={item.id} className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                        <Link to={item.url} key={index} className='text-decoration-none'>
                        <Grocery mode={props.mode} notify={props.notify} 
                        img={item.img} category={item.category} title={item.title} tag={item.tag} offerPrice={item.offerPrice} price={item.price} url={item.url}/>
                         </Link>
                    </div>  
                )
            })} 
            </div>
            </div>               
        </div>

        {/* ------------------------------Grocery----------------------------- */}
        <div className=" my-3 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} link="/#" category="Grocery"> </Category> <hr />
            <div className="row">
            {grocery.map((item,index)=>{
                return( 
                    <div key={item.id} className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                        <Link to={item.url} key={index}  className='text-decoration-none'>
                        <Grocery mode={props.mode} notify={props.notify} 
                        img={item.img} category={item.category} title={item.title} tag={item.tag} offerPrice={item.offerPrice} price={item.price} url={item.url}/>
                         </Link>
                    </div>  
                )
            })} 
                </div>
                </div>
            </div>

            {/* ------------------------------------Beauty & Hygiene---------------------------------------- */}
            <div className=" my-5 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} link="/#" category="Beauty & Hygiene"> </Category><hr />
            <div className="row ">
            {beauty.map((item,index)=>{
                return( 
                    <div key={item.id} className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                        <Link to={item.url} key={index} className='text-decoration-none'>
                        <Grocery mode={props.mode} notify={props.notify} 
                        img={item.img} category={item.category} title={item.title} tag={item.tag} offerPrice={item.offerPrice} price={item.price} url={item.url}/>
                         </Link>
                    </div>  
                )
            })} 
            </div>        
            </div>
            </div>
{/* --------------------------------------------------Dairy-------------------------- */}
<div className=" my-5 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} link="/#" category="Dairy"> </Category><hr />
            <div className="row ">
            {dairy.map((item,index)=>{
                return( 
                    <div key={item.id} className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                        <Link to={item.url} key={index} className='text-decoration-none'>
                        <Grocery mode={props.mode} notify={props.notify} 
                        img={item.img} category={item.category} title={item.title} tag={item.tag} offerPrice={item.offerPrice} price={item.price} url={item.url}/>
                         </Link>
                    </div>  
                )
            })}  
            </div>
            </div>               
        </div>
</div>
  )
}


Product.propTypes ={
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}
Product.defaultProps ={
    title: 'Product Title',
    price: 'Product Price'
}
