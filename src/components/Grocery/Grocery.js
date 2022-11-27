import React, { useState } from 'react';
import img from '../../image/p1.jpg';
import './Grocery.css';

export default function Grocery(props) {
    const [cart, setCart] = useState(0)
  return (
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
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">tk. {props.price}</p>
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
                </div>
                </div>
  )
}
