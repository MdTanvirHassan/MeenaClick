import React from 'react'
import Grocery from '../Grocery/Grocery'
import img from '../../image/p1.jpg';

export default function Popular(props) {
  return (
    <>
    <div class="container-fluid my-5">
        <h1 class="text-center fw-bold display-1 mb-5">Owl <span class="text-danger">Carousel</span></h1>
        <div class="row">
            <div class="col-12 m-auto">
                <div class="owl-carousel owl-theme">
                    <div class="item mb-4">
                    <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni Master Oil 1Ltr" offerPrice="tk379.00" price="360.00" tag='tk19.00 OFF'></Grocery>
                    </div>

                    <div class="item">
                    <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni Master Oil 1Ltr" offerPrice="tk379.00" price="360.00" tag='tk19.00 OFF'></Grocery>
                    </div>
                    <div class="item">
                    <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni Master Oil 1Ltr" offerPrice="tk379.00" price="360.00" tag='tk19.00 OFF'></Grocery>
                    </div>
                    <div class="item">
                    <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni Master Oil 1Ltr" offerPrice="tk379.00" price="360.00" tag='tk19.00 OFF'></Grocery>
                    </div>
                    <div class="item">
                    <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni Master Oil 1Ltr" offerPrice="tk379.00" price="360.00" tag='tk19.00 OFF'></Grocery>
                    </div>
                    <div class="item">
                    <Grocery mode={props.mode} notify={props.notify} img={img} category="Grocery" title="Radhuni Master Oil 1Ltr" offerPrice="tk379.00" price="360.00" tag='tk19.00 OFF'></Grocery>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}
