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
//import { Link } from 'react-router-dom';
// import { Route, Router } from 'react-router';
// import { Link } from 'react-router-dom';


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
    // let products=[
    //     {id:1, name:'title', price:110.00, quantity:10, img:{img}},
    //     {id:2, name:'title2', price:110.00, quantity:10},
    //     {id:3, name:'title3', price:110.00, quantity:10},
    //     {id:4, name:'title4', price:110.00, quantity:10},
    //     {id:5, name:'title5', price:110.00, quantity:10},
    //     {id:6, name:'title6', price:110.00, quantity:10},
    // ]
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
            <Category mode={props.mode} category="Cooking Oil & Ghee"> </Category><hr />
            <div className="row ">
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni MAster Oil 1Ltr" offerPrice="tk379.00" price="360.00" tag='tk19.00 OFF'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} img={img4} category="Grocery" title="Span Virgin Olive Oil 1ltr" price="145.00" tag='5% OFF'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={img3} category="Grocery" title="Aarong Butter  200gm" price="160.00" tag='new'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={img2} category="Grocery" title="Aarong Ghee  300gm" price="120.00" tag='new'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={img5} category="Grocery" title="Olitalia Sunflower Oil 5ltr" offerPrice="1555" price="1505.00" tag='tk50.00 OFF'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={img6} category="Grocery" title="Olitalia Pomace Olive Oil 1ltr" price="273.00" tag='new'></Grocery>
                
                </div>
             
            
            </div>
            </div>               
        </div>


        {/* -------BAkery and snacks------------------------- */}
        <div className=" my-3 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} category="Bakery & Snacks"> </Category><hr />
            <div className="row ">
                <div className="col-lg-2 col-md-4 col-6 col-xs-2">
                
                <Grocery mode={props.mode} notify={props.notify} img={b1} category="Grocery" title="Meena Sweets Sweet Toast-        :350gm" price="135.00" tag='new'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={b2} category="Grocery" title="SUNFEAST D FANTASY CHOCO FILLS BIS 300G" price="420.00" tag='new'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={b3} category="Grocery" title="MEENA SWEETS DRY CAKE  --  300GM" price="225.00"></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={b4} category="Grocery" title="PRAN  CHICKEN MINI SAMOSA 250GM 25PCS" price="189.00"></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={b5} category="Grocery" title="Cadbury Oreo Ori C San Biscuit 120/150gm" price="135.00"></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={b6} category="Grocery" title="Ruchi Premium Mix Chanachur ....    :100gm" price="27.00"></Grocery>
                
                </div>
             
            
            </div>
            </div>               
        </div>

        {/* ------------------------------Grocery----------------------------- */}
        <div className=" my-3 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} category="Grocery"> </Category> <hr />
            <div className="row">
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={g} category="Grocery" title="Najir Rice Premium Bulk" price="80.00"></Grocery>
                

                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={g2} category="Grocery" title="Musur Dal (Lentil) Local Premium  Bulk" price="145.00"></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={g3} category="Grocery" title="Maggi Noodles Masala 8PX62g" price="160.00"></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={g4} category="Grocery" title="Banana (Sagor) Ripe Regular Pcs" price="12.00"></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={g5} category="Grocery" title="Coconut (Narikel] Pcs" price="105.00"></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={g6} category="Grocery" title="Fresh Malta Yellow 1KG" price="273.00"></Grocery>
                
                </div>
                </div>
                </div>
             
            
            </div>

            {/* ------------------------------------Beauty & Hygiene---------------------------------------- */}
            <div className=" my-5 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} category="Beauty & Hygiene"> </Category><hr />
            {/* <div className="row my-2"> */}
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org4} category="Grocery" title="Organikare Safe Ins Hand Sanitizer spray 100ml" price="130.00" />
                
                </div>

                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org5} category="Grocery" title="Organikare Skin Lotion Dry Skin 200ml" price="175.00" />
                
                </div>
                
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org6} category="Grocery" title="Organikare Glycerine 120ml" price="160.00" />
                
                </div>

                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org7} category="Grocery" title="Organikare Glycerine 60ml" price="120.00" />
                
                </div>

                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org8} category="Grocery" title="Organikare Hair Oil 75ml" price="995.00" />
                
                </div>

                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} 
                    img={org9} category="Grocery" title="Organikare Face Wash Cleansing Milk 100gm" price="328.00" />
                
                </div>
                       
            </div>
            </div>
{/* --------------------------------------------------Dairy-------------------------- */}
<div className=" my-5 ">
            <div className={`row mx-lg-4 mx-xxl-5 mx-xl-5 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} category="Dairy"> </Category><hr />
            <div className="row ">
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} img={dd} category="Grocery" title="Aarong Dairy Laban(500ml)" offerPrice="tk79.00" price="60.00" tag='tk19.00 OFF'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                    <Grocery mode={props.mode} notify={props.notify} img={dd4} category="Grocery" title="Farm Fresh Butter 200gm" price="230.00" tag='5%'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={dd3} category="Grocery" title="Danish Condensed Milk 397gm" price="80.00" tag='tk10.00 OFF'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={dd2} category="Grocery" title="Farm Fresh Yoghurt Sour 500ml" price="120.00" tag='new'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={dd5} category="Grocery" title="Diploma Milk Powder Poly 200gm" offerPrice="tk180.00" price="155.00" tag='tk25.00 OFF'></Grocery>
                
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                
                <Grocery mode={props.mode} notify={props.notify} img={dd6} category="Grocery" title="Radhuni Ready Mix Masala 80gm" price="70.00" tag=''></Grocery>
                
                </div>
             
            
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
