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
      {/* pagination.append */}
      <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">
    <li className="page-item disabled">
      <a className="page-link" href="/">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="/">1</a></li>
    <li className="page-item"><a className="page-link" href='/'>2</a></li>
    <li className="page-item"><a className="page-link" href='/'>3</a></li>
    <li className="page-item">
      <a className="page-link" href='/'>Next</a>
    </li>
  </ul>
</nav>

<Footer/>
    </div>
  );
}
