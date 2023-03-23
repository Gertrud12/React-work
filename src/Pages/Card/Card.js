import React from "react";
import "./card.css";
import Picture1 from "../../images/image 2.png";
import Picture2 from "../../images/image 4.png";
import Picture3 from "../../images/image 3.png";

function Card() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="my-card">
          <div className="image-section">
            <img src={Picture1} />
          </div>
          <div className="card-body-section">
            <h3>
              Disease detection, check <br></br>up in the laboratory
            </h3>

            <p>
              In this case, the role of the health <br></br>
              laboratory is very important to do <br></br>a disease detection...
            </p>    
          <p className="card-para">Read more 
          <i class="bi bi-arrow-right"></i></p>
        
          </div>

          
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="my-card">
          <div className="image-section">
            <img src={Picture2} />
          </div>
          <div className="card-body-section">
            <h3>
              Herbal medicines that are <br></br>safe for consumption
            </h3>

            <p>
              Herbal medicine is very widely used<br></br> at this time because
              of its very good<br></br> for your health...
            </p>
            <p className="card-para">Read more 
          <i class="bi bi-arrow-right"></i></p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="my-card">
          <div className="image-section">
            <img src={Picture3} />
          </div>
          <div className="card-body-section">
            <h3>
              Natural care for healthy<br></br>facial skin
            </h3>

            <p>
              A healthy lifestyle should start from<br></br>
              now and also for your skin health.<br></br>
              There are some...
            </p>
            <p className="card-para">Read more 
          <i class="bi bi-arrow-right"></i></p>
          </div>
        </div>
      </div>


      </div>
  

      <button className='card-btn'>View all</button>

    </div>
  );
}

export default Card;
