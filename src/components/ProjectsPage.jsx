import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  return (
<div className="container-fluid m-0 p-0">
          
            <div className="row w-100 m-0 p-0 text-white text-center d-flex flex-column justify-content-center bg-alignment" id='projectPage-banner'>
                <h1 className='fw-normal h1-5'>Projects</h1>
                <div className="page-navigtion d-flex justify-content-center ">
                    <Link to = "/" className='text-white  text-decoration-none me-3'>Home </Link>
                    <p className='me-3'> / </p>
                    <Link to = "/projects" className='text-white text-decoration-none'>Projects</Link>
                </div>
            </div>

            <div className='row w-100 fs-6 fsd-md-5 p-1 p-md-5 m-0  d-flex  justify-content-center peachBg'>
                <div className="col-12 col-md-10  ">
                    <h3 className='text-center mb-4 fs-5 fs-md-4'>We had completed the following projects:</h3>
                    <div className="table-responsive">
    <table class="table table-striped ">
      <thead  >
        <tr className='p-5' >
          <th>S. NO.</th>
          <th>PROJECT'S NAME</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr className='p-5'>
          <td>01.</td>
          <td className='fs-6'>National Urban Livelihood Mission (NULM)</td>
          <td>Completed</td>
        </tr>
        <tr>
          <td>02.</td>
          <td>TCS CSR</td>
          <td>Completed</td>
        </tr>
        <tr>
          <td>03.</td>
          <td>Reliance Foundation – CSR</td>
          <td>Completed</td>
        </tr>
        <tr className='peachBg'>
          <td>04.</td>
          <td>Ministry of Textiles (ISDS), Govt. of India</td>
          <td>Completed</td>
        </tr>
        <tr>
          <td>05.</td>
          <td>RECL – CSR</td>
          <td>Completed</td>
        </tr>
        <tr>
          <td>06.</td>
          <td>Muthoot – CSR</td>
          <td>Completed</td>
        </tr>
        <tr>
          <td>07.</td>
          <td>RACW – Link CSR Program of Godrej (Udaan)</td>
          <td>Completed</td>
        </tr>
        <tr>
          <td>08.</td>
          <td>Simon India – CSR</td>
          <td>Completed</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
        </div>

        </div>


  )
}

export default ProjectsPage