import React from 'react'
import logo from "./img/navLogo.png" 
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
<nav className="navbar bg-white navbar-expand-lg sticky-top">
  <div className="container-fluid p-0">
    <a className="navbar-brand logo ms-4" href="#">
      <img src={logo} alt="Logo" className="img-fluid ms-md-5" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ps-2 ps-md-3 pe-md-5 w-100 d-flex justify-content-center mb-lg-0" id="navv">
        <li className="nav-item"><Link to= "/" className="nav-link" >HOME</Link></li>
        <li className="nav-item ms-md-3"><Link to = "/who-we-are" className="nav-link" >WHO WE ARE</Link></li>
        <li className="nav-item ms-md-3"><Link to = "/our-programs" className="nav-link" >OUR PROGRAMS</Link></li>
        <li className="nav-item ms-md-3"><Link to = "/projects" className="nav-link" >PROJECTS</Link></li>
        <li className="nav-item ms-md-3"><Link to = "/gallery" className="nav-link" >GALLERY</Link></li>
        <li className="nav-item ms-md-3"><Link to= "/reach-us" className="nav-link" >REACH US</Link></li>
        <li className="nav-item ms-md-5  rounded-2">
          <button type="button" className="btn text-white " id="enq-btn">ENQUIRE NOW</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav