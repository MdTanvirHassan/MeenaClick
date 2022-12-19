import React from 'react'
import coupons from '../../image/cupons.jpg'

export default function Coupons() {
  return (
    <div>
        <div className="coupons text-center m-5 ">
            <img src={coupons} alt="" width='80%' className='border-danger' />
        </div>
        
    </div>
  )
}
