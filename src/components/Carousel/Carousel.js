import React from 'react'
import { Link } from 'react-router-dom';
import slider from '../../image/s1.jpg';
import slider2 from '../../image/s2.jpg';
import slider3 from '../../image/s3.jpg';
import slider4 from '../../image/s4.jpg';
import './Carousel.css';

export default function Carousel(props) {
  return (
    <div className=' mx-lg-4 mx-xl-5 mx-xxl-5 mx-sm-4 mx-xs-4 my-2'>
        <div className=" ">
            <div className="   ">
                {/* //!Slider----start----- */}

                <div className="row flex-row-reverse align-items-center g-5 ">
                <div className=" col-sm-12 col-lg-9 col-md-12 col-xl-9 col-xxl-9 ">

                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                        <img src={slider} className="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                        <img src={slider2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                        <img src={slider3} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item " data-bs-interval="3000">
                        <img src={slider4} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
      </div>
                        {/* //!--Slider-End------ */}

      {/* //todo List-item-start----- */}
      <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 col-xl-3 col-xxl-3 ">
        <div className="mx-4">
      <div className={`list bg-${props.mode==='dark'?'secondary':'light'} `}>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'} 
                    text-${props.mode==='dark'?'danger':'danger'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'danger':'danger'} bi bi-bag-fill me-1`}></i>
                    Essentials </Link>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'}
                     text-${props.mode==='dark'?'danger':'danger'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'danger':'danger'} bi bi-box-fill me-1`}></i>
                        Frozen Item</Link>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'}
                     text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-alexa me-1`}></i>
                        Accessories</Link>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'}
                     text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-people-fill me-1`}>
                            </i>Baby Care</Link>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'}
                     text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-columns-gap me-1`}></i>
                        Bakery and Snacks</Link>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'}
                     text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-amd me-1`}></i>
                        Beauty and Hygiene</Link>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'}
                     text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-archive-fill me-1`}></i>
                        Beverages</Link>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'}
                     text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-slack me-1`}></i>
                        Fish</Link>
                    <Link to='/Combo' className={`nav-link link-list bg-${props.mode==='dark'?'secondary':'light'}
                     text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-bag me-1`}></i>
                        Fresh Product</Link>
                        <Link to='/Combo' className={`nav-link link-list  bg-${props.mode==='dark'?'secondary':'light'}
                         text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-house me-1`}></i>
                        Housing & cleaning</Link>
                    
                    
                    </div>
                </div>     
            </div>
            {/*//todo List-item----end---------  */}
            </div>
        </div>           
        </div>
    </div>
  )
}