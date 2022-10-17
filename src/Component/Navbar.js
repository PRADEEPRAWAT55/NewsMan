import React, { Component } from 'react'
import "../css/Style.css"
import { NavLink , Link } from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><i className="fa-solid fa-group-arrows-rotate text-primary"></i> &nbsp;Newsman</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-div" id="navbarNavDropdown">
              <ul className="navbar-nav text-center">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link navbar-link dropdown-toggle " href="#" data-bs-toggle="dropdown" aria-expanded="true">
                    Category
                  </a>
                  <ul className="dropdown-menu bg-dark mt-2" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item text-capitalize nav-link px-5 " to="/business">business</Link></li>
                    <li><Link className="dropdown-item text-capitalize nav-link px-5 " to="/entertainment">entertainment</Link></li>
                    <li><Link className="dropdown-item text-capitalize nav-link px-5 " to="/general">general</Link></li>
                    <li><Link className="dropdown-item text-capitalize nav-link px-5 " to="/health">health</Link></li>
                    <li><Link className="dropdown-item text-capitalize nav-link px-5 " to="/science">science</Link></li>
                    <li><Link className="dropdown-item text-capitalize nav-link px-5 " to="/sports">sports</Link></li>
                    <li><Link className="dropdown-item text-capitalize nav-link px-5 " to="/technology">technology</Link></li>
                  </ul>
                </li>


              </ul>

            </div>
          


          </div>
        </nav>
      </div>
    )
  }
}
