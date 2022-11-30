import React from 'react'

export default function Register() {
  return (
    <div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" labelled="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>Log-in /Sign-Up Area            </div>
            <div className="dropdown mt-3">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Select Option
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href='/'>Log in </a></li>
                <li><a className="dropdown-item" href='/'>Sign-Up</a></li>
                <li><a className="dropdown-item" href='/'>Something else here</a></li>
              </ul>
            </div>

            <div className="login mt-5">
              <h5>Register</h5><hr />
            <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-12">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value="Mark" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div><br />
  <div className="col-md-12 col-sm-12 col-xs-12">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" value="Otto" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-12">
    <label for="validationCustomUsername" className="form-label">Phone</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">+880</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Sign-Up</button>
  </div>
</form>
            </div>
            
          </div>
        </div>
    </div>
  )
}
