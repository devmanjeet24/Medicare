import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import ClinicInnovativ from './ClinicInnovativ';
import Bestspeciast from './Bestspeciast';
import Testimonialsec from './Testimonialsec';
import Subscribenewsletter from './subscribenewsletter';

const Home = () => {
  return (
    <>

 

        <div className="herosection">
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
                <div className="hero_right">
                  <p>Welcome to MediCare+</p>
                  <h3>Best Specialists</h3>
                  <p>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
                  <div className='ButtonHedro'>
                    <button className='pagebutton'>
                      <Link to="/service">Make an Appointment</Link>
                    </button>
                    <button className='pagebutton2'>
                      <Link to="/service">Departments</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12'>
                <div className="Her0_banner">
                  <img src="/Rectangle.png" alt="rectangle" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <Hero />

        <ClinicInnovativ />

        <Bestspeciast />

        <Testimonialsec />

        <Subscribenewsletter />

        



    </>
  );
}

export default Home;
