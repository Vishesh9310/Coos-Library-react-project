import React from 'react'
import { Link } from 'react-router-dom'

function Skip() {
  return (
    <>
    <div className='justify-items-end pt-2 px-8'>
        <div className='hover:bg-cyan-400 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white w-fit h-full rounded-2xl px-2'>
           <Link to="/">As a Guest &gt;&gt;</Link>
        </div>
    </div>
    </>
  )
}

export default Skip