"use client"
import React, { useState } from 'react'

function BookCard() {
  const [name, setname] = useState('the Coos Library');
  const [a_name, seta_name]= useState('Vishseh chauhan');
  const [price, setprice] = useState(250);
  const [n_price, setn_price] = useState(200);
  const [discnt, setdiscnt] = useState(20);

  return (
    <>
      <div className='bg-neutral-300 hover:bg-neutral-400 w-40 h-fit m-5 rounded-xl p-2.5 text-black'>
        <div className='bg-none'>
          <img className='h-50 h-max-50 w-max-45 w-45 flex content-center bg-none' src="src/assets/download.png" alt="no image" />
          <div className='h-25 mt-2.5 items-baseline'>
            <p className='text-md '>{name}</p>
            <p className='font-bold text-2.5'>{a_name}</p>
            <div className='mt-2.5'>
              <b id="price" className="px-1 py-2.5">{n_price}</b><del className="text-sm px-1 py-2.5">{price}</del><strong className="text-green-700 px-1 py-2.5">-{discnt}%</strong>
            </div>
            <button className='bg-slate-300 items-center rounded-lg w-full text-black my-1.5 px-4 hover:bg-slate-500 ' id='download'>Download</button>          
          </div>
        </div>
      </div>
    </>
  )
}

export default BookCard