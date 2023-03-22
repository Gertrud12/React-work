import React from "react";
import "./body.css";
import Image from "../../images/body img1.png";
import Line from "../../images/Rect.png";
import illustration from "../../images/anotherimage.png";

function Body() {
  return (
    <div>
      <div className="container body-style">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="body-img-section">
              <img src={Image} />
            </div>
          </div>
       
          <div className="col-sm-12 col-md-12 col-lg-6 body-other-section">
            <div className="">
              <h3>
                Leading healthcare<br></br>providers
              </h3>
            </div>
            <div className="body-other-img">
              <img src={Line} />
            </div>
            <p className="para3 mt-3">
              Trafalgar provides progressive, and affordable<br></br>
              healthcare, accessible on mobile and online for<br></br>
              everyone. To us, it's not just work. We take pride<br></br>
              in the solutions we deliver
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="body-other-section2">
              <h3>Download our mobile apps</h3>
            </div>
            <div className="body-other-img">
              <img src={Line} />
            </div>
            <p className="para3 mt-3">
              Trafalgar provides progressive, and affordable<br></br>
              healthcare, accessible on mobile and online for<br></br>
              everyone. To us, it's not just work. We take pride<br></br>
              in the solutions we deliver
            </p>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="body-image-section">
              <img src={illustration} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
