import React from "react";
// import Footer from "../Footer/Footer";
import Product from "../Product/Product";

export default function Combo(props) {
  return (
    <>
    <div className={`mx-4 mt-2 bg-${props.mode==='dark'?'':''}`}>
      <div>
        <h4 className={`text-center text-success`}>Products</h4>
      </div>
      <hr />
      <div className="">
        <div className={``}>
          <Product mode={props.mode} notify={props.notify}></Product>
        </div>
      </div>
      {/* pagination.append */}
      <nav aria-label={`Page navigation example bg-${props.mode==='dark'?'dark':'body'}`}>
        <ul className={`pagination justify-content-end bg-${props.mode==='dark'?'':''}`}>
          <li className={`page-item disabled bg-${props.mode==='dark'?'dark':'body'}`}>
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link bg-${props.mode==='dark'?'light':'body'}`} href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* pagination-end */}

      {/* <Footer /> */}
    </div>
    </>
  );
}
