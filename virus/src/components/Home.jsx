import React from 'react'
import Navbar from './Navbar'
import HomeGAV from './Home-GAV'
 import Team from './Team'
import Buttons from './Buttons'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HomeGAV/>
            <Buttons />
            <Team />   
            <Footer />         
        </div>
    )
}

export default Home
