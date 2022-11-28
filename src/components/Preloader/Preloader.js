import React from 'react';
import './Preloader.css';
import logo from '../../image/logo.png';

export default function Preloader() {
  return (
    <div>
        <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src={logo} alt="loading" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
