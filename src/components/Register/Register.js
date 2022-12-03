import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../image/fvicon.jpg';
import Footer from '../Footer/Footer';
import './Register.css'

export default function Register() {
  return (
    <>
    <div className='rb '>
    <div className='container mb-5 my-2'>
        {/* <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" labelled="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>Log-in /Sign-Up Area            </div>
            <div className="dropdown mt-3">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Select Option
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href='/'>Log in </a></li>
                <li><a className="dropdown-item" href='/'>Sign-Up</a></li>
                <li><a className="dropdown-item" href='/'>Something else here</a></li>
              </ul>
            </div> */}
            <div className="area justify-content-center mt-1">
            <div className="login mx-3">
              <img src={logo} alt="" className='' width="72" height="57"/>
              <h5 className='text-success'>Register</h5><hr />
            <form className="row g-4 needs-validation" noValidate>
                    <div className="col-sm-12 col-md-6">
                      <label htmlFor="validationCustom01" className="form-label">First name</label>
                      <input type="text" className="form-control" id="validationCustom01" placeholder='Enter Your First Name' required/>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div><br />
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <label htmlFor="validationCustom02" className="form-label">Last name</label>
                      <input type="text" className="form-control" id="validationCustom02" placeholder='Enter your last name' required/>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      
                    </div>

                    <div className="col-md-4 col-sm-12 col-xs-12">
                      <label htmlFor="validationCustom02" className="form-label">Email</label>
                      <input type="mailto" className="form-control" id="validationCustom02" placeholder='Enter your email' required/>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="validationCustomUsername" className="form-label">Phone</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">+880</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="validationCustom03" className="form-label">City</label>
                      <input type="text" className="form-control" id="validationCustom03" placeholder='Enter Your city' required/>
                      <div className="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="validationCustom03" className="form-label">Password</label>
                      <input type="password" className="form-control" id="validationCustom03" placeholder='Password' required/>
                      <div className="invalid-feedback">
                        Please provide a strong password.
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="validationCustom03" className="form-label">Re-Type Password</label>
                      <input type="password" className="form-control" id="validationCustom03" placeholder='Re-Type Password' required/>
                      <div className="invalid-feedback">
                        Please provide a valid Password.
                      </div>
                    </div>
                    
                    <div className="col-md-3">
                      <label htmlFor="validationCustom05" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="validationCustom05" required/>
                      <div className="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" htmlFor="invalidCheck">
                          Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">Sign-Up</button>
                    </div>
                    <div className="">
                      <small>Have an account? <Link to='/LogIn'>Log-in</Link></small>
                    </div>
                  </form>
            </div>

            </div>

            
            
          {/* </div>
        </div> */}
    </div>
    
    </div>
    <Footer></Footer>
    </>
  )
}
