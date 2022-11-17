import React from 'react';
import './Footer.css';
import logo from '../../image/logo.png';

export default function Footer(props) {
  return (
    <div className={`bg-${props.mode=='dark'?'secondary':'light'}`}>
        <div className="container">
  <footer className="py-5">
    <div className="row">
    <img src={logo} className="img-fluid  col-sm-12 collapse " alt="logo" />
      <div className="col-lg-3 col-md-6 mb-3">
        <h5>Customer Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}>MeenaClick Stores</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}>Frequently Asked Questions</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}>Terms and Conditions</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}>Privacy Policy</a></li>
          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <h5>MeenaClick</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}>About MeenaClick</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}>Shipping and Delivery</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}>Customer Care</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}>Careers</a></li>
        
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <h5>Contact Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}><i className=" bi bi-house me-1"></i>House: 44, Road: 16 (27 Old), Dhanmondi
Dhaka - 1209, Bangladesh</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}> <i className=" bi bi-phone me-1"></i> 09678666111</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}><i className=" bi bi-envelope-fill me-1"></i>care@meenaclick.com
</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'muted'}`}><i className=" bi bi-escape me-1"></i>blog.meenaclick.com
</a></li>
          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        
          <h5>Subscribe to our newsletter</h5>
          <ul className="nav flex-column">
            <li className='nav-link'>
            <a href="/" className='social mx-1'><i className=" bi bi-facebook me-1 " width="24" height="24"></i></a>
            <a href="/" className='social mx-1'><i className=" bi bi-instagram me-1 " width="24" height="24"></i></a>
            <a href="/" className='social mx-1'><i className=" bi bi-twitter me-1 " width="24" height="24"></i></a>
            <a href="/" className='social mx-1'><i className=" bi bi-linkedin me-1 " width="24" height="24"></i></a>
            </li>
            
          </ul>
          
      </div>
    </div>

    <div className={`d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-${props.mode==='dark'?'white':'muted'}`}>
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href='/'><i className=" bi bi-facebook me-1"></i></a></li>
        <li className="ms-3"><a className="link-dark" href='/'><i className=" bi bi-instagram me-1"></i></a></li>
        <li className="ms-3"><a className="link-dark" href='/'><i className=" bi bi-twitter me-1"></i></a></li>
        <li className="ms-3"><a className="link-dark" href='/'><i className=" bi bi-linkedin me-1"></i></a></li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  )
}
