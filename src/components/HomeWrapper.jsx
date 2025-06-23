import React from 'react'
import Carousel from './Carousel'
import Introduction from './Introduction'
import Programs from './Programs'
import Sector from './Sector'
import Strength from './Strength'
import FundPartners from './FundPartners'
import  Foundation  from './Foundation'
import Placements from './Placements'

const HomeWrapper = () => {
  return (
    <div id='wrap' className='container-fluid  p-0 h-auto'>
        <Carousel />
        <Introduction />
        <Programs />
        <Sector />
        <Strength />
        <FundPartners />
        <Foundation />
        <Placements />
    </div>
  )
}

export default HomeWrapper