import "./HeroImg2.css";
import React, { Component } from 'react'
import img from "../Assets/introImg.png"


class HeroImg2 extends Component {
    render(){
        return (
            <div className="Hero-img">
                <div >
                    <img className="img" src={img}  alt="img" />
                </div>
                <div className="Heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
              
            </div>
          )
    }
}

export default HeroImg2
