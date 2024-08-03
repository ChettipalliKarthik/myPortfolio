import { FaHome, FaInstagram, FaLinkedin, FaMailBulk ,FaPhone,FaTwitter} from "react-icons/fa";
import "./Footer.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-container">
            <div className="left">
                <div className="location">
                    <div className="Home">
                    <FaHome  size={20} style={{color:"white"}}/>
                    <p>123House Society. </p></div>
                    <p style={{marginLeft:50}}>Hyderabad</p>
                    <div className="Phone">
                    <FaPhone  size={20} style={{color:"white"}}/>
                    <p>1234567890</p></div>
                    <div className="Mail">
                    <FaMailBulk  size={20} style={{color:"white"}}/>
                    <p>Hello@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>About me</h2>
                <p>This is me Karthik Chettipalli.I enjoy discussing newProjects and designs.
                    Intrested people can message me.
                </p>
                <div className="social">
                    <div> <FaInstagram size={40} style={{color:"white"}}/></div>
                    <div> <FaTwitter size={40} style={{color:"white"}}/></div>
                    <div> <FaLinkedin size={40} style={{color:"white"}}/></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
