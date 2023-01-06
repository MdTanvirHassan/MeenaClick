import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";import { Link } from 'react-router-dom';

import logo from '../../image/fvicon.jpg';
// import Footer from '../Footer/Footer';
import './Register.css'

export default function Register(props) {
    //! preloader2
    const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
    const styles={
      height: '200px',
    }
  return (
    <>
    {
        preLoading?
        <div className='d-flex justify-content-center text-center' style={styles}>
            <HashLoader 
            color="#36d7b7" 
            // color={color}
            loading={preLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            className='mt-5'
          />
          </div>
          :
    <div className='rb ' >
      {/* setProgress={props.setProgress(props.progress + 100)} */}
    <div className='container mb-5 '>
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
    }
    </>
  )
}
