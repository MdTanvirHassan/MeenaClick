import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { Link } from 'react-router-dom';

import './LogIn.css';
import logo from '../../image/fvicon.jpg';
// import Footer from '../Footer/Footer';

export default function LogIn() {
    //! preloader2
    const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
  return (
    <>
    {
        preLoading?
        <div className='d-flex justify-content-center text-center'>
            <HashLoader 
            color="#36d7b7" 
            // color={color}
            loading={preLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
          :
    <div className='rb'>
    <div className='container my-2'>
       <div className="area justify-content-center mt-1">
            <div className="login mx-3">
              <img src={logo} alt="" className='' width="72" height="57"/>
              <h5 className='text-success'>Sign-IN</h5><hr />
            <form className="row g-4 needs-validation" noValidate>
                    

                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <label htmlFor="validationCustom02" className="form-label">Email</label>
                      <input type="mailto" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" placeholder='Enter your email' required/><br />
                      <div id="validationServer03Feedback" className="invalid-feedback">
                        Please provide a valid email.
                      </div>
                      
                    </div><br />

                    
                    <div className="col-md-12">
                      <label htmlFor="validationCustom03" className="form-label">Password</label>
                      <input type="password" className="form-control" id="validationCustom03" placeholder='Password' required/>
                      <div className="invalid-feedback">
                        Please provide a valid password.
                      </div>
                    </div>
                    
                    
                    
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" htmlFor="invalidCheck">
                          Keep me sing-in
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">Sign-In</button>
                    </div>
                    <div className="">
                      <small>Create an account? <Link to='/Register'>Sign-Up</Link></small>
                    </div>
                  </form>
            </div>

            </div>

            
            
          
    </div>
    
    </div>
    }
    </>
   
  )
}
