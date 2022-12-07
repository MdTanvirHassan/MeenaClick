import React from 'react';
import logo from '../../image/logo.png';
// import logo2 from '../../image/App-Download-Banner.jpg';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList} from '@fortawesome/free-solid-svg-icons';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  //const res= document.getElementsByClassName("col-sm-12");
  //!categories dropdown-start
  document.addEventListener("mouseover", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })
  //*categories dropdown end
  

  return (
    //sticky wrapper
    <div className={`sticky-top bg-${props.mode==='dark'?'dark':'header'} row`}>
      {/* <div className="col-xl-0 col-xxl-0 col-lg-0 col-md-0 col-sm-12 col-xs-12 ">
            <img src={logo2} className={`img-fluid  col-xl-0 col-xxl-0 col-lg-0 col-md-0 col-sm-12 col-xs-12 collapse} `} alt="logo" data-bs-toggle="collapse"/>
        </div> */}
      
    {/* ------------------------------------navHeader--------------- */}
    <nav className={`navbar navbar-expand-lg bg-${props.mode==='dark'?'dark':'header'}`}>
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-lg-4 mx-xl-4 mx-xxl-4" id="navbarTogglerDemo01">
      {/* logo */}
      <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none me-lg-1 ">
          <img src={logo} alt='...' className="bi me-2"  width="140" height="60"  aria-label="Bootstrap"/>
        </Link>

        {/* Searchbar */}
        <form className="col-sm-6 col-xs-6 col-lg-6 mb-3 mb-lg-0 me-lg-0 text-center ms-lg- m "  role="search">
          <input type="search" className="form-control border-success text-start px-5  mx-5 text-line" placeholder="Search your desired product or brand here..." aria-label="Search"/>
          {/* inside search-input */}
          {/* <button className='button' type="submit"  aria-hidden="true"><i className='bi bi-search text-success'></i></button> */}
          
        </form>
        <button className='src' type="submit"  aria-hidden="false">
          <i className='bi bi-search text-white fw-bold'></i>
          </button>
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
        <li className="nav-item">
          {/* Area */}
          <Link to='/Area' className="nav-link px-1 link-secondary">
            <button type="button" className={` outline-${props.mode==='dark'?'light':'secondary'} bg-${props.mode==='dark'?'secondary':'body'} btnStyle b`} data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="bi bi-geo-alt-fill me-1 text-success fw-bold"></i>
              <small>Area</small><br /><span className='fw-lighter'>Location</span>
            </button>
          </Link>
        </li>
        <li className="nav-item">
          {/* Log-in/Sign-Up         */}
          <Link to='/LogIn' className="nav-link px-1 link-secondary">
            <button type="button" className={`outline-${props.mode==='dark'?'light':'secondary'} bg-${props.mode==='dark'?'secondary':'body'} b`} >
              <i className="bi bi-person-circle me-1 text-success fw-bold"></i>
              <small className=''>Log-in/Sign-Up</small> 
            </button>
          </Link>
        </li>
        <li className="nav-item">
          {/* NavCart */}
          <Link to='/Cart' className="nav-link px-1 link-dark">
            <button type="button" className={`outline-${props.mode==='dark'?'light':'light'} bg-${props.mode==='dark'?'success':'success'} bg-green `} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={props.handleAddProduct}>
              <i className="bi bi-bag-fill me-1 text-white"></i>
              No Item <span className="badge text-bg-danger rounded-pill align-text-bottom"> 0</span><br />
              <span className="text-white">tk. 0</span>
             </button>
          </Link>
        </li>
        <li className="nav-item">
            {/* MOde */}
        <span className={`nav-item nav-link form-check mx-lg-1 fs-5 mt-1 form-switch text-${props.mode==='dark'?'light':'secondary'}`}>
                            {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
               <label className="form-check-label text-white"  onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">
                  <i className={` w-10 bi bi-${props.mode==='dark'?'sun-fill':'moon-stars-fill'}`}></i>
                 </label>
         </span>
        </li>

        
      </ul>

    </div>
  </div>
</nav>


    {/* --------------------------------------------second-navbar-sticky-------------------------------------------- */}
    

    <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode==='dark'?'nav':'nav'} p-0`} aria-label="Tenth navbar example">
    <div className="container-fluid p-0 mx-lg-4 mx-xl-4 mx-xxl-4  px-2">
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse d-flex justify-content-md-between " id="navbarsExample08">
        <div className=" collapse navbar-collapse  justify-content-md-start" id="navbarsExample08">
          <ul className="navbar-nav d-flex">
          <li className="nav-item justify-content-md-start  d-flex align-items-center me-5 border-none">
            {/*start-- category */}
            <div className=" header px-5  " id="navbarsExample">
            
            <div className="dropdown " data-dropdown id="navbarsExample08">
            <button className="link " >
              <h5 className='link text-white'data-dropdown-button>
                      <FontAwesomeIcon icon={faList}className='pe-3' data-dropdown-button/>
                      All Categories 
                      <small className='px-4'>
                        <FontAwesomeIcon icon={faChevronDown} data-dropdown-button/>
                      </small>
                  </h5>
            </button>
      <div className="dropdown-menu information-grid">
        <div>
        
          <div className="dropdown-heading">Categories</div>
          <div className="dropdown-links">
            <Link to='/Combo' className="link">
              <i className={`text-${props.mode==='dark'?'danger':'danger'} bi bi-bag-fill me-1`}></i>
                    Essentials
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'danger':'danger'} bi bi-box-fill me-1`}></i>
                        Frozen Item
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'success':'success'} bi bi-alexa me-1`}></i>
                        Accessories
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'success':'success'} bi bi-people-fill me-1`}>
                            </i>Baby Care
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'success':'success'} bi bi-columns-gap me-1`}></i>
                        Bakery and Snacks
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'success':'success'} bi bi-amd me-1`}></i>
                        Beauty and Hygiene
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'success':'success'} bi bi-archive-fill me-1`}></i>
                        Beverages
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'success':'success'} bi bi-slack me-1`}></i>
                        Fish
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'success':'success'} bi bi-bag me-1`}></i>
                        Fresh Product
            </Link>
            <Link to='/Combo' className="link">
            <i className={`text-${props.mode==='dark'?'success':'success'} bi bi-house me-1`}></i>
                        Housing & cleaning
            </Link>
          </div>
        </div>
        
        
      </div>
    </div>
    </div>
    
            {/* <Link to='/Combo' className="nav-link active p-0 px-1  fw-bold border-none" type='button' aria-current="page" href='/'>
              <div className="nav-item d-flex category px-lg-5">
                <h5 className="p-1 text-center">
                <FontAwesomeIcon icon={faList} /> All Categories 
                 <small className='px-1'><FontAwesomeIcon icon={faChevronDown} />
                 </small>
                 </h5>
              </div>
            </Link> */}
          </li>
          {/* End ---categories */}

          {/* combo */}
        <li className="nav-item justify-content-md-start ms- d-flex align-items-center">
            <Link to='/Combo' className="nav-link active p-0 px-1  bn " type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i> <small>Combo</small> </Link>
          </li>
          {/* offer */}
          <li className="nav-item justify-content-md-start d-flex align-items-center mx-2">
            <Link to='/offer' className="nav-link active p-0 px-1 bn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i><small> Offer</small> <span className="badge text-bg-danger rounded-pill align-text-bottom"> 99+</span></Link>
          </li>
          {/* wholesale */}
          <li className="nav-item justify-content-md-start me-5 d-flex align-items-center">
            <Link to='/' className="nav-link active p-0 px-1  bn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i><small> Wholesale </small></Link>
          </li>
          </ul>
        </div>
          {/* ------First-end */}
          
          {/* last-end-start */}
          <div className="collapse navbar-collapse  justify-content-md-end" id="navbarsExample08">
            <ul className="navbar-nav">
          
          <li className="nav-item justify-content-md-end d-flex align-items-center">
            <Link to='/' className="nav-link active p-0 px-1 bn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i><small> Recipe</small> </Link>
          </li>
          <li className="nav-item mx-2  d-flex align-items-center track-order">
            <Link to='/TrackOrder' className='text-decoration-none'> <button className="nav-link p-0 px-1  active bnn border-none" href='/' data-bs-toggle="modal" data-bs-target="#exampleModal"><small>Track Order</small></button></Link>
          </li>
          
          <li className="nav-item dropdown d-flex align-items-center me-">
            <a className="nav-link dropdown-toggle p-0 px-1 text-danger bnn" href='/' data-bs-toggle="dropdown" aria-expanded="false"><i className='bi bi-currency text-white me-1'></i><small>Order Details</small></a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href='/'>Action</a></li>
              <li><a className="dropdown-item" href='/'>Another action</a></li>
              <li><a className="dropdown-item" href='/'>Something else here</a></li>
            </ul>
          </li>
          {/* Notification */}
          <li className="nav-item dropdown d-flex align-items-center ">
            <div className="d-flex me- text-light">
                    <div className="dropdown">
                        <div className="d-flex justify-content-between align-items-center cursor-pointer" id="dropdownnotif" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-bell bi-sm ms-1 fw-bold fs-5 hover-rounded-light bn2"></i>
                            <span className="badge text-bg-danger rounded-pill align-text-bottom">0</span>
                        </div>
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
                    </div>
                </div>
          </li>
        </ul></div>
        
      </div>
    </div>

  </nav>
  {/* <li className="nav-item">
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
        </li> */}
  
    </div>
  )
}
