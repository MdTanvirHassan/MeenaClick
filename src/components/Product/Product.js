import React, { useState } from 'react'
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
import b2 from '../../image/b2.jpg';
import b3 from '../../image/b3.jpg';
import b4 from '../../image/b4.jpg';
import b5 from '../../image/b5.jpg';
import b6 from '../../image/b6.jpg';
import './Product.css';
import Grocery from '../Grocery/Grocery';
import Category from '../Category/Category';


export default function Product(props) {
    const [cart, setCart] = useState(0)
    // const handleCart=(item,action)=>{
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
  return (
    <div className=''>
        <div className=" my-5 ">
            <div className={`row mx-4 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} category="Cooking Oil & Ghee"> </Category><hr />
            <div className="row ">
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni MAster Oil 1Ltr" price="80.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={img2} category="Grocery" title="Span Virgin Olive Oil 1ltr" price="145.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={img3} category="Grocery" title="Aarong Butter  200gm" price="160.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={img4} category="Grocery" title="Aarong Ghee  300gm" price="12.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={img5} category="Grocery" title="Olitalia Sunflower Oil 5ltr" price="105.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={img6} category="Grocery" title="Olitalia Pomace Olive Oil 1ltr" price="273.00"></Grocery>
                </div>
             
            
            </div>
            </div>               
        </div>


        {/* -------BAkery and snacks------------------------- */}
        <div className=" my-3 ">
            <div className={`row mx-4 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} category="Bakery & Snacks"> </Category><hr />
            <div className="row ">
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={b1} category="Grocery" title="Meena Sweets Sweet Toast-        :350gm" price="135.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={b2} category="Grocery" title="SUNFEAST D FANTASY CHOCO FILLS BIS 300G" price="420.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={b3} category="Grocery" title="MEENA SWEETS DRY CAKE  --  300GM" price="225.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={b4} category="Grocery" title="PRAN  CHICKEN MINI SAMOSA 250GM 25PCS" price="189.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={b5} category="Grocery" title="Cadbury Oreo Ori C San Biscuit 120/150gm" price="135.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={b6} category="Grocery" title="Ruchi Premium Mix Chanachur ....    :100gm" price="27.00"></Grocery>
                </div>
             
            
            </div>
            </div>               
        </div>

        {/* ------------------------------Grocery----------------------------- */}
        <div className=" my-3 ">
            <div className={`row mx-4 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
            <Category mode={props.mode} category="Grocery"> </Category>
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={g} category="Grocery" title="Najir Rice Premium Bulk" price="80.00"></Grocery>

                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={g2} category="Grocery" title="Musur Dal (Lentil) Local Premium  Bulk" price="145.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={g3} category="Grocery" title="Maggi Noodles Masala 8PX62g" price="160.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={g4} category="Grocery" title="Banana (Sagor) Ripe Regular Pcs" price="12.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={g5} category="Grocery" title="Coconut (Narikel] Pcs" price="105.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                <Grocery mode={props.mode} notify={props.notify} img={g6} category="Grocery" title="Fresh Malta Yellow 1KG" price="273.00"></Grocery>
                </div>
                </div>
                </div>
             
            
            </div>
{/* --------------------------------------------------Dairy-------------------------- */}
        <div className="mx-3 my-5 ">
            <div className={`row mx-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>
                <div className="col-9">
                        <h5 className={`text-${props.mode==='dark'?'warning':'body'}`}>Dairy</h5>
                </div>
                <div className="col-3">
                    <a href="/" className={`nav-link text-end text-${props.mode==='dark'?'warning':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>More <i className=" bi bi-caret-right-fill me-1"></i></a>
                </div>
            </div><hr />
            <div className={`row mx-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'}`}>
                <div className={`col-lg-2 col-sm-12 col-md-6 mb-1  `}>
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Aarong Dairy Laban(500ml)</h5>
                        <p className="card-text">tk. 65.00</p>
                        <div className="flex addBtn">
                             <button  className='btn addBtn ' type='button' onClick={props.notify}> 
                               <button className=' addBtn2' disabled={cart<0} onClick={()=>setCart(cart-1)}>{cart===0?<i className='bi bi-cart'></i>:'-'}</button>
                                <span className='mx-1 w' onClick={()=>setCart(cart+1)}>{cart===0?'Add to Cart':cart}</span>
                                <button className=' addBtn2' onClick={()=>setCart(cart+1)}>{cart===0?'':'+'}</button>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd2} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Farm Fresh Butter 200gm
</h5>
                        <p className="card-text">tk. 230.00</p>
                        <div className="flex bg-secondary p-0 rounded">
                             <button  className='btn bg-secondary ' type='button' > 
                               {/* <button className=' addBtn2' disabled={cart<0} onClick={()=>setCart(cart-1)}>{cart===0?<i className='bi bi-cart'></i>:'-'}</button> */}
                                <span className='mx-1 w text-white' >Out of Stock</span>
                                {/* <button className=' addBtn2' onClick={()=>setCart(cart+1)}>{cart===0?'':'+'}</button> */}
                            </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd3} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Danish Condensed Milk 397gm</h5>
                        <p className="card-text">tk. 80.00</p>
                        <div className="flex addBtn">
                             <button  className='btn addBtn ' type='button' onClick={props.notify}> 
                               <button className=' addBtn2' disabled={cart<0} onClick={()=>setCart(cart-1)}>{cart===0?<i className='bi bi-cart'></i>:'-'}</button>
                                <span className='mx-1 w' onClick={()=>setCart(cart+1)}>{cart===0?'Add to Cart':cart}</span>
                                <button className=' addBtn2' onClick={()=>setCart(cart+1)}>{cart===0?'':'+'}</button>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd4} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Farm Fresh Yoghurt Sour 500ml</h5>
                        <p className="card-text">tk. 100.00</p>
                        <div className="flex addBtn">
                             <button  className='btn addBtn ' type='button' onClick={props.notify}> 
                               <button className=' addBtn2' disabled={cart<0} onClick={()=>setCart(cart-1)}>{cart===0?<i className='bi bi-cart'></i>:'-'}</button>
                                <span className='mx-1 w' onClick={()=>setCart(cart+1)}>{cart===0?'Add to Cart':cart}</span>
                                <button className=' addBtn2' onClick={()=>setCart(cart+1)}>{cart===0?'':'+'}</button>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd5} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Diploma Milk Powder Poly 200gm</h5>
                        <p className="card-text">tk. 180.00</p>
                        <div className="flex addBtn">
                             <button  className='btn addBtn ' type='button' onClick={props.notify}> 
                               <button className=' addBtn2' disabled={cart<0} onClick={()=>setCart(cart-1)}>{cart===0?<i className='bi bi-cart'></i>:'-'}</button>
                                <span className='mx-1 w' onClick={()=>setCart(cart+1)}>{cart===0?'Add to Cart':cart}</span>
                                <button className=' addBtn2' onClick={()=>setCart(cart+1)}>{cart===0?'':'+'}</button>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd6} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Radhuni Ready Mix Masala 80gm</h5>
                        <p className="card-text">tk. 70.00</p>
                        <div className="flex addBtn">
                             <button  className='btn addBtn ' type='button' onClick={props.notify}> 
                               <button className=' addBtn2' disabled={cart<0} onClick={()=>setCart(cart-1)}>{cart===0?<i className='bi bi-cart'></i>:'-'}</button>
                                <span className='mx-1 w' onClick={()=>setCart(cart+1)}>{cart===0?'Add to Cart':cart}</span>
                                <button className=' addBtn2' onClick={()=>setCart(cart+1)}>{cart===0?'':'+'}</button>
                            </button>
                        </div>
                    </div>
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
