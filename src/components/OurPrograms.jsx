import React from 'react'
import { Link } from 'react-router-dom'

const OurPrograms = () => {
    return (
        <div className="container-fluid m-0 p-0">
            <div className="row w-100 m-0 p-0 text-white text-center d-flex flex-column justify-content-center bg-alignment" id='programs-banner'>
                <h1 className='fw-normal h1-5'>Our Programs</h1>
                <div className="page-navigtion d-flex justify-content-center ">
                    <Link to= "/" className='text-white  text-decoration-none me-3'>Home </Link>
                    <p className='me-3'> / </p>
                    <Link to= "/our-programs" className='text-white text-decoration-none'>Our Programs</Link>
                </div>
            </div>

            <div className='container-fluid p-5 text-center programs d-flex flex-column '>
            <h1 className='w-100'>OUR PROGRAMS</h1>
            <div className="row programsCrads pt-2 container-fluid d-flex align-items-center justify-content-evenly w-100">
                <div class="col-8 bg-dark  col-md-3 card  d-none rounded-2   d-md-flex align-items-center justify-content-center flex-column p-2 text-center  text-light" id='card'>
                    <div class="  card-body   rounded-2 bg-black">
                        <h5 class="card-title bg-warning text-dark p-2 rounded " style={{ display: "inline-block" }}>AVS Foundation</h5>
                        <h1 class="card-title mt-3">Skill & Employability</h1>
                        <p class="card-text">AVS Foundation equips youth with practical skills, boosts employability, and links graduates to sustainable careers.</p>
                        <Link href="#" class="btn btn-light mt-3">READ MORE</Link>
                    </div>
                </div>
                <div class="col-8 bg-dark col-md-3 card rounded-2 d-none d-md-flex p-2 text-center  text-light" id='card'>
                    <div class="card-body  rounded-2 bg-black">
                        <h5 class="card-title bg-warning text-dark p-2 rounded" style={{ display: "inline-block" }}>AVS Foundation</h5>
                        <h1 class="card-title mt-3">Education</h1>
                        <p class="card-text">AVS Foundation offer education inspiring curiosity. critical thinking. and lifelong learning opportunites to underserved youth.</p>
                        <Link href="#" class="btn btn-light mt-3">READ MORE</Link>
                    </div>
                </div>
                <div class="col-10 col-md-3 card p-2 bg-dark  rounded-2 d-flex align-items-center justify-content-center flex-column text-center text-light" id='card'>
                    <div class="card-body  rounded-2 bg-black">
                        <h5 class="card-title bg-warning text-dark p-2 rounded" style={{ display: "inline-block" }}>AVS Foundation</h5>
                        <h1 class="card-title mt-3">Livelihood</h1>
                        <p class="card-text">We builds livelihoods via training. microenterprise support, access, and financial inclusion for marginalized communties </p>
                        <Link href="#" class="btn btn-light mt-3">READ MORE</Link>
                    </div>
                </div>

            </div>
        </div>
        </div>

    )
}

export default OurPrograms