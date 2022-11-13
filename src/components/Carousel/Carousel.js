import React from 'react'
import slider from '../../image/s1.jpg';
import slider2 from '../../image/s2.jpg';
import slider3 from '../../image/s3.jpg';
import slider4 from '../../image/s4.jpg';

export default function Carousel(props) {
  return (
    <div>
        <div className="row my-2">
            <div className="col-lg-3 ms-3">
            <div className={`list-group bg-${props.mode==='dark'?'secondary':'body'}`}>
                    <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'body'}`} aria-current="true">
                        The current link item
                    </a>
                    <a href='/' className="list-group-item list-group-item-action">A second link item</a>
                    <a href='/' className="list-group-item list-group-item-action">A third link item</a>
                    <a href='/' className="list-group-item list-group-item-action">A fourth link item</a>
                    <a href='/' className="list-group-item list-group-item-action">A second link item</a>
                    <a href='/' className="list-group-item list-group-item-action">A third link item</a>
                    <a href='/' className="list-group-item list-group-item-action">A fourth link item</a>
                    <a href='/' className="list-group-item list-group-item-action">A second link item</a>
                    <a href='/' className="list-group-item list-group-item-action">A third link item</a>
                    
                    
                    </div>

            </div>
            <div className="col-lg-8">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}
