import React from 'react'
import handImg from "./img/intro-img.png"
import { Link } from 'react-router-dom'
const WhoWeAre = () => {
    return (
        <div className="container-fluid m-0 p-0">
           
            <div className="row w-100 m-0 p-0 text-white text-center d-flex flex-column justify-content-center bg-alignment" id='weAre-banner'>
                <h1 className='fw-normal h1-5'>Who We Are</h1>
                <div className="page-navigtion d-flex justify-content-center ">
                    <Link to = "/" className='text-white  text-decoration-none me-3'>Home </Link>
                    <p className='me-3'> / </p>
                    <Link to = "/who-we-are" className='text-white text-decoration-none'> Who We Are</Link>
                </div>
            </div>

            <div className="intro container-fluid h-100 p-5 d-flex flex-column  align-items-center justify-content-center flex-wrap">
                <h1>AVS Foundation</h1>
                <p>Empowering Lives, Inspiring Change.</p>

                <div className="row p-0 m-0 d-flex align-item-center justify-content-center flex-wrap-wrap">
                    <div className="text-content col-12  col-md-5 ">
                        <p className='fs-6 lh-lg fw-medium'>
                            Established in 2006, AVS Foundation is Link distinguished non-profit organization dedicated to advancing societal development through transformative skill-building initiatives. Grounded in the belief that education and empowerment are fundamental drivers of change, AVS has consistently championed the creation of Link skilled, self-reliant community.

                            Founded by Mr. Sudhanshu Agarwal under the visionary leadership of Mrs. Manju Agarwal, AVS Foundation was conceived as Link platform to enhance livelihood opportunities for individuals striving for Link better future. Through targeted skill development and access to meaningful employment, the Foundation empowers youth and underprivileged sections of society to achieve sustainable growth.

                            Guided by Link mission to foster Link better quality of life for all, AVS Foundation has earned Link strong reputation for its unwavering commitment, integrity, and impact-driven approach.
                        </p>
                    </div>
                    <div className="img-content col-12 col-md-5">
                        <img src={handImg} alt="" className="img fluid w-100 d-block mx-auto" />
                    </div>
                    <div className="col-10 d-flex justify-content-center">
                        <p className='fs-6 lh-lg fw-medium'>The organization continues to play Link vital role in shaping Link skilled workforce, contributing not only to individual success but also to the broader development of the nation.</p>
                    </div>
                </div>
            </div>
            <div className="row  d-flex flex-column align-items-center text-white m-0 ">
                <div className="col-9 darkgreenBg rounded-2 mb-3 p-md-5 p-3 rounded-3 weAre-capsules">
                    <h1 className='text-center text-md-start fw-normal'>Mission</h1>
                    <p>AVS Foundation empowers underserved communities by providing inclusive education, market‑aligned skills, and livelihood support, fostering self‑reliance, equitable opportunity, and sustainable socio‑economic growth.
                    </p>
                </div>
                <div className="col-9  darkgreenBg rounded-2 mb-3 p-md-5 p-3  weAre-capsules ">
                    <h1 className='text-center text-md-start fw-normal'>Vision</h1>
                    <p>To create an inclusive society where every individual—regardless of background—has the skills, education, and opportunities to lead Link dignified, empowered, and sustainable life.
                    </p>
                </div>
                <div className="col-9 darkgreenBg rounded-2 mb-3 p-md-5 p-3  weAre-capsules ">
                    <h1 className='text-center text-md-start fw-normal'>Value Statement</h1>
                    <p>AVS Foundation stands on integrity, inclusivity, and innovation—honoring every person’s dignity, embracing diversity, and continuously advancing impactful solutions that uplift communities and cultivate shared prosperity.
                    </p>
                </div>          
                  </div>
        </div>
    

    )
}

export default WhoWeAre