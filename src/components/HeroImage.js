import React from 'react'
import './HeroImageStyle.css';
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={IntroImg} alt='IntroImg' />
            </div>
            <div className='content'>
                <p>
                    Hi I am Vansh Narang
                </p>
                <br>
                </br>
                <p>
                    Developer
                </p>
                <h1>
                    Solving Problems
                </h1>
                <div>
                    <Link to="/project" className='btn'>
                        Projects
                    </Link>
                    <Link to="/contact" className='btn btn-light'>
                        Contact
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default HeroImage
