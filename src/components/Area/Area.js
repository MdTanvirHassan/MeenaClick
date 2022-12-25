import React from 'react'

export default function Area() {
  const styles={
    height: '400px',
  }
  return (
    <div className="content" style={styles} >
      <small className={`text-center d-flex justify-content-center mt-5`}>Click area again!</small>
      
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-success text-white">
          <h6 className="modal-title fs-5" id="exampleModalLabel">Please select your delivery area.. </h6>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">Select Area:</label>
              {/* <input type="search" className="form-control" id="recipient-name"/> */}
              <select className="form-select" aria-label="Default select example">select Area
                <option ></option>
                <option value="1">60 Feet Road</option>
                <option value="2">Abul Hotel</option>
                <option value="2">Banashree</option>
                <option value="3">Uttara</option>
              </select>
              <p><span className='text-danger'>*Note :</span> If you change your area, The stock out product will be removed from your cart.</p>
            </div>
            {/* <div className="mb-3">
              <label for="message-text" className="col-form-label">Message:</label>
              <textarea className="form-control" id="message-text"></textarea>
            </div> */}
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
  </div> 
    
  )
}
