import React from 'react'
import Navbar from './Navbar'
import HomeGAV from './Home-GAV'
import Team from './Team'
import Buttons from './Buttons'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HomeGAV/>
            <Buttons />
            <Team />            
        </div>
    )
}

export default Home
