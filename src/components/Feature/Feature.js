import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/f1.jpg';
import img2 from '../../image/f2.jpg';
import img3 from '../../image/f3.jpg';
import img4 from '../../image/c1.jpg';
import img5 from '../../image/c2.jpg';
import img6 from '../../image/c3.jpg';
import o1 from '../../image/o1.jpg';
import o2 from '../../image/o2.jpg';
import o3 from '../../image/o3.jpg';
import o4 from '../../image/o4.jpg';
import d1 from '../../image/d1.jpg';
import d2 from '../../image/d2.jpg';
import d3 from '../../image/d3.jpg';
import d4 from '../../image/d4.jpg';
import d5 from '../../image/d5.jpg';
import d6 from '../../image/d6.jpg';
import k from '../../image/k.jpg';
import k2 from '../../image/k2.jpg';
import k3 from '../../image/k3.jpg';
import k4 from '../../image/k4.jpg';
import './Feature.css';

export default function Feature(props) {
  return (
    <div className='mx-lg-4 mx-xxl-5 mx-xl-5 mx-sm-4 mx-xs-4 my-2'>
        <Link to="/brands" className={`nav-link text-center  text-${props.mode==='dark'?'white':'dark'} mt-2`}>
            <h5 className={`text-${props.mode==='dark'?'white':'dark'} mt-5`}>Featured Brands</h5>
            <hr />
        </Link>

        <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6  mb-1">
                <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
            <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img2} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
            <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img3} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
        </div>

{/* -------------------------------------------------core------------------------------------------------ */}
        <a href="/" className={`nav-link text-center text-${props.mode==='dark'?'white':'dark'}`}><h5 className="mt-5">Core Service</h5><hr /></a>

        <div className="row mx-">
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-2">
            <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img4} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
            <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img5} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
            <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img6} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
        </div>

        <div className="row mt-3 mx-">
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
            <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img2} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
            <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img3} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
            <Link to='/brands' className='text-decoration-none'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
     
             </div>
             </Link>
            </div>
        </div>


        {/* ------------------------------------how to order-------------------------- */}
        <a href="/" className={`nav-link text-center text-${props.mode==='dark'?'white':'dark'}`}><h5 className="mt-5">How to Order</h5><hr /></a>

            <div className="row mx-">
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={o1} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={o2} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={o3} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={o4} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
            </div>

            {/* -------------------------category------------------------ */}
            <a href="/" className={`nav-link text-center text-${props.mode==='dark'?'white':'dark'}`}><h5 className="mt-5">Feature Categories</h5><hr /></a>

            <div className="row mx-">
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={k} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={k2} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={k3} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={k4} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
            </div>

            {/* -----------------------------------daily-------------------------------- */}
            <a href="/" className={`nav-link text-center text-${props.mode==='dark'?'white':'dark'}`}><h5 className="mt-5">Daily Essential</h5><hr /></a>

            <div className="row mx-">
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={d1} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={d2} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={d3} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={d4} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={d5} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <Link to='/brands' className='text-decoration-none'>
                <div className="card">
                    <img src={d6} className="card-img-top" alt="..."/>

                </div>
                </Link>
                </div>
            </div>


    </div>
  )
}
