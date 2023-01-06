import React, { useState } from 'react'
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { Link } from 'react-router-dom';

import './LogIn.css';
import logo from '../../image/fvicon.jpg';
import fb from '../../image/fb.webp';
import email from '../../image/email.png';
// import Footer from '../Footer/Footer';

export default function LogIn(props) {
    //! preloader2
    const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
    const styles={
      height: '250px',
    }
  return (
    <>
    {
        preLoading?
        <div className='d-flex justify-content-center text-center ' style={styles}>
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
    <div className='rb' >
      {/* setProgress={props.setProgress(props.progress + 100)} */}
    <div className='container my-'>
       <div className="area justify-content-center mt-">
            <div className="login mx-3">
              <img src={logo} alt="" className='' width="72" height="57"/>
              <h5 className='text-success'>Sign-IN</h5><hr />
            <form className="row g-12 needs-validation" noValidate>

                    <div className='log-box mt-5'>
                      <div className="facebook-log text-center mb-3  d-flex justify-content-center">
                        <img src={fb} alt="..." className='d-flex text-center me-3' width="30px" height='30px'/>
                          <span className='d-flex text-center'>Sign Up or Login with <b>- Facebook</b></span>
                      </div>
                      <div className="email-log d-flex justify-content-center">
                      <img src={email} alt="..." className='d-flex text-center me-3' width="30px" height='30px'/>
                          <span className='d-flex text-center'>Sign Up or Login with <b>- Email</b></span>
                      </div>
                      <h5 className='text-center my-3'>or</h5>
                      <div className="number">
                        <p className='text-center'>LEASE ENTER YOUR MOBILE PHONE NUMBER</p>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="inputGroup-sizing-default">+88</span>
                          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <button type="button" className="btn btn-primary btn-lg px-5">Sign Up / Login</button>
                        <p><small className='text-muted'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small></p>
                        <div className="">
                      <small>Create an account? <Link to='/Register'>Sign-Up</Link></small>
                    </div>
                      </div>
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
