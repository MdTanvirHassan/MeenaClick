import React from "react";
import "./Footer.css";
import logo from "../../image/logo.png";
import playStore from "../../image/playstore.png";
import store from "../../image/store.jpg";

export default function Footer(props) {
  return (
    <div className={`bg-${props.mode === "dark" ? "footer" : "footer"} `}> 
      <div className="full-container mx-lg-5 mx-xl-5 mx-xxl-5">
        <footer className="py-0">
          <div className="row pt-3 pb-2">
            <img
              src={logo}
              className="img-fluid  col-sm-12 collapse "
              alt="logo"
            />
            <div className="col-xl-3 col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-1 ">
              <h5 className="text-white fw-bold">Customer Services</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    <small>MeenaClick Stores</small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    <small>Frequently Asked Questions</small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    <small>Terms and Conditions</small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    <small>Privacy Policy</small>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-1">
              <h5 className="text-white fw-bold">MeenaClick</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    <small>About MeenaClick</small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    <small>Shipping and Delivery</small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    <small>Customer Care</small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    <small>Careers</small>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-1">
              <h5 className="text-white fw-bold">Contact Us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    {" "}
                    <small>
                      <i className=" bi bi-house me-1"></i>House: 44, Road: 16
                      (27 Old), Dhanmondi Dhaka - 1209, Bangladesh
                    </small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    {" "}
                    <small>
                      <i className=" bi bi-phone me-1"></i> 09678666111
                    </small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    {" "}
                    <small>
                      <i className=" bi bi-envelope-fill me-1"></i>
                      care@meenaclick.com
                    </small>
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a
                    href="/"
                    className={`nav-link p-0 text-${
                      props.mode === "dark" ? "white" : "white"
                    }`}>
                    {" "}
                    <small>
                      <i className=" bi bi-escape me-1"></i>blog.meenaclick.com
                    </small>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-xxl-3 col-xl-3 col-lg-3 col-md-6 text-center justify-content-end">
              <h6 className="text-white fw-bold ">
                <small>Subscribe to our newsletter</small>
              </h6>
              <ul className="nav flex-column text-center">
                <li className="nav-link ">
                  <a href="/" className="social text-center mx-1">
                    <i className=" bi bi-facebook  me-1"></i>
                  </a>
                  <a href="/" className="social text-center mx-1">
                    <i
                      className=" bi bi-instagram text-danger me-1 "
                      width="24"
                      height="24"></i>
                  </a>
                  <a href="/" className="social text-center mx-1">
                    <i
                      className=" bi bi-twitter  me-1 "
                      width="24"
                      height="24"></i>
                  </a>
                  <a href="/" className="social text-center mx-1">
                    <i
                      className=" bi bi-linkedin  text-hover me-1 "
                      width="24"
                      height="24"></i>
                  </a>
                </li>
              </ul>

              <span className="text-white">
                <small> Download our Mobile Apps</small>
                <br />
                <a href="/" className="text-center">
                  <img
                    src={playStore}
                    width="110px"
                    alt=""
                    className="text-center me-2"
                  />
                  <img
                    src={store}
                    width="105px"
                    alt=""
                    className=" text-center"
                  />
                </a>
              </span>
            </div>
          </div>

          <div
            className={`d-flex flex-column flex-sm-row justify-content-between py-2 my- border-top text-${
              props.mode === "dark" ? "white" : "white"
            }`}>
            <p>
              <small>
                &copy; 2017-2022 Meena Click Limited All Rights Reserved.
              </small>
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <i className=" bi bi-facebook text-white me-1"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <i className=" bi bi-instagram text-white me-1"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <i className=" bi bi-twitter text-white me-1"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <i className=" bi bi-linkedin text-white me-1"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
