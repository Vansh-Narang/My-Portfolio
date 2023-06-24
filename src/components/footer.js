import "./FooterStyles.css";
import { FaFacebook, FaGithub, FaHome, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", margin: "2rem" }} />
                        <p> Jagadhri</p>
                    </div>
                    {/* <div>
                        <p> Indira Colony</p>
                        <p>Jagadhri</p>
                    </div> */}
                    <div className="gmail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", margin: "2rem" }} />
                            vanshnarang@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>I am Vansh Narang a 3rd Year BTech Student from Maharishi Markandeshwar University , Mullana Haryana</p>
                    <br></br>
                    <p>FunFact : Learning New Stuff Everyday!</p>
                    <Link to="/url" />
                    <FaFacebook size={20} style={{ color: "white", margin: "2rem" }} />
                    <FaTwitter size={20} style={{ color: "white", margin: "2rem" }} />
                    <FaGithub size={20} style={{ color: "white", margin: "2rem" }} />
                </div>
            </div>

        </div >
    )
}

export default Footer
