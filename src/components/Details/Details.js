import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { Link } from "react-router-dom";
// import Grocery from '../Grocery/Grocery'
import "./Details.css";
import img from "../../image/p1.jpg";
// import Footer from "../Footer/Footer";

export default function Details(props) {
  const [cart, setCart] = useState(0);
    //! preloader2
    const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
  return (
    <>
    {
        preLoading?
        <div className='d-flex justify-content-center text-center'>
            <HashLoader 
            color="#36d7b7" 
            // color={color}
            loading={preLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
          :
      <div>
        <div className=" my-2 mx-lg-5 mx-md-5 mx-xl-5 mx-xxl-5 my-1">
          <div
            className={`container-fluid card bg-${
              props.mode === "dark" ? "secondary" : "body"
            }
           text-${props.mode === "dark" ? "white" : "body"}`}>
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb px-5">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item nav-link">
                  <Link to="/Products" className=" d-flex nav-link">
                    products
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  productDetails
                </li>
              </ol>
            </nav>
          </div>
          <div className={`details my-4 row my-1`}>
            {/* //*image */}
            <div
              className={`card col-lg-3 col-md-3 col-xl-3 col-xxl-3 col-sm-12 col-xs-12 mx-1`}>
              <img src={img} alt="" />
            </div>
            {/* //*title,price,cart */}
            <div
              className={`card col-lg-3 col-md-3 col-xl-3 col-xxl-3 col-sm-12 col-xs-12 mx-1 
            d-flex flex-grow-1 mb-1 bg-${
              props.mode === "dark" ? "secondary" : "body"
            } 
            text-${props.mode === "dark" ? "white" : "body"}`}>
              <h5>Radhuni Mustard Oil 1ltr</h5>
              <span>
                <small>
                  <b>Brand : </b>
                  <Link to="/" className="text-decoration-none text-green me-2">
                    {" "}
                    Radhuni{" "}
                  </Link>
                  <Link to="/" className="text-decoration-none text-green">
                    Meena Bazar
                  </Link>
                </small>
              </span>
              <hr />
              <h5 className="text-muted "><del>tk 379.00</del></h5>
              <h4 className="text-green">tk 360.00</h4>
              <small>
                <b>Quantity : </b>
              </small>
              <div className="d-flex fw-bold ">
                <span className="btn " type="button">
                  <span className="text- d-flex">
                    <span
                      className=" "
                      disabled={cart >= 0}
                      onClick={() => setCart(cart - 1)}>
                      <button
                        className="fw-bold px-3 card d-flex p-2"
                        onClick={props.notify}>
                        -
                      </button>
                    </span>

                    <span className=" px-4 d-flex p-2 card">
                      <span>{cart}</span>
                    </span>

                    <span
                      className="  fw-bold "
                      onClick={() => setCart(cart + 1)}>
                      <button
                        className="px-3 fw-bold card p-2"
                        onClick={props.notify}>
                        +
                      </button>
                    </span>
                  </span>
                </span>
                <br />
              </div>
              <button className="btn addBtn2 col-4 mt-2" onClick={props.notify}>
                <span className={``} onClick={() => setCart(cart + 1)}>
                <i className="bi bi-cart mx-1"></i>
                Add to cart
                </span>
              </button>
            </div>
            <div
              className={` col-lg-3 col-md-3 col-xl-3 col-xxl-3 col-sm-12 col-xs-12 mx-1 `}>
              <div
                className={`card homeDelivery d-flex flex-row bg-${
                  props.mode === "dark" ? "secondary" : "body"
                } text-${props.mode === "dark" ? "white" : "body"}`}>
                <i className="bi bi-bus-front-fill  fs-2 p-2"></i>
                <h6 className="p-2 flex-grow-1">
                  Home Delivery <br />
                  <small className="text-muted">24 Hours</small>
                </h6>
                <span className="p-2">
                  <h6>
                    <small>tk40</small>
                  </h6>
                </span>
              </div>
              <div className="card cash my-2">
                <div className="card  d-flex flex-row p-">
                  <i className="bi bi-currency-exchange p-2 fs-2"></i>
                  <h6 className="p-2 flex-grow-1">
                    Cash on Delivery <br />
                    <small className="text-muted">Available</small>
                  </h6>
                  <span className="p-2">
                    <h6>
                      <small></small>
                    </h6>
                  </span>
                </div>
              </div>
              <div className="card sku  p-3 my-2">
                <h6 className="text-center">SKU: GCSCOLOMU0003</h6>
              </div>
              <div className="card my-2">
                <div className="card  d-flex flex-row p-">
                  <i className="bi bi-house-fill p-2 fs-2"></i>
                  <h6 className="p-2 flex-grow-1">
                    Sold by <br />
                    <small className="text-muted">
                      <Link to="/details" className="nav-link text-green">
                        Meena Bazar
                      </Link>
                    </small>
                  </h6>
                  <span className="p-2">
                    <h6>
                      <small></small>
                    </h6>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* //* Product details-------------- */}
          <div className="row my-5">
            <div
              className={`col-9 card p-2 bg-${
                props.mode === "dark" ? "secondary" : "body"
              } text-${props.mode === "dark" ? "white" : "body"}`}>
              <h5 className="p-1 border-bottom">Product Details</h5>
              <p className="p-4 border-bottom">
                <small>
                  Radhuni Pure Mustard Oil is made from hand-picked mustard
                  seeds, guaranteeing the best quality mustard oil.Radhuni Pure
                  Mustard Oil contains a large amount of mono-unsaturated fatty
                  acid which restricts the build-up of the harmful cholesterol
                  in blood{" "}
                </small>
              </p>

              <small className="p-4">:</small>
            </div>
          </div>

          {/* <Grocery mode={props.mode} notify={props.notify} img={props.img} category="Grocery" offerPrice="tk. 190.00" title="Span Virgin Olive Oil 1ltr" price="145.00"/> */}
        </div>
      </div>
     
             } </>
  );
}
