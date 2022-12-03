import React from 'react'
import slider from '../../image/s1.jpg';
import slider2 from '../../image/s2.jpg';
import slider3 from '../../image/s3.jpg';
import slider4 from '../../image/s4.jpg';
import './Carousel.css';

export default function Carousel(props) {
  return (
    <div className=' mx-lg-4 mx-xl-4 mx-xxl-4 mx-sm-4 mx-xs-4 my-1'>
        <div className=" ">
            <div className="   ">

                <div className="row flex-row-reverse align-items-center g-4 ">
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
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                        <img src={slider3} className="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                        </div>
                        <div className="carousel-item " data-bs-interval="3000">
                        <img src={slider4} className="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
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

      
      <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 col-xl-3 col-xxl-3 ">
      <div className={`list-group bg-${props.mode==='dark'?'secondary':'light'} `}>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'danger':'danger'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'danger':'danger'} bi bi-bag-fill me-1`}></i>
                    Essentials </a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'danger':'danger'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'danger':'danger'} bi bi-box-fill me-1`}></i>
                        Frozen Item</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-alexa me-1`}></i>
                        Accessories</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-people-fill me-1`}>
                            </i>Baby Care</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-columns-gap me-1`}></i>
                        Bakery and Snacks</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-amd me-1`}></i>
                        Beauty and Hygiene</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-archive-fill me-1`}></i>
                        Beverages</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-slack me-1`}></i>
                        Fish</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-bag me-1`}></i>
                        Fresh Product</a>
                        <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} >
                        <i className={`text-${props.mode==='dark'?'white':'success'} bi bi-house me-1`}></i>
                        Housing & cleaning</a>
                    
                    
                    </div>
        
      </div>

    </div>
  </div>           
        </div>
    </div>
  )
}