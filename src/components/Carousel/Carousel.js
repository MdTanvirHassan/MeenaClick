import React from 'react'
import slider from '../../image/s1.jpg';
import slider2 from '../../image/s2.jpg';
import slider3 from '../../image/s3.jpg';
import slider4 from '../../image/s4.jpg';
import './Carousel.css';

export default function Carousel(props) {
  return (
    <div>
        <div className="row my-1 mx-3">
            <div className="col-lg-3 ms-3">
            <div className={`list-group bg-${props.mode==='dark'?'secondary':'light'} overflow-scroll`}>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'danger':'danger'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'danger':'danger'} bi bi-bag-fill me-1`}></i>
                    Essentials </a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'danger':'danger'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'danger':'danger'} bi bi-box-fill me-1`}></i>Frozen Item</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'white':'success'} bi bi-alexa me-1`}></i>Accessories</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'white':'success'} bi bi-people-fill me-1`}></i>Baby Care</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'white':'success'} bi bi-columns-gap me-1`}></i>Bakery and Snacks</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'white':'success'} bi bi-amd me-1`}></i>Beauty and Hygiene</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'white':'success'} bi bi-archive-fill me-1`}></i>Beverages</a>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'white':'success'} bi bi-slack me-1`}></i>Fish</a>
                    {/* <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'white':'success'} bi bi-bag-fill me-1`}></i>Fresh Product</a> */}
                    
                    
                    </div>

            </div>
            <div className="col-lg-8">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={slider} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={slider4} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}