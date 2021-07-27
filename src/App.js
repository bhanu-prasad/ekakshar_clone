import React from 'react'
import NavBar from "./components/home_components/navbar"
import HomeHero from "./components/home_components/home_hero"
import Dummy from "./components/home_components/dummy"
import Aboutus from "./components/home_components/aboutus"
export default function App() {
  return (
    <>
        <NavBar />
        <HomeHero />
        <Aboutus/>
        <Dummy/>
    </>
  )
}
