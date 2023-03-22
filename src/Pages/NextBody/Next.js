import React from 'react'
import './next.css'
import illustration from "../../images/anotherimage.png"
import Line from "../../images/Rect.png"

function Next() {
  return (
    <div className='next-main-section'>
      <div className='row'>
        
        <div className='col-sm-12 col-md-12 col-lg-5'>
            <div className='body-other-section'>
                <h3>Download our 
                 mobile apps</h3>
            </div>
            <div className='body-other-img'>
              <img src={Line}/>
            </div>
            <p className='para3 mt-3'>
            Trafalgar provides progressive, and affordable<br></br> 
            healthcare, accessible on mobile and online for<br></br> 
            everyone. To us, it's not just work. We take pride<br></br>
            in the solutions we deliver
            </p>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-2'></div>

        <div className='col-sm-12 col-md-12 col-lg-5'>
            <div className='body-img-section'>
                <img src={illustration}/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Next
