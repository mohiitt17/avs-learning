import React from 'react'
import { BsLinkedin, BsTwitterX, BsWhatsapp, BsXCircle, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer container-fluid darkgreenBg p-3 pt-md-5 m-0 mt-4 mt-md-1 text-white'>
      <div className="row  d-flex a justify-content-evenly">
        <div className="col-md-2 col-10  p-2">
          <h4 className='text-start'>AVS Foundation</h4>
          <p className='text-white-50 lh-base '>Established in 2006, AVS Foundation is a dedicated non-profit organization committed to the betterment of society through impactful skill development initiatives. With a strong belief in the power of education and empowerment, AVS has consistently worked towards building a skilled and self-reliant community.</p>
          <button className='btn btn-light mt-2'>explore more</button>
        </div>
        <div className="col-md-2 col-10  h-50">
          <h4>Quick Links</h4>
          <ul className="list-unstyled text-start  ">
            <li className='p-2 '><Link to = "/" className=" text-white-50 text-decoration-none">Home</Link></li>
            <li className='p-2'><Link to = "/who-we-are" className="text-white-50 text-decoration-none ">Who We Are</Link></li>
            <li className='p-2'><Link to= "/" className="text-white-50 text-decoration-none ">What We Do</Link></li>
            <li className='p-2'><Link to = "/projects" className="text-white-50 text-decoration-none ">Projects</Link></li>
            <li className='p-2'><Link to = "/reach-us" className="text-white-50 text-decoration-none">Reach Us</Link></li>
          </ul>

        </div>
        <div className="col-md-2 col-10 h-50">
          <h4>Our Programs</h4>
          <ul className="list-unstyled">
            <li className='p-2'><a href="#" className="text-white-50 text-decoration-none">Skill & Employability</a></li>
            <li className='p-2'><a href="#" className="text-white-50 text-decoration-none">Education</a></li>
            <li className='p-2'><a href="#" className="text-white-50 text-decoration-none">Livelihood</a></li>
          </ul>
        </div>
        <div className="col-md-2 col-10  ">
          <h6 className="text-uppercase">Contact Information</h6>
          <p className='p-2 text-white-50'>B-18, New Vijay Nagar, Sector-9, Ghaziabad-201009, Uttar Pradesh</p>
          <p className='p-2 text-white-50'>+91-8375048589</p>
          <p className='p-2 text-white-50'>+91-9818012053</p>
          <p className='p-2 text-white-50'>info@avslearning.com</p>

        </div>
        <div className="col-10 position-relative  d-flex justify flex-column align-items-center bottom-5 ">
            <h4>follow us</h4>
            <ul className='list-unstyled  d-flex'>
              <li className='me-3'>
                <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle bg-success">
                 <BsWhatsapp />
                </div>
              </li>
              <li className='me-3'>
                 <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle bg-primary">
                 <FaFacebook />
                </div>
              </li>
              <li className='me-3'>
                 <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle bg-dark">
                 <FaInstagram />
                </div>
              </li>
              <li className='me-3'>
                 <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle bg-secondary">
                 <BsTwitterX />
                </div>
              </li>
              <li className='me-3'>
                 <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle bg-primary">
                 <FaLinkedin />
                </div>
              </li>
              <li className=''>
                 <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle bg-danger">
                 <BsYoutube/>
                </div>
              </li>
            </ul>
        </div>
      </div>
       <div className='text-center row  headText text-center pt-1'>
       <h2 className='text-white fs-6'>© 2025 By AVS Foundation.</h2>
    </div>
    </div>
  )
}

export default Footer