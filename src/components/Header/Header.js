import React from 'react';
import logo from '../../image/logo.png';
import logo2 from '../../image/App-Download-Banner.jpg';

export default function Header(props) {
  return (
    <div>
         <header className="p-3 mb-0 border-bottom">
    <div className="full-container">
        
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mx-3">
      <div className="col-lg-0 col-m-0 col-sm-12 ">
            <img src={logo2} className="img-fluid  col-sm-12 collapse " alt="logo" />
        </div>
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img src={logo} alt='...' className="bi me-2"  width="100" height="60"  aria-label="Bootstrap"/>
        </a>
        <form className="col-12 col-lg-6 mb-3 mb-lg-0 me-lg-0"  role="search">
          <input type="search" className="form-control border-success" placeholder="Search..." aria-label="Search"/>
        </form>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><button className='col-sm-0 btn btn-success mt-1 p-2 px-3' type="submit"><i className="bi bi-search"></i></button></li>

          <li><a href='/' className="nav-link px-2 link-secondary"><button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'}`}><i className="bi bi-geo-alt me-1"></i>Area</button></a></li>

          <li><a href='/' className="nav-link px-2 link-dark"><button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'secondary'}`}><i className="bi bi-person-circle me-1"></i>Log-in/Sign-Up</button></a></li>

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
    


  

    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary" aria-label="Tenth navbar example">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Centered nav only</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}
