import "./WorkCardStyles.css";
import React from 'react'
import p1 from "../assets/p1.jpg";
import { NavLink } from "react-router-dom";
//Navlink is used for navigation to external sources
const WorkCard = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={p1} alt="image" />
                    <h2 className="project-title">
                        Project title
                    </h2>
                    <div className="pro-details">
                        <p>This is a para</p>
                        <div className="pro-btns">
                            <NavLink to='url.com' className="btn">VIEW</NavLink>
                            <NavLink to='url.com' className="btn">SOURCE</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
