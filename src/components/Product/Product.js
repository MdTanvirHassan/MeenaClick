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
import './Product.css';
import Grocery from '../Grocery/Grocery';


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
    <div>
        <div className="mx-3 my-5 ">
            <div className={`row mx-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>
                <div className="col-9">
                        <h5 className={`text-${props.mode==='dark'?'warning':'body'}`}>Cooking Oil & Ghee</h5>
                </div>
                <div className="col-3">
                    <a href="/" className={`nav-link text-end text-${props.mode==='dark'?'warning':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>More <i className=" bi bi-caret-right-fill me-1"></i></a>
                </div>
            </div><hr />
            <div className={`row mx-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'}`}>
                <div className={`col-lg-2 col-sm-12 col-md-6 mb-1 mb-1 `}>
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={img} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        {/* <button href='/' className="btn btn-success " alt='Added' ><i className="bi bi-cart me-1"></i>Add to Cart</button> */}
                        <div className="flex addBtn">
                              <button  className='btn addBtn ' type='button' onClick={props.notify}> <span className='text- bg-'>
                               <button className=' addBtn2' disabled={cart<0} onClick={()=>setCart(cart-1)}>{cart===0?<i className='bi bi-cart'></i>:<span className='text- bg-'>-</span>}</button>
                                <span className='mx-1 w' onClick={()=>setCart(cart+1)}>{cart===0?'Add to Cart':<span className='text- bg-'>{cart}</span>}</span>
                                <button className=' addBtn2' onClick={()=>setCart(cart+1)}>{cart===0?'':'+'}</button></span>
                            </button>
                        </div>
                        {/* <a href='/' className="btn btn-success " onClick={handleCart}><i className="bi bi-cart me-1"></i>Add to Cart</a> */}
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={img4} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Span Virgin Olive Oil 1ltr</h5>
                        <p className="card-text">tk. 660</p>
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
                    <img src={img3} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Aarong Butter  200gm</h5>
                        <p className="card-text">tk. 360</p>
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
                    <img src={img2} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Aarong Ghee  300gm</h5>
                        <p className="card-text">tk. 560</p>
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
                    <img src={img5} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Olitalia Sunflower Oil 5ltr</h5>
                        <p className="card-text">tk. 2450.00</p>
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
                    <img src={img6} className="card-img-top" alt="..."/><hr />
                    <div className={`car text-center mb-4`}>
                        <h5 className="card-title">Olitalia Pomace Olive Oil 1ltr</h5>
                        <p className="card-text">tk. 1160.00</p>
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



        {/* -------dairy------------------------- */}
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
            <Grocery mode={props.mode} title="Najir Rice Premium Bulk" price="80"></Grocery>
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
