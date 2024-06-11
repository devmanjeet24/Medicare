import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const Testimonialsec = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const [Testimonial, Settestimonial] = useState([]);


    useEffect(() => {
        axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
            .then((response) => {
                Settestimonial(response.data.data)
            })
            .catch((error) => {
                console.log('error is there', error)
            })
    })


    return (
        <>

            <div className='Testimonial_section'>
                <div className='container'>

                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="H2">What Our Customers Say</h2>
                        </div>
                    </div>

                    <div className="col-md-12">

                        <div className='testimonualCarousel'>
                            <Slider {...settings}>

                                {
                                    Testimonial.map((ind) => {
                                        return (
                                            <Link to={ind.link}>
                                                <div className='Testibox'>
                                                    <p>{ind.Reviews}</p>

                                                    <div className='testiName_image'>
                                                        <div className='testinameImg'>
                                                            <img src="./testimonialImage.png" alt="" />
                                                        </div>

                                                        <div namewithprofess>
                                                            <h5>{ind.Name}</h5>
                                                            <p>{ind.Platform}</p>
                                                        </div>
                                                    </div>

                                                    <img src="./testiesclamation.png" alt="" className='testiesclamtion'/>

                                                </div>
                                            </Link>
                                        )
                                    })
                                }

                            </Slider>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Testimonialsec;