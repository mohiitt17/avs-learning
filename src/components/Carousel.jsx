import React from 'react'
import "../App.css"

import slide01 from "./img/AVS-Slider01.jpg";
import slide02 from "./img/AVS-Slider02.jpg";
import slide03 from "./img/AVS-Slider03.jpg";

const Carousel = () => {
  return (
    <div id="slider" class="carousel slide   p-0" data-bs-ride="carousel">
            <div class="carousel-indicators">
        <button type="button" data-bs-target="#slider" data-bs-slide-to="0" class="active btn btn-warning" aria-current="true" aria-label="slide 1"></button>
        <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="slide 2"></button>
        <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="slide 3"></button>
    </div>


  <div class="carousel-inner p-0">
    
    <div class="carousel-item centerCap active d-flex align-items-center justify-content-center">
      <img src= {slide01} class="d-block w-100" alt="..." />
      <div className="carousel-caption mb-0 mb-md-5">
        <h1>SKILL & EMPLOYABILITY</h1>
        <p>Equipping Individuals with Practical Skills for a Brighter, Sustainable Future.</p>
        <button className='btn btn-warning rounded-5 p-2'>Explore more</button>
        </div>
    </div>

    <div class="carousel-item">
      <img src= {slide02} class="d-block w-100 opacity-2" alt="..." />
      <div className="carousel-caption mb-0 mb-md-5">
          <h1>EDUCATION</h1>
        <p>Empowering Minds Through Quality Learning and Holistic Development.</p>
        <button className='btn btn-warning rounded-5 p-2 '>Explore more</button>
</div>
    </div>

        <div class="carousel-item">
      <img src= {slide03} class="d-block w-100" alt="..." />
      <div className="carousel-caption mb-0 mb-md-5">
        <h1>Livelihood</h1>
        <p>Creating Sustainable Livelihoods Through Skill Development and Economic Empowerment.</p>
        <button className='btn btn-warning rounded-5 p-2'>Explore more</button>
</div>
    </div>


  </div>

  <button class="carousel-control-prev " type="button" data-bs-target="#slider" data-bs-slide="prev">
    <span class="carousel-control-prev-icon p-2"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
    <span class="carousel-control-next-icon  p-2"></span>
  </button>
</div>

  )
}

export default Carousel
