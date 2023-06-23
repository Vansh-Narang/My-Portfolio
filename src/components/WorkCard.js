import "./WorkCardStyles.css";
import React from 'react'
import p1 from "../assets/p1.jpg";
import { NavLink } from "react-router-dom";
//Navlink is used for navigation to external sources
const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgSrc} alt="image" />
            <h2 className="project-title">
                {props.title}
            </h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.url} className="btn">VIEW</NavLink>
                    <NavLink to='url.com' className="btn">SOURCE</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
