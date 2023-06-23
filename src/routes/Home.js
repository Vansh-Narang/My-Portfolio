import React from 'react'
import Work from "../components/Work"
import HeroImage from '../components/HeroImage';
import Navbar from "../components/Navbar";
import Footer from '../components/footer';
const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <Work />
            <Footer />
        </div >
    )
}

export default Home
