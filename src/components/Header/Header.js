import React from 'react';
import logo from '../../image/logo.png';
import logo2 from '../../image/App-Download-Banner.jpg';

export default function Header(props) {
  return (
    <div>
         <header className="p-3 mb-0 border-bottom ">
    <div className="full-container">
        
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mx-3">
      <div className="col-lg-0 col-m-0 col-sm-12 ">
            <img src={logo2} className="img-fluid  col-sm-12 collapse " alt="logo" />
        </div>
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img src={logo} alt='...' className="bi me-2"  width="100" height="60"  aria-label="Bootstrap"/>
        </a>
        <form className="col-12 col-lg-4 mb-3 mb-lg-0 me-lg-0 text-center mx-5 me-10"  role="search">
          <input type="search" className="form-control border-success text-end mx-5" placeholder="Search Here..." aria-label="Search"/>
        </form>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2  mb-md-0 mx-5 d-flex justify-content-end">
            {/* <li><button className='col-sm-0 btn btn-success mt-1 p-2 px-3' type="submit"><i className="bi bi-search"></i></button></li> */}

          <li><a href='/' className="nav-link px-2 link-secondary"><button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'}`}><i className="bi bi-geo-alt me-1"></i>Area</button></a></li>
{/* ---------------------- */}
          <li><a href='/' className="nav-link px-2 link-secondary">
  

        <button className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <i className="bi bi-person-circle me-1"></i> Log-in/Sign-Up
        </button> </a></li>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" labelled="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </div>
            <div className="dropdown mt-3">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href='/'>Action</a></li>
                <li><a className="dropdown-item" href='/'>Another action</a></li>
                <li><a className="dropdown-item" href='/'>Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>

          <li><a href='/' className="nav-link px-2 link-dark"><button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'}`}><i className="bi bi-cart me-1"></i>Cart <span className="badge text-bg-danger rounded-pill align-text-bottom"> 7</span></button></a></li>
          {/* <li><a href='/' className="nav-link px-2 link-dark">Products</a></li> */}
        </ul>
       

        <div className={`nav-item nav-link form-check mx-2  form-switch text-${props.mode==='dark'?'light':'secondary'}`}>
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
    


  

    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" aria-label="Tenth navbar example">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href='/'>Offer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/'>Coupon</a>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='/' data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
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
