import React from 'react'

const Programs = () => {
    return (
        <div className='container-fluid p-md-5 text-center programs d-flex flex-column '>
            <h1 className='w-100'>OUR PROGRAMS</h1>
            <div className="row programsCrads pt-2 container-fluid d-flex align-items-center justify-content-evenly w-100">
                <div class="col-8 bg-dark col-md-3 card  d-none rounded-2    d-md-flex align-items-center justify-content-center flex-column p-4 text-center  text-light" id='card'>
                    <div class="  card-body p-3  rounded-2 bg-black">
                        <h5 class="card-title bg-warning text-dark p-2 rounded " style={{ display: "inline-block" }}>AVS Foundation</h5>
                        <h1 class="card-title mt-3">Skill & Employability</h1>
                        <p class="card-text">AVS Foundation equips youth with practical skills, boosts employability, and links graduates to sustainable careers.</p>
                        <a href="#" class="btn btn-light mt-3">READ MORE</a>
                    </div>
                </div>
                <div class="col-8 bg-dark col-md-3 card rounded-2 d-none d-md-flex p-4 text-center  text-light" id='card'>
                    <div class="card-body p-3  rounded-2 bg-black">
                        <h5 class="card-title bg-warning text-dark p-2 rounded" style={{ display: "inline-block" }}>AVS Foundation</h5>
                        <h1 class="card-title mt-3">Skill & Employability</h1>
                        <p class="card-text">AVS Foundation equips youth with practical skills, boosts employability, and links graduates to sustainable careers.</p>
                        <a href="#" class="btn btn-light mt-3">READ MORE</a>
                    </div>
                </div>
                <div class="col-10 bg-dark p-4 col-md-3 card p-2  rounded-2 d-flex align-items-center justify-content-center flex-column text-center text-light" id='card'>
                    <div class="card-body p-3  rounded-2 bg-black">
                        <h5 class="card-title bg-warning text-dark p-2 rounded" style={{ display: "inline-block" }}>AVS Foundation</h5>
                        <h1 class="card-title mt-3">Skill & Employability</h1>
                        <p class="card-text">AVS Foundation equips youth with practical skills, boosts employability, and links graduates to sustainable careers.</p>
                        <a href="#" class="btn btn-light mt-3">READ MORE</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Programs