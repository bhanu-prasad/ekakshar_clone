import React from 'react'
import NavBar from "./components/home_components/navbar"
import HomeHero from "./components/home_components/home_hero"

import Aboutus from "./components/home_components/aboutus"
import Talkwithus from "./components/home_components/talkwithus"
import Footer from "./components/home_components/footer"
import Customers from "./components/home_components/customers"
import Whyek from "./components/home_components/whyek"
export default function App() {
  return (
    <>
        <NavBar />
        <HomeHero />
        <Aboutus/>
        <Whyek />
        <Customers/>
        <Talkwithus/>
        <Footer/>
        
    </>
  )
}
