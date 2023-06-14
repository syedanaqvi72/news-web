import React, { Component } from 'react'
import { link} from "react-router-dom"

const Navbar =() =>{

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> News-web</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current ="page" to="/"></Link>
        </li>
        <li className="nav-item"><Link className="navlink"to="/bussiness"> busines</Link></li>
        <li className="nav-item"><Link className="navlink"to="/entertainment"> Entertainment</Link></li>
        <li className="nav-item"><Link className="navlink"to="/general"> general</Link></li>
        <li className="nav-item"><Link className="navlink"to="/health"> health</Link></li>
        <li className="nav-item"><Link className="navlink"to="/science"> science</Link></li>
        <li className="nav-item"><Link className="navlink"to="/sports"> sports</Link></li>
        <li className="nav-item"><Link className="navlink"to="/technology"> technology</Link></li>
      
        <li className="nav-item dropdown">
          <a classNAme="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">About</a></li>
            <li><a className="dropdown-item" href="/">contact us</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">feed back</a></li>
          </ul>
        </li>
        <li className="nav-item">
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
