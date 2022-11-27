import React from 'react'

export default function Category(props) {
  return (
    <div className="mx- mt-3 ">
    <div className={`row mx- my-1 mb-1 text-${props.mode==='dark'?'white':'body'} 
    bg-${props.mode==='dark'?'secondary':'body'}`}>
        <div className="col-9">
                <a href='/' className='nav-link'>
                    <h5 className={`text-${props.mode==='dark'?'warning':'body'}`}>{props.category}</h5>
                </a>
        </div>
        <div className="col-3">
            <a href="/" className={`nav-link text-end text-${props.mode==='dark'?'warning':'body'} 
            bg-${props.mode==='dark'?'secondary':'body'}`}>
                More <i className=" bi bi-caret-right-fill me-1"></i>
            </a>
        </div>
    </div>
    </div>
  )
}
