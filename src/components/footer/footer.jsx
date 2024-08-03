
import React from 'react'
import footer_logo from '../../assets/footer_logo.png'
import github from '../../assets/github.svg'
import insta from '../../assets/insta.svg'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I am a highly passinato in the field of data science and analytics based in India.</p>
        </div>
        <div className="contact-detail">
                  <img src={github} alt=""/><p> GitHub</p>
                </div>
                <div className="contact-detail">
                  <img src={insta} alt=""/><p> Instagram</p>
                </div>
                <div className="contact-detail">
                  <img src={whatsapp} alt=""/><p> Whatsapp</p>
                </div>
                <div className="contact-detail">
                  <img src={linkedin} alt=""/> <a href="https://www.linkedin.com/in/srikaran-sankar/"><p>Linkedin</p></a>
                  
                </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 mastersk. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
