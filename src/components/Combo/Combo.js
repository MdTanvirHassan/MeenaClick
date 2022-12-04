import React from "react";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";

export default function Combo() {
  return (
    <div>
      <div><h5 className="text-center text-success">Products</h5></div>
      <hr />
      <div className="">
        <div className="">
          <Product></Product>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
