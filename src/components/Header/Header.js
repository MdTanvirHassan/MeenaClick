import React from 'react';
import logo from '../../image/logo.png';
import logo2 from '../../image/App-Download-Banner.jpg';
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
    
    //*sticky wrapper
    <div className={`sticky-top full-container`}>
      {/*//todo banner----- */}
      <Link to='/' className="header-banner">
            <img src={logo2} className={` `} alt="logo" width="100%" />
        </Link>
      
      <nav className={`navbar navbar-expand-lg  bg-${props.mode==='dark'?'dark':'header'} text-${props.mode==='dark'?'white':'white'}`}>
          <div className="container-fluid">
            {/* //todo header----logo */}
            <Link to="/" className="navbar-brand header-margin" >
            <img src={logo} alt='...' className=" "  width="140" height="60"  aria-label="Bootstrap"/>
            </Link>
              {/* //!Toggle */}
            <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon text-white bg-secondary"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              {/* //todo Search--bar-- */}
            <form className="d-flex flex-grow-1 " role="search">
        <input className="form-control text-center" id='search' type="search" placeholder="Search your desired product or brand here..." aria-label="Search"/>
        <button className='' id='search-btn' type="submit"  aria-hidden="false">
          <i className='bi bi-search text-white fw-bold'></i>
          </button>
        
      </form>


              <ul className="navbar-nav  mb-2 mb-lg-0 me-5"> 
                <li className="nav-item">
                  {/*//* Area */}
          <Link to='/Area' className="nav-link px-1 link-secondary">
            <button type="button" className={` outline-${props.mode==='dark'?'light':'secondary'} bg-${props.mode==='dark'?'secondary':'body'} header-btn`} data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="bi bi-geo-alt-fill me-1 text-success fw-bold"></i>
              <small>Area</small><br /><span className='fw-lighter'>Location</span>
            </button>
          </Link>
                </li>
                <li className="nav-item">
                  {/*//* Log-in/Sign-Up         */}
          <Link to='/LogIn' className="nav-link px-1 link-secondary">
            <button type="button" className={`outline-${props.mode==='dark'?'light':'secondary'} bg-${props.mode==='dark'?'secondary':'body'} header-btn`} >
              <i className="bi bi-person-circle me-1 text-success fw-bold"></i>
              <small className=''>Log-in/Sign-Up</small> 
            </button>
          </Link>
                </li>
                <li className="nav-item">
                  {/*//* NavCart -------*/}
          <Link to='/Cart' className="nav-link px-1 link-dark">
            <button type="button" className={`outline-${props.mode==='dark'?'light':'light'} bg-${props.mode==='dark'?'success':'success'} cart-btn `} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={props.handleAddProduct}>
              <i className="bi bi-bag-fill me-1 text-white"></i>
              No Item <span className="badge text-bg-danger rounded-pill align-text-bottom"> 0</span><br />
              <span className="text-white">tk. 0</span>
             </button>
          </Link>
                </li>
                <li className="nav-item">

                  {/*//todo MOde -------------*/}
        <span className={`nav-item nav-link form-check  fs-5 mt-1 form-switch text-${props.mode==='dark'?'light':'secondary'} d-flex`}>
          
               <label className="form-check-label text-white badge text-bg-secondary rounded-pill cursor"  onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">
                  <i className={` w-10 bi bi-${props.mode==='dark'?'sun-fill':'moon-stars-fill'}`}></i>
                 </label>
         </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>



    {/* //! --------------------------------------------second-navbar-sticky-------------------------------------------- */}
    <nav className={`navbar navbar-expand-lg bg-${props.mode==='dark'?'nav':'nav'} p-0`}>
  <div className="container-fluid">
    <div className="navbar-brand cat-header  cat-margin" >
      {/* //todo -----start-- category --------------------------------------------*/}
      <div className=" " id="navbarsExample">
            
            <div className="dropdown " data-dropdown id="navbarsExample08">
            <button className="link p-0 " >
              <h5 className=' text-white'data-dropdown-button>
                      <FontAwesomeIcon icon={faList} className='pe-3' data-dropdown-button/>
                      All Categories 
                      <small className='px-4'>
                        <FontAwesomeIcon icon={faChevronDown} data-dropdown-button/>
                      </small>
                  </h5>
            </button>
      <div className="dropdown-menu information-grid">
        <div>
        
          <div className="dropdown-heading"></div>
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
    </div>
    {/* //!toggle */}
    <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-secondary"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-md-start">
        <li className="nav-item "> 
            {/*//*combo-------  */}
        <Link to='/Combo' className=" p-0 px-lg-1 nav-btn " type='button' aria-current="page" href='/'>
             <small>Combo</small> 
             </Link>
        </li>
        <li className="nav-item px-2" >
        <Link to='/offer' className=" p-0 px-1 nav-btn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'> </i>
            <small> Offer</small> 
              <span className="badge text-bg-danger rounded-pill align-text-bottom notification"> 99+</span>
            </Link>
        </li>
        <li className="nav-item">
        <Link to='/' className=" p-0 px-1  nav-btn" type='button' aria-current="page" href='/'><i className='bi bi- text-white'></i>
            <small> Wholesale </small>
            </Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href='/'>Link</a>
        </li> */}
        
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-md-end nav-margin">
      <li className="nav-item">
      <Link to='/TrackOrder' className="p-0 px-1 nav-btn" type='button' aria-current="page">
              <small> Recipe</small>
             </Link>
        </li>
        <li className="nav-item px-2">
        <Link to='/TrackOrder' className='p-0 px-1  text-danger nav-btn2' type='button' aria-current="page">
               <span className="" href='/' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <small>Track Order</small>
                </span>
              </Link>
        </li>
        <li className="nav-item">
        <Link to='/coupons'className=" p-0 px-1 text-danger nav-btn2"  type='button' aria-current="page">
              <span>
              <small>Coupons</small>
              </span>
              
            </Link>
        </li>
        <li className="nav-item cursor">
        <div className="d-flex me- text-light">
                    <div className="dropdown notification">
                        <div className="d-flex justify-content-between align-items-center cursor-pointer" id="dropdownnotif" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-bell bi-sm ms-1 fw-bold fs-5 hover-rounded-light notification"></i>
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
      </ul>
      
    </div>
  </div>
</nav>
    {/* //!---------------------------- */}
    </div>
  )
}
