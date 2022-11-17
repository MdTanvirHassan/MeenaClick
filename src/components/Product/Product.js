import React from 'react'
import img from '../../image/p1.jpg';
import img2 from '../../image/p2.jpg';
import img3 from '../../image/p6.jpg';
import img4 from '../../image/p3.jpg';
import img5 from '../../image/p4.jpg';
import img6 from '../../image/p5.jpg';
import dd from '../../image/dd.jpg';
import dd2 from '../../image/dd2.jpg';
import dd3 from '../../image/dd3.jpg';
import dd4 from '../../image/dd4.jpg';
import dd5 from '../../image/dd5.jpg';
import dd6 from '../../image/dd6.jpg';

export default function Product(props) {
  return (
    <div>
        <div className="mx-3 my-5 ">
            <div className={`row mx-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>
                <div className="col-9">
                        <h5 className={`text-${props.mode==='dark'?'warning':'body'}`}>Cooking Oil & Ghee</h5>
                </div>
                <div className="col-3">
                    <a href="/" className={`nav-link text-end text-${props.mode==='dark'?'warning':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>More <i className=" bi bi-house me-1"></i></a>
                </div>
            </div><hr />
            <div className={`row mx-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'}`}>
                <div className={`col-lg-2 col-sm-12 col-md-6 mb-1 mb-1 `}>
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={img} className="card-img-top" alt="..."/><hr />
                    <div className={`card-body text-center`}>
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={img4} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Span Virgin Olive Oil 1ltr
</h5>
                        <p className="card-text">tk. 660</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={img3} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={img2} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Aarong Ghee 1Ltr</h5>
                        <p className="card-text">tk. 560</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={img5} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={img6} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>



        {/* -------dairy------------------------- */}
        <div className="mx-3 my-5 ">
            <div className={`row mx-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>
                <div className="col-9">
                        <h5 className={`text-${props.mode==='dark'?'warning':'body'}`}>Dairy</h5>
                </div>
                <div className="col-3">
                    <a href="/" className={`nav-link text-end text-${props.mode==='dark'?'warning':'body'} bg-${props.mode==='dark'?'secondary':'body'}`}>More <i className=" bi bi-house me-1"></i></a>
                </div>
            </div><hr />
            <div className={`row mx-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'}`}>
                <div className={`col-lg-2 col-sm-12 col-md-6 mb-1 mb-1 `}>
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd} className="card-img-top" alt="..."/><hr />
                    <div className={`card-body text-center`}>
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd2} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd3} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd4} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd5} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-12 col-md-6 mb-1">
                 <div className={`card p-2 bg-${props.mode==='dark'?'secondary':'body'}`} style={{width: "200px"}} >
                    <img src={dd6} className="card-img-top" alt="..."/><hr />
                    <div className="card-body text-center">
                        <h5 className="card-title">Radhuni MAster Oil 1Ltr</h5>
                        <p className="card-text">tk. 360</p>
                        <a href='/' className="btn btn-success "><i className="bi bi-cart me-1"></i>Add to Cart</a>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>


    </div>
  )
}
