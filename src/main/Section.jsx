'use client'
import React from 'react'
import BookCard from './BookCard'

function Section() {
  const books = [
    {img:"src/assets/book1.jpg",
      name:"Lord of the Rings",
      a_name:"The hobbit",
      price:500,
      n_price:300
    },
    {img:"src/assets/book2.jpg",
      name:"The Origin of species",
      a_name:"charles darwin",
      price:400,
      n_price:300
    },
    {img:"src/assets/book3.jpg",
      name:"Harry potter",
      a_name:"unknown",
      price:600,
      n_price:400
    },
    {img:"src/assets/book4.jpg",
      name:"The famous five",
      a_name:"unknown",
      price:500,
      n_price:250
    },
    {img:"src/assets/book5.jpg",
      name:"the lighthouse princess",
      a_name:"vishesh",
      price:400,
      n_price:200
    },
    {img:"src/assets/book6.jpg",
      name:"The Lord of the rings",
      a_name:"L.R.R tolsien",
      price:500,
      n_price:500
    },
  ];

  const arrayDataitems = books.map((bookdata)=><BookCard book={bookdata}/>);

  return (
    <>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
    {arrayDataitems}
    </div>
    </>
  )
}

export default Section