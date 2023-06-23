import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Projects" text="Some of my most recent works" />
            <Work />
            <Footer />
        </div>
    )
}

export default Project