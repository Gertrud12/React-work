import React from 'react'
import './service.css'
import Line from '../../images/Rect.png'
import Glass from '../../images/scope.png'
import Can from '../../images/jar.png'
import Book from '../../images/Bookman.png'
import Text from '../../images/Book.png'
import box from '../../images/Box +.png'
import Abook from '../../images/Book+ .png'
// import Cards from '../Component/cards'

function Service() {
  return (
    <div className='service-main-section text-center'>
        <h3>Our services</h3>
        <div>
            <img src= {Line}></img>
        </div>
            <div className='para mb-5'>
                <p className='p-4'>
                We provide to you the best choiches for you. Adjust it to your 
                health needs and make sure your undergo treatment<br></br> with our highly qualified 
                doctors you can consult with us which type of service is suitable for your health
                </p>
            </div>

            <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-1'></div>
            <div className='col-sm-12 col-md-12 col-lg-10'>
            <div className='row service'>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <div className="service-second-section">
                        <div className='service-img-section mb-3'>
                            <img src={Glass}/>
                        </div>
                        <div className='service-section-body'>
                            <h3>Search doctor</h3>
                            <p>
                            Choose your doctor from thousands<br></br> of specialist, 
                            general, and trusted<br></br> hospitals
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                <div className="service-second-section">
                        <div className='service-img-section mb-3'>
                            <img src={Can}/>
                        </div>
                        <div className='service-section-body'>
                            <h3>Online pharmacy</h3>
                            <p>
                            Buy  your medicines with our<br></br> mobile application 
                            with a simple<br></br> delivery system
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                <div className="service-second-section">
                        <div className='service-img-section3 mb-3'>
                            <img src={Book}/>
                        </div>
                        <div className='service-section-body'>
                            <h3>Consultation</h3>
                            <p>
                            Free consultation with our trusted<br></br> doctors
                             and get the best<br></br> recomendations
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-12 col-lg-4'>
                <div className="service-second-section">
                        <div className='service-img-section2 mb-3'>
                            <img src={Text}/>
                        </div>
                        <div className='service-section-body'>
                            <h3>Details info</h3>
                            <p>
                            Free consultation with our trusted <br></br> 
                            doctors and get the best<br></br> recomendations
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                <div className="service-second-section">
                        <div className='service-img-section mb-3'>
                            <img src={box}/>
                        </div>
                        <div className='service-section-body'>
                            <h3>Emergency care</h3>
                            <p>
                            You can get 24/7 urgent care for<br></br> yourself 
                            or your children and your<br></br>
                            lovely family
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                <div className="service-second-section">
                        <div className='service-img-section mb-3'>
                            <img src={Abook}/>
                        </div>
                        <div className='service-section-body'>
                            <h3>Tracking</h3>
                            <p>
                            Track and save your medical 
                            history<br></br> and health data 
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-1'></div>
            </div>

            <div className='service-section-footer'>
                <button className='service-btn'>Learn more</button>
                
            </div>            
            
    </div>
  )
}

export default Service
