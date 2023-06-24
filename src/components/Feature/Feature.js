import React from "react";
import { Link } from "react-router-dom";
import img from "../../image/f1.jpg";
import img2 from "../../image/f2.jpg";
import img3 from "../../image/f3.jpg";
import img4 from "../../image/c1.jpg";
import img5 from "../../image/c2.jpg";
import img6 from "../../image/c3.jpg";
import o1 from "../../image/o1.jpg";
import o2 from "../../image/o2.jpg";
import o3 from "../../image/o3.jpg";
import o4 from "../../image/o4.jpg";
import d1 from "../../image/d1.jpg";
import d2 from "../../image/d2.jpg";
import d3 from "../../image/d3.jpg";
import d4 from "../../image/d4.jpg";
import d5 from "../../image/d5.jpg";
import d6 from "../../image/d6.jpg";
import k from "../../image/k.jpg";
import k2 from "../../image/k2.jpg";
import k3 from "../../image/k3.jpg";
import k4 from "../../image/k4.jpg";
import "./Feature.css";

const features = [
  { id: 1, name: "", img: img, url: "/brands" },
  { id: 2, name: "", img: img2, url: "/brands" },
  { id: 3, name: "", img: img3, url: "/brands" },
];
const core = [
  { id: 1, name: "", img: img4, url: "/brands" },
  { id: 2, name: "", img: img5, url: "/brands" },
  { id: 3, name: "", img: img6, url: "/brands" },
  { id: 4, name: "", img: img2, url: "/brands" },
  { id: 5, name: "", img: img3, url: "/brands" },
  { id: 6, name: "", img: img, url: "/brands" },
];
const order = [
  { id: 1, name: "", img: o1, url: "/brands" },
  { id: 2, name: "", img: o2, url: "/brands" },
  { id: 3, name: "", img: o3, url: "/brands" },
  { id: 4, name: "", img: o4, url: "/brands" },
];
const category = [
  { id: 1, name: "", img: k, url: "/brands" },
  { id: 2, name: "", img: k2, url: "/brands" },
  { id: 3, name: "", img: k3, url: "/brands" },
  { id: 4, name: "", img: k4, url: "/brands" },
];
const daily = [
  { id: 1, name: "", img: d1, url: "/brands" },
  { id: 2, name: "", img: d2, url: "/brands" },
  { id: 3, name: "", img: d3, url: "/brands" },
  { id: 4, name: "", img: d4, url: "/brands" },
  { id: 5, name: "", img: d5, url: "/brands" },
  { id: 6, name: "", img: d6, url: "/brands" },
];
export default function Feature(props) {
  return ( <div className="">
    <div className="mx-lg-4 mx-xxl-5 mx-xl-5 mx-sm-4 mx-xs-4 my-2">
      <Link
        to="/brands"
        className={`nav-link text-center  text-${
          props.mode === "dark" ? "white" : "dark"
        } mt-2`}>
        <h5 className={`text-${props.mode === "dark" ? "white" : "dark"} mt-5`}>
          Featured Brands
        </h5>
        <hr />
      </Link>

      <div className="row">
        {features.map((item, index) => {
          return (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
              <Link to={item.url} className="text-decoration-none">
                <div className="card">
                  <img src={item.img} className="card-img-top" alt={item.img} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* -------------------------------------------------core------------------------------------------------ */}
      <Link
        to="/brands"
        className={`nav-link text-center text-${
          props.mode === "dark" ? "white" : "dark"
        }`}>
        <h5 className="mt-5">Core Service</h5>
        <hr />
      </Link>

      <div className="row">
        {core.map((item, index) => {
          return (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-sm-12 col-md-6 mb-1">
              <Link to={item.url} className="text-decoration-none">
                <div className="card">
                  <img src={item.img} className="card-img-top" alt={item.img} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------how to order-------------------------- */}
      <Link
        to="/brands"
        className={`nav-link text-center text-${
          props.mode === "dark" ? "white" : "dark"
        }`}>
        <h5 className="mt-5">How to Order</h5>
        <hr />
      </Link>

      <div className="row">
        {order.map((item, index) => {
          return (
            <div key={item.id} className="col-lg-3 col-sm-12 col-md-6 mb-1">
              <Link to={item.url} className="text-decoration-none">
                <div className="card">
                  <img src={item.img} className="card-img-top" alt={item.img} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* -------------------------category------------------------ */}
      <Link
        to="/brands"
        className={`nav-link text-center text-${
          props.mode === "dark" ? "white" : "dark"
        }`}>
        <h5 className="mt-5">Feature Categories</h5>
        <hr />
      </Link>

      <div className="row">
        {category.map((item, index) => {
          return (
            <div key={item.id} className="col-lg-3 col-sm-12 col-md-6 mb-1">
              <Link to={item.url} className="text-decoration-none">
                <div className="card">
                  <img src={item.img} className="card-img-top" alt={item.img} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* -----------------------------------daily-------------------------------- */}
      <Link
        href="/brands"
        className={`nav-link text-center text-${
          props.mode === "dark" ? "white" : "dark"
        }`}>
        <h5 className="mt-5">Daily Essential</h5>
        <hr />
      </Link>

      <div className="row">
        {daily.map((item, index) => {
          return (
            <div key={item.id} className="col-lg-2 col-sm-12 col-md-6 mb-1">
              <Link to={item.url} className="text-decoration-none">
                <div className="card">
                  <img src={item.img} className="card-img-top" alt={item.img} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
