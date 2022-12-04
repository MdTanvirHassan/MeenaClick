import React from 'react'
import Grocery from '../Grocery/Grocery'
import img from '../../image/p1.jpg';
import img2 from '../../image/p2.jpg';
import img3 from '../../image/p6.jpg';
import img4 from '../../image/p3.jpg';
import img5 from '../../image/p4.jpg';
import img6 from '../../image/p5.jpg';
import Footer from '../Footer/Footer';

export default function Offer(props) {
  return (
    <div className='mx-4'>
        <div className="text-success text-center">
            <h4 className="">Offers</h4>
        </div>
        <div className="">
            <Grocery notify={props.notify}></Grocery>
        </div>
        <div className={`row mx-lg- mx-xxl- mx-xl-3 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni MAster Oil 1Ltr" price="80.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img2} category="Grocery" title="Span Virgin Olive Oil 1ltr" price="145.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img3} category="Grocery" title="Aarong Butter  200gm" price="160.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img4} category="Grocery" title="Aarong Ghee  300gm" price="12.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img5} category="Grocery" title="Olitalia Sunflower Oil 5ltr" price="105.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img6} category="Grocery" title="Olitalia Pomace Olive Oil 1ltr" price="273.00"></Grocery>
                </div>
               </div> 
               <Footer/>
    </div>
  )
}
