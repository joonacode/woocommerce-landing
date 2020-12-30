import React from 'react'
import { IMGLogo } from '../../assets'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='container mx-auto py-7'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={IMGLogo} className='' alt='logo' />
          <div className='ml-10 flex space-x-5'>
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
          <button type='button' className='px-4 py-2 font-medium'>
            Log In
          </button>
          <button
            type='button'
            className='px-4 py-2 bg-purple-600 rounded font-medium text-white'
          >
            Get Started
          </button>
          <span className=''>
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
