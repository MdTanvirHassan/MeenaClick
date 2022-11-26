import React from 'react';
import './Footer.css';
import logo from '../../image/logo.png';

export default function Footer(props) {
  return (
    <div className={`bg-${props.mode==='dark'?'secondary':'secondary'}`}>
        <div className="full-container mx-5">
  <footer className="py-5">
    <div className="row">
    <img src={logo} className="img-fluid  col-sm-12 collapse " alt="logo" />
      <div className="col-lg-3 col-md-6 mb-3">
        <h5 className='text-white fw-bold'>Customer Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}>MeenaClick Stores</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}>Frequently Asked Questions</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}>Terms and Conditions</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}>Privacy Policy</a></li>
          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <h5 className='text-white fw-bold'>MeenaClick</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}>About MeenaClick</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}>Shipping and Delivery</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}>Customer Care</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}>Careers</a></li>
        
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <h5 className='text-white fw-bold'>Contact Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}><i className=" bi bi-house me-1"></i>House: 44, Road: 16 (27 Old), Dhanmondi
Dhaka - 1209, Bangladesh</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}> <i className=" bi bi-phone me-1"></i> 09678666111</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}><i className=" bi bi-envelope-fill me-1"></i>care@meenaclick.com
</a></li>
          <li className="nav-item mb-2"><a href='/' className={`nav-link p-0 text-${props.mode==='dark'?'white':'white'}`}><i className=" bi bi-escape me-1"></i>blog.meenaclick.com
</a></li>
          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        
          <h5 className='text-white fw-bold mb-4'>Subscribe to our newsletter</h5>
          <ul className="nav flex-column">
            <li className='nav-link'>
            <a href="/" className='social mx-1'><i className=" bi bi-facebook text-white me-1 " width="24" height="24"></i></a>
            <a href="/" className='social mx-1'><i className=" bi bi-instagram text-white me-1 " width="24" height="24"></i></a>
            <a href="/" className='social mx-1'><i className=" bi bi-twitter text-white me-1 " width="24" height="24"></i></a>
            <a href="/" className='social mx-1'><i className=" bi bi-linkedin text-white text-hover me-1 " width="24" height="24"></i></a>
            </li>
            
          </ul>
          
      </div>
    </div>

    <div className={`d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-${props.mode==='dark'?'white':'white'}`}>
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href='/'><i className=" bi bi-facebook text-white me-1"></i></a></li>
        <li className="ms-3"><a className="link-dark" href='/'><i className=" bi bi-instagram text-white me-1"></i></a></li>
        <li className="ms-3"><a className="link-dark" href='/'><i className=" bi bi-twitter text-white me-1"></i></a></li>
        <li className="ms-3"><a className="link-dark" href='/'><i className=" bi bi-linkedin text-white me-1"></i></a></li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  )
}
