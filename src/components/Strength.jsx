import React from 'react'

const Strength = () => {
  return (
    <div className='container-fluid text-center  bg-black strength-wrap p-0 d-flex justfiy-content-center align-items-center flex-column'>
        <div className="row  pt-5 w-100  h-100 d-flex justify-content-center mb-3 mb-md-5 align-items-center">
                    <h2 className='mb-3 fs-1 text-white'>Our strengths and Forte</h2>
            <div className="col-10 col-md-2 ms-4 m-2 rounded-2 border border p-md-3 border-white h-100">
                <h1 className='text-warning fs-1 fw-bolder p-2'>55+</h1>
                <p className='fw-medium fs-6 text-white  '>Completed Projects</p>
            </div>
            
             <div className="col-10 col-md-2 m-2 ms-4 rounded-2 p-md-3  border border-white border">
                <h1 className='text-warning fs-1 fw-bolder p-2'>118,000+</h1>
                <p className='fw-medium fs-6 text-white  '>Youth Skilled</p>
             </div>
              <div className="col-10 ms-4 col-md-2 m-2 rounded-2 p-md-3 border border border-white">
                <h1 className='text-warning fs-1 fw-bolder p-2'>80,000+</h1>
                <p className='fw-medium fs-6 text-white  '>UP Skilled</p>
              </div>
              <div className="col-10 col-md-2 ms-4 m-2 rounded-2 p-md-3 border border border-white">
                <h1 className='text-warning fs-1 fw-bolder p-2'>19+</h1>
                <p className='fw-medium fs-6 text-white  '>Year Of Experience</p>
              </div>
        </div>
    </div>
  )
}

export default Strength