import React from 'react'
import agrImg from "./img/agr.png"
import healthCareImg from "./img/Healthcare.jpg"
import hospitaltiyImg from "./img/Hospitality.png"
import beautyWellImg from "./img/Beauty-Wellness.png"
import apperalImg from "./img/Apparel.png"

import ITImg from "./img/IT-ITEs.png"
import constructionImg from "./img/Construction-Sector.png"
import retailImg from "./img/Retail.png"
import greenSkillImg from "./img/Green-Skills.png"
import bfsiImg from "./img/BFSI.png"



const Sector = () => {
    return (
        <div className='container-fluid m-0 p-md-5 peachBg text-center sector-wrap'>
        <h1>KEY FOCUS SECTOR</h1>
        <div className="row w-100 d-flex justify-content-evenly ">
            <div className="col-5 col-md-2 border sectorCards  text-white  border border-black p-0 m-3">
                <img src= {agrImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg p-1 text-center w-100">
                    <p className='fs-5'>Agriculture</p>
                </div>
            </div>
            <div className="col-5 col-md-2 border sectorCards text-center border border-black  text-white p-0 m-3 ">
                <img src= {healthCareImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg p-1 text-center w-100">
                   <p className='fs-5'> HealthCare</p>
                </div>

            </div>
            <div className="col-5 col-md-2 border sectorCards text-center border border-black text-white p-0 m-3">
                <img src= {apperalImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg p-1 text-center w-100">
                    <p className='fs-5'>Apparel</p>
                </div>
            </div>
            
            <div className="col-5 col-md-2 border sectorCards text-center border border-black text-white p-0 m-3">
               <img src= {hospitaltiyImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg  p-1 text-center w-100">
                    <p className='fs-5'>Hospitality</p>
                </div> 
            </div>
            <div className="col-5 col-md-2 border sectorCards text-center border border-black text-white p-0 object-fit-cover m-3 ">
                <img src= {beautyWellImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg p-1 mt-0 text-center w-100">
                    <p className='fs-5'>Beauty & will</p>
                </div>
            </div>


            <div className="col-5 col-md-2 border sectorCards  text-white  border border-black p-0 m-3">
                <img src= {ITImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg p-1 text-center w-100">
                    <p className='fs-5'>IT-ITEs</p>
                </div>
            </div>
            <div className="col-5 col-md-2 border sectorCards text-center border border-black  text-white p-0 m-3">
                <img src= {bfsiImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg p-1 text-center w-100">
                   <p className='fs-5'>BFSI</p>
                </div>

            </div>
            <div className="col-5 col-md-2 border sectorCards text-center border border-black text-white p-0 m-3">
                <img src= {retailImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg  p-1 text-center w-100">
                    <p className='fs-5'>Retail</p>
                </div>
            </div>
            
            <div className="col-5 col-md-2 border sectorCards text-center border border-black text-white p-0 m-3">
               <img src= {constructionImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text darkgreenBg  p-1 text-center w-100">
                    <p className='fs-5'>Construction</p>
                </div> 
            </div>
            <div className="col-5 col-md-2 border sectorCards text-center border border-black text-white p-0 object-fit-cover m-3">
                <img src= {greenSkillImg} alt=""  className='img-fluid h-75'/>
                <div className="card-text  darkgreenBg p-1 mt-0 text-center w-100">
                    <p className='fs-5'>Green Skills</p>
                </div>
            </div>
        </div>

            
        

</div>
            )
}

export default Sector