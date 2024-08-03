import React from 'react'
import "./Hero.css";
import introImg from "../Assets/introImg.png";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='Hero'>
      <div className='mask'>
        <img className='introImg' src={introImg} alt='introImg'/>
      </div>
      <div className='content'>
        <p>Hello, This is Chettipalli</p>
        <h1>Frontend Developer.</h1>
      <div className='btns'>
        <Link to='/project'  className='btn'>Projects</Link>
        <Link to='/contact'  className='btn btn-light'>Contact</Link>
      </div>
    </div>
    </div>
    
  )
}

export default Hero
