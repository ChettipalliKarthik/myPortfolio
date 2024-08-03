import "./projectCardStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
const WorkCard = (props) => {
  return (
    <div>
      <div className="pro-card">
              <img src={props.imgSrc} alt="Image"/>
              <h2>{props.title}</h2>
                <p>{props.text}</p>
              <div className="pro-btns">
                    <Link className="btn">View</Link>
                    <Link className="btn">Source</Link>
              </div>
          </div>
    </div>
  )
}

export default WorkCard
