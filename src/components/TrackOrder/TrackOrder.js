import React from 'react'
import './TrackOrder.css'

export default function TrackOrder(props) {
  const styles={
    height: '400px',
  }
  return (
    <div className="content" style={styles} >
      {/* setProgress={props.setProgress(props.progress + 100)} */}
      <small className={`text-center d-flex justify-content-center mt-5`}>Click again!</small>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-light text-dark">
          <h6 className="modal-title fs-5" id="exampleModalLabel"><small>Track My order</small></h6>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <span><small className='text-danger'>* </small><small>Phone Number</small></span>
            {/* <span className="input-group-text" id="inputGroupPrepend3">+88</span> */}

      <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder='Ex. 01XXXXXXXXX' required/>
      <br />
            <span>
                <small className='text-danger'>* </small><small>Oder Id</small>
            </span>
            <input type="text" className='form-control' name="" id="" placeholder='Enter your oder-id' required/>
         
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
