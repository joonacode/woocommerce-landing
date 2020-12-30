import React from 'react'
import { IMGLogo } from '../../assets'
import { FaSearch, FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='container mx-auto py-7 md:px-0 px-10'>
      <div className='flex justify-between items-center'>
        <div className='items-center flex'>
          <img src={IMGLogo} className='' alt='logo' />
          <div className='ml-10 space-x-5 lg:flex hidden'>
            <a href='/' className='hover:opacity-100'>
              Sell
            </a>
            <a href='/' className='hover:opacity-100 opacity-70'>
              Marketplace
            </a>
            <a href='/' className='hover:opacity-100 opacity-70'>
              Community
            </a>
            <a href='/' className='hover:opacity-100 opacity-70'>
              Develop
            </a>
            <a href='/' className='hover:opacity-100 opacity-70'>
              Resource
            </a>
          </div>
        </div>
        <div className='flex items-center space-x-5'>
          <button
            type='button'
            className='px-4 py-2 font-medium lg:block hidden'
          >
            Log In
          </button>
          <button
            type='button'
            className='px-4 py-2 bg-purple-600 rounded font-medium text-white lg:block hidden'
          >
            Get Started
          </button>
          <span className=''>
            <FaSearch />
          </span>
          <span className='lg:hidden block ml-3'>
            <FaBars />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
