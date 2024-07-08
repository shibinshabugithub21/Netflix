import React from 'react'
import './Footer.css'
import yotube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={instagram} alt="instagram" />
        <img src={yotube} alt="youtube" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="facebook" />
      </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal</li>
      <li>Cookie Information</li>
      <li>Corpoorate Information</li>
      <li>Contact Us</li>
    </ul>
    <p className='copyright-text'>&copy; <span id="year"></span> Netflix, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer
