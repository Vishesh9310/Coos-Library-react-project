'use client'
import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <>
    <div id='box'>
        <div id='search_bar'>
            <input id='search_w' type="text" placeholder='Search here...' autofocus='' />
            <img id='search_l' src="src/assets/download.png" alt="Search" />
        </div>
    </div>
    </>
  )
}

export default SearchBar