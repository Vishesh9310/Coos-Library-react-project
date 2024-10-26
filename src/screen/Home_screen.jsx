'use client'
import React from 'react'
import Section from '../main/Section'
import Footer from '../main/Footer'
import Navbar from '../main/Navbar'
import SearchBar from '../main/SearchBar'

function Home() {
  return (
    <>
    <Navbar/>
    <SearchBar/>
    {/* <Section/> */}
    <Footer/>
    </>
  )
}

export default Home