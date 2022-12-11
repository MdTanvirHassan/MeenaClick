import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Grocery.css';

export default function Grocery(props) {
    const [cart, setCart] = useState(0)
  return (
       <div className=''>
            <div className={` my-1 mb-1 text-${props.mode==='dark'?'white':'body'}`}>
                <div className={` mb-1`}>
                 <div className={`card xl p-2 bg-${props.mode==='dark'?'secondary':'body'} box`}  >
                    <Link to='/details' className="text-decoration-none">
                    <img src={props.img} className="card-img-top" alt="..."/><hr />
                    
                    <div className={`car text-center mb-4`}>
                        <div className="title">
                            <h6 className={`card-title text-${props.mode==='dark'?'white':'dark'}`}>{props.title}</h6>
                        </div>
                        
                        <small className="card-text text-decoration-line-through text-muted"> {props.offerPrice}</small>
                        <h6 className="card-text text-green fw-bold mb-5"><small>tk{props.price}/EA</small></h6>
                        </div>
                        </Link>
                        {/* <button href='/' className="btn btn-success " alt='Added' ><i className="bi bi-cart me-1"></i>Add to Cart</button> */}
                        <div className="pb-3">
                        <div className="flex addBtn">
                              <span  className='btn addBtn ' type='button' > 
                                <span className='text-'>
                                    <span className=' addBtn2' disabled={cart<=0} 
                                     onClick={()=>setCart(cart-1)}>
                                        {cart<=0?<i className='bi bi-cart'></i>:
                                        <span className='fw-bold pe-2' onClick={props.notify}>-</span>}
                                    </span>
                                    <span onClick={props.notify}>
                                    <span className='mx-1 ' onClick={()=>setCart(cart+1)}>
                                        {cart===0?'Add to Cart':
                                        <span onClick={props.notify}>{cart}</span>}
                                    </span>
                                    </span>
                                    <span className=' addBtn2 fw-bold' onClick={()=>setCart(cart+1)}>
                                        {cart===0?'':
                                        <span className='ps-2 fw-bold'onClick={props.notify}>+</span>}
                                    </span>
                                    </span>
                            </span>
                        </div>
                        </div>
                        {/* <a href='/' className="btn btn-success " onClick={handleCart}><i className="bi bi-cart me-1"></i>Add to Cart</a> */}
                    
                    </div>
                </div>
            </div>
        </div>
  )
}
