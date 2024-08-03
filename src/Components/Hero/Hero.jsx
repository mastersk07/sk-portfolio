import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_img.jpeg'
import './Hero.css'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Srikaran Sankar,</span> a Data Analyst based in India.</h1>
      <p>I am a passinato data analyst with strong development skills and professional experience, I specialize in leveraging data insights to drive strategic decision-making and enhance business performance.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <button className='hero-resume'><a className="a" href='src\assets\srikaran_resume.pdf'>My Resume</a></button>
        </div>
        </div>
  )
}

export default Hero
