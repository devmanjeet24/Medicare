import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='UpperFooter'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className="upperFooterImg">
                                    <img src="./upperfooterlogo.png" alt="upperfooter" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='FooterLink'>
                                    <ul>
                                        <li> <Link to='/home'>Home</Link></li>
                                        <li><Link to='/About'>About</Link></li>
                                        <li><Link to='/Services'>Services</Link></li>
                                        <li> <Link to='/News'>News</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='LowerFooter'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12">
                                <ul>
                                    <li><Link to="/"><FaFacebookF /></Link></li>
                                    <li><Link to="/"><FaGoogle /></Link></li>
                                    <li> <Link to="/"><FaTwitter /></Link></li>
                                </ul>
                                <p>©2023 - 011BQ </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;