"use client"
import React, { useState } from 'react'

function BookCard(props) {
  const image = props.book.img;
  const name = props.book.name;
  const a_name = props.book.a_name;
  const price = props.book.price;
  const n_price = props.book.n_price;
  const disc = ((n_price/price)*100).toFixed(1);
  // const disc = ((n_price/price)*100).toFixed(2).substring(2);
  // const disc = Math.floor((n_price/price)*100);

  return (
    <>
      <div className='bg-neutral-300 bg-gradient-to-b from-pink-300 to-blue-300 w-40 h-72 m-5 rounded-xl p-2.5 text-black'>
        <div className='bg-none'>

          <div  className='h-32 h-min-28 w-min-28 flex content center bg-none'>
          <img src={image} alt=" no load" className='h-full w-full'/>
          </div>

          <div className='h-16 mt-2.5 items-baseline'>
            <p className='text-sm text-slate-900 h-max-10 h-min-6'>{name}</p>
            <p className='font-bold text-slate-600 h-4'>{a_name}</p>    
          </div>

          <div>
            <b id="price" className="px-1 py-2.5">{n_price}</b><del className="text-sm px-1 py-2.5">{price}</del><strong className="text-green-700 px-1 py-2.5">-{disc}%</strong>
            <button className='bg-blue-400 items-center rounded-lg w-full text-black my-1.5 px-4 hover:bg-blue-200' id='download'>Download</button>          
          </div>

         </div>
      </div>
    </>
  )
}

export default BookCard