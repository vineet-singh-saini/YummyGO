import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <>
        <div className="footer-div">
            <div className="footer" id='contact'>
                <div className="ft-cnt-left">
                  <div className="footer-left-logo">
                      {/* <img src={assets.logo} alt="logo" /> */}
                  </div>
                  <div className="footer-left-desc">
                    <p>YummyGO is your one-stop food delivery partner bringing delicious meals from your favorite restaurants straight to your doorstep. Fast, reliable, and designed for ultimate convenience – experience food ordering like never before with YummyGO.</p>
                  </div>

                  <div className="footer-left-social-links">
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-x-twitter"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                  </div>

                </div>
                <div className="ft-cnt-center">
                  <div className="footer-center-title">
                    <p>COMPANY</p>
                  </div>

                  <div className="footer-center-nav">
                    <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>

                </div>
                <div className="ft-cnt-right">
                    <div className="footer-right-title">
                      <p>GET IN TOUCH</p>
                       <div className="footer-right-info">
                        <p>Vineet Singh Saini</p>
                        <p>1234567890</p>
                        <p>YummyGO@company.com</p>
                        <p>Copyright 2025 @YummyGO - All Rights Reserved</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;