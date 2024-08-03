import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import img1 from "../Assets/hero2.jpeg"
import img2 from "../Assets/tic-tac-toe.jpeg"
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>WHO AM I?</h1>
        <p>This is me Karthik Chettipalli.I enjoy discussing newProjects and designs.
        Intrested people can Contact me.</p>
        <Link to="/contact">
        <button className="btn">
            Contact
        </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <img src={img1} alt="true" className="top" />
            <img src={img2} alt="true" className="bottom"/>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
