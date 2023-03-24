import React from 'react'
import './hero.css'
import Heroimg from '../../images/img1.png'

function Hero() {
  return (
    <div className='container mt-5'>      
      <div className= 'row'>
        <div className='col-sm-12 col-md-12 col-lg-6'>
            <div className='health'>
                <h2 className='mb-4'>Virtual HealthCare<br/> for you</h2>

                  <p >Trafalgar provides progressive, and affordable <br/>
                    healthcare, accessible on mobile and online<br/>for everyone
                  </p>

                  <div className="my-btn">
                    <button className='first-btn'>Consult today</button>
                  </div>
            </div>

        </div>

        <div className='col-sm-12 col-md-12 col-lg-6'>
        <div className='health-img'>
          <img src= {Heroimg} />
          </div>
        </div>

      </div>
    

    </div>
  )
}

export default Hero
