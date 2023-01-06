import React from 'react'
import './Filter.css'
import { Link } from 'react-router-dom';

export default function Filter() {
  return (
    <div>
        {/* <input type="checkbox" id="check"/>
    <label htmlFor="check">
    <i className="bi bi-border-width" id="btn"></i>
      <i className="fas fa-bars" id="btn"></i>
      <i className="fas fa-times" id="cancel"></i>
    </label> */}
    <div className="sidebar">
    <header>Related Categories</header>
    <ul>
     <li className='list-group-item li'><Link to='/Combo' ><i className="fas fa-qrcode"></i>Accessories</Link></li>
     <li className='li'><Link to='/Combo' ><i className="fas fa-link"></i>Essentials</Link></li>
     <li className='li'><Link to='/Combo' ><i className="fas fa-stream"></i>Frozen Item</Link></li>
     <li className='li'><Link to='/Combo' ><i className="fas fa-calendar-week"></i>Baby Care</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-question-circle"></i>Bakery and Snacks</Link></li>
     <li className='li'><Link to='/Combo' ><i className="fas fa-sliders-h"></i>Bakery and Snacks</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Beauty and Hygiene</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Beauty</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Housing & cleaning</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Fresh Product</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Beverages</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Fish</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Meat</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Rice</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>noodles</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Chocolate &Candy</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Cleaning</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Vegetables</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Tea & Coffee</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Bath</Link></li>
     <li className='li'><Link to='/Combo' ><i className="far fa-envelope"></i>Grocery</Link></li>
    </ul>
   </div>

   <div className="sidebar">
    <header>Brands</header>
    <ul>
     <li>
        <Link to='/Combo' >
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Rok
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Nestle
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    No Brands
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Fresh
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Lux
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Rok
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Eagle
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Snickers
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Rok
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Brook Bond
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    NesCafe
                </label>
            </div>
        </Link>
    </li>
    <li>
        <Link to='/Combo' >
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Mars
                </label>
            </div>
        </Link>
    </li>

    </ul>
   </div>

    </div>
  )
}
