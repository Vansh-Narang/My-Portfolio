import "./FooterStyles.css";
import { FaFacebook, FaGithub, FaHome, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", margin: "2rem" }} />
                    </div>
                    <div>
                        <p> Indira Colony</p>
                        <p>Jagadhri</p>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", margin: "2rem" }} />
                            9466445533
                        </h4>
                    </div>
                    <div className="gmail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", margin: "2rem" }} />
                            vanshnarang49906@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>I am Vansh Narang</p>
                    <FaFacebook size={20} style={{ color: "white", margin: "2rem" }} />
                    <FaTwitter size={20} style={{ color: "white", margin: "2rem" }} />
                    <FaGithub size={20} style={{ color: "white", margin: "2rem" }} />
                </div>
            </div>

        </div >
    )
}

export default Footer
