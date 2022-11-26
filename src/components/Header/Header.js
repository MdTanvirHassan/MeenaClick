import React from 'react';
import logo from '../../image/logo.png';
import logo2 from '../../image/App-Download-Banner.jpg';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <div className={`sticky-top bg-${props.mode==='dark'?'dark':'secondary'}`}>
         <header className="p-2 mb-0  ">
    <div className="full-container">
        
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mx-3 me-5">
      <div className="col-lg-0 col-m-0 col-sm-12 ">
            <img src={logo2} className="img-fluid  col-sm-12 collapse " alt="logo" />
        </div>
      <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none ms-5">
          <img src={logo} alt='...' className="bi me-2"  width="100" height="60"  aria-label="Bootstrap"/>
        </Link>
        <form className="col-12 col-lg-4 mb-3 mb-lg-0 me-lg-5 text-center ms-5 m"  role="search">
          <input type="search" className="form-control border-success text-center mx-5" placeholder="Search Here..." aria-label="Search"/>
          <button className='button' type="submit"  aria-hidden="true"><i className='bi bi-search text-success'></i></button>
        </form>

        <ul className="nav col-12 col-lg-4 col-sm-1 me-lg-2 me-sm-0 mb-2  mb-md-0 ms- d-flex justify-content-end">
            {/* <li><button className='col-sm-0 btn btn-success mt-1 p-2 px-3' type="submit"><i className="bi bi-search"></i></button></li> */}

          <li><Link to='/' className="nav-link px-2 link-secondary"><button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'} bg-${props.mode==='dark'?'secondary':'body'} b`}><i className="bi bi-geo-alt me-1"></i>Area</button></Link></li>
{/* ---------------------- */}
          <li><a href='/' className="nav-link px-2 link-secondary">
  

        <Link to='/Register'><button className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'} bg-${props.mode==='dark'?'secondary':'body'} b`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <i className="bi bi-person-circle me-1"></i> Log-in/Sign-Up
        </button></Link> </a></li>

        

          <li><Link to='/Cart' className="nav-link px-2 link-dark"><button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'light'} bg-${props.mode==='dark'?'success':'success'} b`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={props.handleAddProduct}><i className="bi bi-cart me-1"></i>Cart <span className="badge text-bg-danger rounded-pill align-text-bottom"> 7</span></button></Link></li>
          {/* <li><a href='/' className="nav-link px-2 link-dark">Products</a></li> */}
        </ul>
       

        <div className={`nav-item nav-link form-check mx-lg-2  form-switch text-${props.mode==='dark'?'light':'secondary'}`}>
                            {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
                            <label className="form-check-label text-warning"  onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault"><i className={` w-10 bi bi-${props.mode==='dark'?'sun-fill':'moon-fill'}`}></i></label>
                        </div>

        <div className="dropdown text-end">
          <a href='/' className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href='/'>New project...</a></li>
            <li><a className="dropdown-item" href='/'>Settings</a></li>
            <li><a className="dropdown-item" href='/'>Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href='/'>Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
    </header>


    {/* --------------------------------------------nav2-------------------------------------------- */}
    


  

    <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode==='dark'?'secondary':'dark'} p-1`} aria-label="Tenth navbar example">
    <div className="container-fluid p-0">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-end container" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item justify-content-md-start d-flex align-items-center">
            <Link to='/' className="nav-link active p-1  bn" type='button' aria-current="page" href='/'><i className='bi bi-cash-coin text-white'></i> Offer <span className="badge text-bg-danger rounded-pill align-text-bottom"> 7</span></Link>
          </li>
          <li className="nav-item mx-5 d-flex align-items-center">
            <Link to='/' className="nav-link p-1  active bn" href='/'><i className='bi bi-credit-card text-white me-1'></i>Coupon</Link>
          </li>
          
          <li className="nav-item dropdown d-flex align-items-center ">
            <a className="nav-link dropdown-toggle p-1 text-danger bn" href='/' data-bs-toggle="dropdown" aria-expanded="false"><i className='bi bi-currency-exchange text-white me-1'></i>Order Details</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href='/'>Action</a></li>
              <li><a className="dropdown-item" href='/'>Another action</a></li>
              <li><a className="dropdown-item" href='/'>Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}
