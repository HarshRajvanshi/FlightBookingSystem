import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer(props) {
    console.log(props);
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>King Flyer ©</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>

                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;