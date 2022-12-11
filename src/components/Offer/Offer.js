import React from 'react'
import Grocery from '../Grocery/Grocery'
import img from '../../image/p1.jpg';
import img2 from '../../image/p2.jpg';
import img3 from '../../image/p6.jpg';
import img4 from '../../image/p3.jpg';
import img5 from '../../image/p4.jpg';
import img6 from '../../image/p5.jpg';
// import Footer from '../Footer/Footer';

import { Link } from 'react-router-dom';

export default function Offer(props) {
  return (
    <>
    <div className='mx-4'>
        <div className="text-success text-center">
            <h4 className="">Offers</h4><hr />
        </div>
        <div className="row">
          <div className="col-2">

          </div>
          <div className="col-10">

          
        
        <div className={`row mx-lg- mx-xxl-3 mx-xl-3 mx-md-3 my-1 mb-1 text-${props.mode==='dark'?'white':'body'} `}>
                <div className="col-lg-3 col-md-4 col-6 col-xl-3 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni MAster Oil 1Ltr" offerPrice="tk. 90.00" price="80.00"></Grocery>
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xl-3 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img4} category="Grocery" title="Span Virgin Olive Oil 1ltr" offerPrice="tk. 165.00" price="145.00"></Grocery>
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xl-3 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img3} category="Grocery" title="Aarong Butter  200gm" offerPrice="tk. 195.00" price="160.00"></Grocery>
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xl-3 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img2} category="Grocery" title="Aarong Ghee  300gm" offerPrice="tk. 145.00" price="120.00"></Grocery>
                </div>
                <div className="col-lg-3 col-md-4 col-6 col-xl-3 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img5} category="Grocery" title="Olitalia Sunflower Oil 5ltr" offerPrice="tk. 1555.00" price="1505.00"></Grocery>
                </div>
                <div className="col-lg-2 col-md-4 col-6 col-xl-2 col-xxl-2 col-xs-6">
                <Grocery mode={props.mode} notify={props.notify} img={img6} category="Grocery" title="Olitalia Pomace Olive Oil 1ltr" offerPrice="tk. 310.00" price="273.00"></Grocery>
                </div>
                
           </div> 

               <div className="mx-4">
                <Link to='/details' className='text-decoration-none'>
        <Grocery mode={props.mode} notify={props.notify} img={img4} category="Grocery" offerPrice="tk. 170.00" title="Span Virgin Olive Oil 1ltr" price="145.00"/></Link>
        
        </div>
               {/* pagination */}
               <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href='/'>Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href='/'>1</a></li>
                  <li className="page-item"><a className="page-link" href='/'>2</a></li>
                  <li className="page-item"><a className="page-link" href='/'>3</a></li>
                  <li className="page-item">
                    <a className="page-link" href='/'>Next</a>
                  </li>
                </ul>
              </nav>
              </div>  
              </div>   
    </div>
    
    {/* <Footer/> */}
    </>
  )
}
