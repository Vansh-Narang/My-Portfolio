import "./FooterStyles.css";
import { FaFacebook, FaGithub, FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import React from 'react'
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", margin: "2rem" }} />
                        <p> Jagadhri , Haryana</p>
                    </div>
                    {/* <div>
                        <p> Indira Colony</p>
                        <p>Jagadhri</p>
                    </div> */}
                    <div className="gmail">
                        <h3 className="reach">
                            Reach me out at : vanshnarang49906@gmail.com
                        </h3>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>I am Vansh Narang a 3rd Year BTech Student from Maharishi Markandeshwar University , Mullana Haryana</p>
                    <br></br>
                    <p>FunFact : Learning New Stuff Everyday!</p>
                    {/* <Link to="/url" />
                    <FaFacebook size={20} style={{ color: "white", margin: "2rem" }} />
                    <FaTwitter size={20} style={{ color: "white", margin: "2rem" }} />
                    <FaGithub size={20} style={{ color: "white", margin: "2rem" }} /> */}
                    <div className="social">
                        <h4 className="xyz">Meet me at Social Media</h4>
                        <Link to="https://twitter.com/Vanshnarang26" ><FaTwitter size={20} style={{ color: "white", margin: "2rem" }} /> </Link>
                        <Link to="https://www.linkedin.com/in/vansh-narang26/" ><FaLinkedin size={20} style={{ color: "white", margin: "2rem" }} /> </Link>
                        <Link to="https://github.com/Vansh-Narang" ><FaGithub size={20} style={{ color: "white", margin: "2rem" }} /> </Link>
                    </div>


                </div>
            </div>

        </div >
    )
}

export default Footer
