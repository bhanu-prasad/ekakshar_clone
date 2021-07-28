import React from 'react'
import NavBar from "./components/home_components/navbar"
import HomeHero from "./components/home_components/home_hero"
import Dummy from "./components/home_components/dummy"
import Aboutus from "./components/home_components/aboutus"
import Talkwithus from "./components/home_components/talkwithus"
import Footer from "./components/home_components/footer"
import Customers from "./components/home_components/customers"
export default function App() {
  return (
    <>
        <NavBar />
        <HomeHero />
        <Aboutus/>
        <Dummy/>
        <Customers/>
        <Talkwithus/>
        <Footer />
        
    </>
  )
}
