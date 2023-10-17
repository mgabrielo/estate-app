import {FaSearch} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-800 shadow-md'>
    <div className='flex flex-col justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to={'/'}>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-100'>Grey</span>
                <span className='text-red-500'>Estate</span>
            </h1>
        </Link>
        <ul className='flex gap-4 '>
            <Link to={'/'}>
                <li className='sm:inline text-slate-100 hover:underline'>Home</li>
            </Link>
            <Link to={'/about'}>
                <li className='sm:inline text-slate-100 hover:underline'>About</li>
            </Link>
        </ul>
    </div>
</footer>
  )
}

export default Footer