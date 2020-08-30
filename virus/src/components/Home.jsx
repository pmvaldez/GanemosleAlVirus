import React from 'react'
import HomeGAV from './Home-GAV'
 import Team from './Team'
import CardIndex from './CardIndex'
import Footer from './Footer'
import ButtonsPrue from './ButtonsPrue'
import NavbarPage from './NavbarPage'

const Home = () => {
    return (
        <div>
            <NavbarPage/>
            <HomeGAV/>
            <ButtonsPrue />
            <CardIndex />
            <Team />   
            <Footer />  
        </div>
    )
}

export default Home
