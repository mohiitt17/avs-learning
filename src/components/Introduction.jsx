import React from "react";
import "../App.css";

import handImg from "./img/intro-img.png"
const Introduction = () => {
  return (
    <div className="intro container-fluid h-100 p-5 d-flex flex-column peachBg align-items-center justify-content-center flex-wrap"> 
        <h1>AVS Foundation</h1>
        <p>Empowering Lives, Inspiring Change.</p>
          
        <div className="row p-0 m-0 d-flex align-item-center justify-content-center flex-wrap-wrap">
          <div className="text-content col-12  col-md-5 ">
            <p>
              Established in 2006, AVS Foundation is a dedicated non-profit
              organization committed to the betterment of society through
              impactful skill development initiatives. With a strong belief in
              the power of education and empowerment, AVS has consistently
              worked towards building a skilled and self-reliant community. <br />
              Founded by Mr. Sudhanshu Agarwal, under the visionary guidance of
              Mrs. Manju Agarwal, AVS was created to provide a robust platform
              for individuals seeking to uplift their livelihoods. The
              foundation empowers youth and underprivileged individuals by
              enhancing their skills and enabling access to meaningful
              employment opportunities. Driven by its mission to build a quality
              life for all, AVS Foundation has earned recognition for its
              commitment, integrity, and result-oriented approach.
            </p>
          </div>
          <div className="img-content col-12 col-md-5">
            <img src= {handImg} alt="" className="img fluid w-100 d-block mx-auto" />
          </div>
          <div className="col-10 d-flex justify-content-center">
             <button className="btn btn-warning  p-2 fs-5 rounded-3 mt-5 ">EXPLORE MORE</button>
          </div>
                 
        </div>
    </div>
  );
};

export default Introduction;
