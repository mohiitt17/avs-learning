import React from 'react'
import PMKVY from "./img/PMKVY-1.png"
import modelama from "./img/Modelama.png"
import KBImg from "./img/Kaushal-Balam.png"
import nulImg from "./img/National-Urban-Livelihood.png"
import msme from "./img/MSME.png"
import labour from "./img/Labour-Net.png"
import craft  from "./img/Craft-Limited.png"
import centum from "./img/Centum.png"
import eduGuru from "./img/Edu-Guru.png"






const FundPartners = () => {
  return (
    <div className='fund-partners-container p-5 d-flex align-items-center  justify-content-center flex-wrap '>
      <h1 className='w-100 mb-3'>OUR FUNDING PARTNERS</h1>
      <div className="slider ">
        <div className="slide-track ">

          <img src= {PMKVY} alt="partner" className='slide-img' />
          <img src={modelama} alt="partner" className='slide-img' />
          <img src= {labour} alt="partner" className='slide-img' />
          <img src= {msme} alt="partner" className='slide-img' />
          <img src= {nulImg} alt="partner" className='slide-img' />
          <img src= {KBImg} alt="partner" className='slide-img' />

          <img src={craft} alt="partner" className='slide-img' />
          <img src={centum} alt="partner" className='slide-img' />
          <img src={eduGuru} alt="partner" className='slide-img' />
          <img src={msme} alt="partner" className='slide-img' />
          <img src={PMKVY} alt="partner" className='slide-img' />
          <img src={nulImg} alt="partner" className='slide-img' />
        </div>
      </div>
    </div>
  )
}

export default FundPartners