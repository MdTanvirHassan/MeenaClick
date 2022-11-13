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
import './Feature.css';

export default function Feature() {
  return (
    <div className='mx-4 my-2'>
        <a href="/" className='nav-link text-center'><h5 className="">Featured Brands</h5></a><hr />

        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
     
             </div>

            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img2} className="card-img-top" alt="..."/>
     
             </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img3} className="card-img-top" alt="..."/>
     
             </div>
            </div>
        </div>

{/* -------------------------------------------------core------------------------------------------------ */}
        <a href="/" className='nav-link text-center mt-3'><h5 className="">Core Service</h5></a><hr />

        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img4} className="card-img-top" alt="..."/>
     
             </div>

            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img5} className="card-img-top" alt="..."/>
     
             </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img6} className="card-img-top" alt="..."/>
     
             </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img2} className="card-img-top" alt="..."/>
     
             </div>

            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img3} className="card-img-top" alt="..."/>
     
             </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
     
             </div>
            </div>
        </div>


        {/* ------------------------------------how to order-------------------------- */}
        <a href="/" className='nav-link text-center mt-3'><h5 className="">How to Order</h5></a><hr />

            <div className="row">
                <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o1} className="card-img-top" alt="..."/>

                </div>

                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o2} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o3} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o4} className="card-img-top" alt="..."/>

                </div>
                </div>
            </div>

            {/* -------------------------category------------------------ */}
            <a href="/" className='nav-link text-center mt-3'><h5 className="">Feature Categories</h5></a><hr />

            <div className="row">
                <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o1} className="card-img-top" alt="..."/>

                </div>

                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o2} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o3} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o4} className="card-img-top" alt="..."/>

                </div>
                </div>
            </div>

            {/* -----------------------------------daily-------------------------------- */}
            <a href="/" className='nav-link text-center mt-3'><h5 className="">Daily Essential</h5></a><hr />

            <div className="row">
                <div className="col-lg-2 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o1} className="card-img-top" alt="..."/>

                </div>

                </div>
                <div className="col-lg-2 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o2} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o3} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o4} className="card-img-top" alt="..."/>

                </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o3} className="card-img-top" alt="..."/>

                </div>
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6">
                <div className="card">
                    <img src={o4} className="card-img-top" alt="..."/>

                </div>
                </div>
            </div>


    </div>
  )
}
