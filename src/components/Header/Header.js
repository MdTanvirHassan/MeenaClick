import React from 'react';
import logo from '../../image/logo.png';
import logo2 from '../../image/App-Download-Banner.jpg';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    //sticky wrapper
    <div className={`sticky-top bg-${props.mode==='dark'?'dark':'secondary'}`}>
      <div className="col-lg-0 col-md-0 col-sm-12 ">
            <img src={logo2} className="img-fluid  col-sm-12 collapse " alt="logo" />
        </div>
      
    {/* ------------------------------------navHeader--------------- */}
    <nav className={`navbar navbar-expand-lg bg-${props.mode==='dark'?'dark':'secondary'}`}>
  <div className="container-fluid mx-3">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      {/* logo */}
      <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none ms-5">
          <img src={logo} alt='...' className="bi me-2"  width="100" height="60"  aria-label="Bootstrap"/>
        </Link>

        {/* Searchbar */}
        <form className="col-sm-12 col-lg-4 mb-3 mb-lg-0 me-lg-5 text-center ms-lg-5 m"  role="search">
          <input type="search" className="form-control border-success text-end px-5 mx-5" placeholder="Search Here..." aria-label="Search"/>
          <button className='button' type="submit"  aria-hidden="true"><i className='bi bi-search text-success'></i></button>
        </form>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link px-2 link-secondary">
            <button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'} bg-${props.mode==='dark'?'secondary':'body'} b`}>
              <i className="bi bi-geo-alt me-1"></i>
              Area
            </button>
          </Link>
        </li>
        <li className="nav-item">
          {/* Log-in/Sign-Up         */}
          <Link to='/Register' className="nav-link px-2 link-secondary">
            <button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'} bg-${props.mode==='dark'?'secondary':'body'} b`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <i className="bi bi-person-circle me-1"></i>
              Log-in/ Register
            </button>
          </Link>
        </li>
        <li className="nav-item">
          {/* NavCart */}
          <Link to='/Cart' className="nav-link px-2 link-dark">
            <button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'light'} bg-${props.mode==='dark'?'success':'success'} b`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={props.handleAddProduct}>
              <i className="bi bi-cart me-1"></i>
              Cart <span className="badge text-bg-danger rounded-pill align-text-bottom"> 0</span>
             </button>
          </Link>
        </li>
        <li className="nav-item">
            {/* MOde */}
        <span className={`nav-item nav-link form-check mx-lg-2 fs-5  form-switch text-${props.mode==='dark'?'light':'secondary'}`}>
                            {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
               <label className="form-check-label text-white"  onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">
                  <i className={` w-10 bi bi-${props.mode==='dark'?'sun-fill':'moon-fill'}`}></i>
                 </label>
         </span>
        </li>

        <li className="nav-item">
        <Link to='/' className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle mt-2"/>
          </Link>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href='/'>New project...</a></li>
            <li><a className="dropdown-item" href='/'>Settings</a></li>
            <li><a className="dropdown-item" href='/'>Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href='/'>Sign out</a></li>
          </ul>
        </li>
      </ul>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>


    {/* --------------------------------------------nav2-------------------------------------------- */}
    


  

    <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode==='dark'?'secondary':'dark'} p-1`} aria-label="Tenth navbar example">
    <div className="full-container-fluid p-2 mx-5">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-start container" id="navbarsExample08">
        <ul className="navbar-nav">
        <li className="nav-item justify-content-md-start ms- d-flex align-items-center me-5 border-none">
            <Link to='/' className="nav-link active p-0 px-1  fw-bold border-none" type='button' aria-current="page" href='/'>
              <select className="form-select bg-success text-white px-5 border-none w fw-bold" aria-label="Default select example">
                <option className='fw-bold bg-light' selected><i className="bi bi-columns-gap  text-white"></i> All Categories</option>
                <option value="1">
                  <a href='/' className={`list-group-item list-group-item-action bg-${props.mode==='dark'?'secondary':'light'} text-${props.mode==='dark'?'white':'dark'}  fw-bold`} ><i className={`text-${props.mode==='dark'?'white':'success'} bi bi-bag-fill me-1`}></i>
                    Essentials  </a>
                </option>

                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Link>
          </li>
        <li className="nav-item justify-content-md-start ms- d-flex align-items-center">
            <Link to='/' className="nav-link active p-0 px-1  bn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i> Combo </Link>
          </li>
          <li className="nav-item justify-content-md-start d-flex align-items-center mx-2">
            <Link to='/' className="nav-link active p-0 px-1 bn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i> Offer <span className="badge text-bg-danger rounded-pill align-text-bottom"> 99+</span></Link>
          </li>
          <li className="nav-item justify-content-md-start me-5 d-flex align-items-center">
            <Link to='/' className="nav-link active p-0 px-1  bn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i> Wholesale </Link>
          </li>
          {/* ------end */}
          <li className="nav-item justify-content-md-end d-flex align-items-center ms-5">
            <Link to='/' className="nav-link active p-0 px-1 bn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i> Recipe </Link>
          </li>
          <li className="nav-item mx-2  d-flex align-items-center">
            <Link to='/' className="nav-link p-0 px-1  active bn" href='/'>Track Order</Link>
          </li>
          
          <li className="nav-item dropdown d-flex align-items-center me-5">
            <a className="nav-link dropdown-toggle p-0 px-1 text-danger bn" href='/' data-bs-toggle="dropdown" aria-expanded="false"><i className='bi bi-currency text-white me-1'></i>Order Details</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href='/'>Action</a></li>
              <li><a className="dropdown-item" href='/'>Another action</a></li>
              <li><a className="dropdown-item" href='/'>Something else here</a></li>
            </ul>
          </li>
          {/* Notification */}
          <li className="nav-item dropdown d-flex align-items-center ">
          <div class="d-flex me-2 text-light">
                    <div class="dropdown">
                        <div class="d-flex justify-content-between align-items-center cursor-pointer" id="dropdownnotif" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-bell bi-sm ms-3 fw-bold fs-5 hover-rounded-light bn2"></i><span className="badge text-bg-danger rounded-pill align-text-bottom"> 7</span>
                        </div>
                        <ul class="dropdown-menu dropdown-menu-end pb-0" aria-labelledby="dropdownnotif">
                            <div class="text-center border-bottom pb-1">
                                <span class="text-center mx-auto">Notification</span>
                            </div>
                            <li><button class="dropdown-item" type="button">My Account</button></li>
                            <li><button class="dropdown-item" type="button">My Profile</button></li>
                            <li><button class="dropdown-item" type="button">Settings</button></li>
                            <li>
                                <button class="dropdown-item border-top text-center lsp-1" type="button">
                    View All
                  </button>
                            </li>
                        </ul>
                    </div>
                </div>
          <i class="fa fa-bell bx-sm me-1 fw-lighter hover-rounded-light"></i>
        <ul className="dropdown-menu dropdown-menu-end pb-0" aria-labelledby="dropdownnotif">
                            <div className="text-center border-bottom pb-1">
                                <span className="text-center mx-auto">Notification</span>
                            </div>
                            <li><button className="dropdown-item" type="button">My Account</button></li>
                            <li><button className="dropdown-item" type="button">My Profile</button></li>
                            <li><button className="dropdown-item" type="button">Settings</button></li>
                            <li>
                                <button className="dropdown-item border-top text-center lsp-1" type="button">
                    View All
                  </button>
                            </li>
                        </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  
    </div>
  )
}
