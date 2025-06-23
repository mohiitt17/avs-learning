import React from 'react'
import { Link } from 'react-router-dom'
import homeLogo from "./img/building.png"
import callLogo from "./img/call-logo.png"
import mailLogo from "./img/mail.png"

const ReachUsPage = () => {
    return (
        <div className="container-fluid m-0 p-0">

            <div className="row w-100 m-0 p-0 text-white text-center d-flex flex-column justify-content-center bg-alignment" id='galleryPage-banner'>
                <h1 className='fw-normal h1-5'>Reach Us</h1>
                <div className="page-navigtion d-flex justify-content-center ">
                    <Link to="/" className='text-white  text-decoration-none me-3'>Home </Link>
                    <p className='me-3'> / </p>
                    <Link to="/reac-us" className='text-white text-decoration-none'>Reach Us</Link>
                </div>
            </div>
            <div className='row w-100 fs-6 fsd-md-5 p-2  p-md-3 m-0 text-center  d-flex  justify-content-center peachBg'>
                <h1 >Get in Touch with Us</h1>
                <p>We’re Here to Help – Let’s Build Something Great Together!</p>
                <div className="col-11 m-3 col-md-6 rounded-3 darkgreenBg text-start justify-content-evenly p-5">

                    <div className="row bg-black text-white d-flex justify-content-evenly  mb-4 rounded-2 p-2">
                        <div className='col-2  logo d-flex align-items-center justify-content-center'>
                            <img src={homeLogo} alt="" className='img-fluid ' />
                        </div>
                        <div className="col-10 pt-2">
                            <h3 className=' '>Business Address</h3>
                            <p className=' '>B- 18, New Vijay Nagar, Sector - 9, Ghaziabad-201009, Uttar Pradesh</p>
                        </div>
                    </div>
                    <div className="row bg-black text-white rounded-2 p-2 mb-4">
                        <div className='col-2  logo d-flex align-items-center justify-content-center'>
                            <img src={callLogo} alt="" className='img-fluid ' />
                        </div>
                        <div className="col-10 pt-1">
                        <h3>Contact Number</h3>
                        <p>+91-8375048589</p>
                        </div>
                    </div>
                    <div className="row bg-black text-white rounded-2 p-2 mb-4" >
                        <div className='col-2  logo d-flex align-items-center justify-content-center'>
                            <img src={callLogo} alt="" className='img-fluid ' />
                        </div>
                        <div className="col-10 pt-1">
                        <h3>Contact Number</h3>
                        <p>+91-9818012053</p>
                            </div>

                    </div>
                    <div className="row bg-black text-white rounded-2 p-2 mb-">
                       <div className='col-2  logo d-flex align-items-center justify-content-center'>
                            <img src={mailLogo} alt="" className='img-fluid ' />
                        </div> 
                        <div className="col-10">
                        <h3>Email Address</h3>
                        <p>info@avslearning.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-11 col-md-4 m-3 greyBg rounded-2 d-flex flex-column justify-content-evenly p-5" id='reachUs-form'>
                    <div className="row bg-white p-3 d-flex align-items-center justify-content-center text-center rounded-2">
                        <p className='fs-4'>You are just Link click away!</p>
                    </div>
                    <input type="text" placeholder='your Name' className='p-1 ' />
                    <input type="email" placeholder='Email Address' className='p-1 ' />
                    <input type="text" placeholder='Mobile Number' className='p-1 ' />
                    <input type="text" placeholder='Company Name' className='p-1' />
                    <button className='btn btn-warning rounded-0 mt-2'>ASK Link QUESTION</button>
                </div>
                <div className="col-11 darkgreenBg text-center rounded-2 text-white p-5">
                    <p className='fs-5'>Email Us For Support AT <span className='text-warning'>avsitc@gmail.com</span>
                    </p>
                </div>

            </div>

        </div>)
}

export default ReachUsPage