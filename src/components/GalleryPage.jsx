import React from 'react'
import avs_1 from "./img/AVS01.png" 
import avs_2 from "./img/AVS02.png" 
import avs_3 from "./img/AVS03.png" 
import avs_4 from "./img/AVS04.png" 
import avs_5 from "./img/AVS05.png" 
import avs_6 from "./img/AVS06.png" 
import { Link } from 'react-router-dom'


const GalleryPage = () => {
  return (

<div className="container-fluid m-0 p-0">

            <div className="row w-100 m-0 p-0 text-white text-center d-flex flex-column justify-content-center bg-alignment" id='galleryPage-banner'>
                <h1 className='fw-normal h1-5'>Gallery</h1>
                <div className="page-navigtion d-flex justify-content-center ">
                    <Link to = "/" className='text-white  text-decoration-none me-3'>Home </Link>
                    <p className='me-3'> / </p>
                    <Link to = "/gallery" className='text-white text-decoration-none'>Gallery</Link>
                </div>
            </div>

            <div className='row w-100 fs-6 fsd-md-5 p-2  p-md-3 m-0  d-flex  justify-content-center peachBg'>
               <div className="col-12 col-md-3  m-1 p-0 ">
                <img src= {avs_1} alt="" className='img-fluid w-100 rounded-4' />
               </div>
               <div className="col-12 col-md-3 m-2 p-0 rounded-2">
                <img src= {avs_2} alt="" className='img-fluid w-100 rounded-4' />
               </div>
               <div className="col-12 col-md-3 m-2 p-0 rounded-2">
                <img src= {avs_3} alt="" className='img-fluid w-100 rounded-4 ' />
               </div>
               <div className="col-12 col-md-3 m-2 p-0 rounded-2">
                <img src= {avs_4} alt="" className='img-fluid w-100 rounded-4' />
               </div>
               <div className="col-12 col-md-3 m-2 p-0 rounded-2">
                <img src= {avs_5} alt="" className='img-fluid w-100 rounded-4' />
               </div>
               <div className="col-12 col-md-3 m-2 p-0 rounded-2">
                <img src= {avs_6} alt="" className='img-fluid w-100 rounded-4' />
               </div>
        </div>
        </div>  )
}

export default GalleryPage