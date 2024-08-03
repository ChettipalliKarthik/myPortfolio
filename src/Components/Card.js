import "./projectCardStyles.css"
import React from 'react'
import WorkCard from "./projectCard"
import projectCardData from "./projectCardData"
const Card = () => {
  return (
    <div className="project-container">
        <div className="title">Projects</div>
        <div className="pro-card-container">
            {projectCardData.map((val, ind) =>{
                return (
                    <WorkCard
                    key={ind}
                    imgSrc={val.imgSrc}
                    title={val.title}
                    text={val.text}
                    />
                )
            }
            )}
        </div>
      
    </div>
  )
}

export default Card
