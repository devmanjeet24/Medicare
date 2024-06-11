import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="Service">
        <div className="container">
          <div className='row d-flex justify-content-center'>
            <div className="col-md-6 col-12 text-center mb-5">
              <h2 className='H2'>Our Services</h2>
              <p className='para'>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
            </div>


            <div className='col-12'>


              <div className="row ">

                <div className="col-md-3">
                  <Link to="/service">
                    <div className="service_box swap">
                      <div className="img_service">
                        <img src="/tooth.png" alt="Tooth" />
                        <img src="/toothW.png" alt="toothW" />
                      </div>
                      <div className='Service_content'>
                        <h4>Dental Care</h4>
                        <div className="service-learnmore">
                          <p>Learn More <span><FaChevronRight /></span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-md-3">
                  <Link to="/service">
                    <div className="service_box swap ">
                      <div className="img_service">
                        <img src="/lungs2.png" alt="Tooth" />
                        <img src="/lungsW.png" alt="toothW" />
                      </div>
                      <div className='Service_content'>
                        <h4>Dental Care</h4>
                        <div className="service-learnmore">
                          <p>Learn More <span><FaChevronRight /></span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-md-3">
                  <Link to="/service">
                    <div className="service_box swap ">
                      <div className="img_service">
                        <img src="/human-brain.png" alt="Tooth" />
                        <img src="/lungsW.png" alt="toothW" />
                      </div>
                      <div className='Service_content'>
                        <h4>Dental Care</h4>
                        <div className="service-learnmore">
                          <p>Learn More <span><FaChevronRight /></span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>


                <div className="col-md-3">
                  <Link to="/service">
                    <div className="service_box swap ">
                      <div className="img_service">
                        <img src="/medical-file.png" alt="Tooth" />
                        <img src="/medical-fileW.png" alt="toothW" />
                      </div>
                      <div className='Service_content'>
                        <h4>Dental Care</h4>
                        <div className="service-learnmore">
                          <p>Learn More <span><FaChevronRight /></span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>


              </div>


            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;