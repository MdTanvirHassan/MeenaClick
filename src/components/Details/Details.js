import React from 'react'
import Grocery from '../Grocery/Grocery'

export default function Details(props) {
  return (<>
    <div>
        <div>Details</div>
        <Grocery mode={props.mode} notify={props.notify} img={props.img} category="Grocery" offerPrice="tk. 190.00" title="Span Virgin Olive Oil 1ltr" price="145.00"/>
    </div>

    </>
  )
}
