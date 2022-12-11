import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import Feature from '../components/Feature/Feature';
import Product from '../components/Product/Product';
// import Footer from '../components/Footer/Footer';

export default function Home(props) {
    // const {mode}=props.mode;
    // const {notify}=props.notify;
    
  return (
    <div>
        <Link to='/' className='text-decoration-none'>
        <Carousel mode={props.mode}/>
      <Feature mode={props.mode}/>
      <Product mode={props.mode} notify={props.notify} handleCart={props.handleCart} title='Product Title Quantity' price='price'/>
      {/* <Footer mode={props.mode}/> */}
      </Link>
    </div>
  )
}
