import React from 'react'
import Navbar from './Navbar'
import HomeGAV from './Home-GAV'
 import Team from './Team'
import Buttons from './Buttons'
import CardIndex from './CardIndex'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HomeGAV/>
            <Buttons />
            <CardIndex />
            <Team />   
             <Footer />  
        </div>
    )
}

export default Home
