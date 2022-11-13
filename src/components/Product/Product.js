import React from 'react'
import img from '../../image/p1.jpg';
import img2 from '../../image/p2.jpg';
import img3 from '../../image/p6.jpg';
import img4 from '../../image/p3.jpg';
import img5 from '../../image/p4.jpg';
import img6 from '../../image/p5.jpg';

export default function Product() {
  return (
    <div>
        <div className="mx-3 my-3">
            <div className="row mx-3 my-1">
                <div className="col-9">
                        <h5>Cooking Oil & Ghee</h5>
                </div>
                <div className="col-3">
                    <a href="/" className='nav-link text-end'>More-></a>
                </div>
            </div><hr />
            <div className="row mx-3 my-1">
                <div className="col-lg-2 col-md-4 col-sm-12">
                 <div className="card p-2" style={{width: "200px"}}>
                    <img src={img} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success ">Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                 <div className="card p-2" style={{width: "200px"}}>
                    <img src={img2} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success ">Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                 <div className="card p-2" style={{width: "200px"}}>
                    <img src={img3} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success ">Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                 <div className="card p-2" style={{width: "200px"}}>
                    <img src={img4} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success ">Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                 <div className="card p-2" style={{width: "200px"}}>
                    <img src={img5} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success ">Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-12">
                 <div className="card p-2" style={{width: "200px"}}>
                    <img src={img6} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success ">Add to Cart</a>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>



    </div>
  )
}
