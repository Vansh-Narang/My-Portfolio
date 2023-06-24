import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from 'react'
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>I am developer who is just trying to be better everyday!</p>
                <Link to="/contact">
                    <button className="btn">
                        Contact
                    </button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={p1} className="img" alt="image"></img>
                    </div>
                    <div className="img-stack bottom">
                        <img src={p2} className="img" alt="image"></img>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutContent
