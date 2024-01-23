import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='flex flex-col items-center justify-center animate-fade-up animate-once animate-duration-[1000ms]'>
        <img src={logo} alt="" srcset="" className='rounded-full mt-[8rem] mb-[2rem] w-[15rem]'/>
        <h1 className='font-bold text-[30px] '>CodeGenius Academy</h1>
        <h1 className=''>Welcome to School of Programming</h1>
    </div>
  )
}

export default Header