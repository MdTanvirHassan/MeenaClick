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
            <form className="row g-3 mt-5">
  <div className="col-auto">
    <label for="staticEmail2" className="visually-hidden">Email</label>
    <input type="mailto" readonly className="form-control" id="staticEmail2" value="email@example.com"/>
  </div>
  <div className="col-auto">
    <label for="inputPassword2" className="visually-hidden">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
  </div>
  <div className="col-auto"><br /><hr />
    <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
          </div>
        </div>
    </div>
  )
}
