import React from 'react';
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
    <div className='mx-4 my-2'>
        <a href="/" className={`nav-link text-center  text-${props.mode==='dark'?'white':'dark'} mt-2`}><h5 className={`text-${props.mode==='dark'?'white':'dark'} mt-5`}>Featured Brands</h5><hr /></a>

        <div className="row mx-4">
            <div className="col-lg-4 col-sm-12 col-md-6  mb-1">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
     
             </div>

            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-1">
            <div className="card">
                <img src={img2} className="card-img-top" alt="..."/>
     
             </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-1">
            <div className="card">
                <img src={img3} className="card-img-top" alt="..."/>
     
             </div>
            </div>
        </div>

{/* -------------------------------------------------core------------------------------------------------ */}
        <a href="/" className={`nav-link text-center text-${props.mode==='dark'?'white':'dark'}`}><h5 className="mt-5">Core Service</h5><hr /></a>

        <div className="row mx-4">
            <div className="col-lg-4 col-sm-12 col-md-6 mb-2">
            <div className="card">
                <img src={img4} className="card-img-top" alt="..."/>
     
             </div>

            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-1">
            <div className="card">
                <img src={img5} className="card-img-top" alt="..."/>
     
             </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-1">
            <div className="card">
                <img src={img6} className="card-img-top" alt="..."/>
     
             </div>
            </div>
        </div>

        <div className="row mt-3 mx-4">
            <div className="col-lg-4 col-sm-12 col-md-6 mb-1">
            <div className="card">
                <img src={img2} className="card-img-top" alt="..."/>
     
             </div>

            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-1">
            <div className="card">
                <img src={img3} className="card-img-top" alt="..."/>
     
             </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-1">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
     
             </div>
            </div>
        </div>


        {/* ------------------------------------how to order-------------------------- */}
        <a href="/" className={`nav-link text-center text-${props.mode==='dark'?'white':'dark'}`}><h5 className="mt-5">How to Order</h5><hr /></a>

            <div className="row mx-4">
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={o1} className="card-img-top" alt="..."/>

                </div>

                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={o2} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={o3} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={o4} className="card-img-top" alt="..."/>

                </div>
                </div>
            </div>

            {/* -------------------------category------------------------ */}
            <a href="/" className={`nav-link text-center text-${props.mode==='dark'?'white':'dark'}`}><h5 className="mt-5">Feature Categories</h5><hr /></a>

            <div className="row mx-4">
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={k} className="card-img-top" alt="..."/>

                </div>

                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={k2} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={k3} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={k4} className="card-img-top" alt="..."/>

                </div>
                </div>
            </div>

            {/* -----------------------------------daily-------------------------------- */}
            <a href="/" className={`nav-link text-center text-${props.mode==='dark'?'white':'dark'}`}><h5 className="mt-5">Daily Essential</h5><hr /></a>

            <div className="row mx-4">
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={d1} className="card-img-top" alt="..."/>

                </div>

                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={d2} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={d3} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={d4} className="card-img-top" alt="..."/>

                </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={d5} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                <div className="card">
                    <img src={d6} className="card-img-top" alt="..."/>

                </div>
                </div>
            </div>


    </div>
  )
}
