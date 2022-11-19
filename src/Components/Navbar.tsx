import React from 'react';

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-info">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">FanTravel</a>

        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;