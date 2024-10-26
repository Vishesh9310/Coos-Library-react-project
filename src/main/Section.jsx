'use client'
import React from 'react'
import BookCard from './BookCard'

function Section() {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-6'>
    
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
  
    </div>
    </>
  )
}

export default Section