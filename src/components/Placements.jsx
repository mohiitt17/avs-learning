import React from 'react'
import sriram from "./img/Sriram.png"
import vivo from "./img/Vivo-Smart-Phone.png"
import airCon from "./img/SR-AIR-CON.png"
import relianceDigital from "./img/Reliance-Digital.png"
import relianceTrend from "./img/Reliance-Trends.png"
import puma from "./img/PUMA.png"
import lg from "./img/Lifes-Good.png"
import dominos from "./img/Dominos.png"

const Placements = () => {
  return (
<div className='fund-partners-container p-5 d-flex align-items-center justify-content-center flex-wrap '>
      <h1 className='w-100 mb-3'>OUR PLACEMENTS PARTNERS</h1>
      <div className="slider ">
        <div className="slide-track ">

          <img src= {sriram} alt="partner" className='slide-img' />
          <img src={vivo} alt="partner" className='slide-img' />
          <img src= {airCon} alt="partner" className='slide-img' />
          <img src= {relianceDigital} alt="partner" className='slide-img' />
          <img src= {relianceTrend} alt="partner" className='slide-img' />
          <img src= {puma} alt="partner" className='slide-img' />

          <img src={lg} alt="partner" className='slide-img' />
          <img src={dominos} alt="partner" className='slide-img' />
          <img src={vivo} alt="partner" className='slide-img' />
          <img src={airCon} alt="partner" className='slide-img' />
          <img src={puma} alt="partner" className='slide-img' />
          <img src={relianceDigital} alt="partner" className='slide-img' />
        </div>
      </div>
    </div>  )
}

export default Placements