import React, { useEffect, useRef, useState } from 'react'
import { IMGLogo } from '../../assets'
import { FaSearch, FaBars } from 'react-icons/fa'

const Navbar = ({ toggleSidebar, toggleSidebarSearch, sidebarSearch }) => {
  const inputRef = useRef(null)
  const wrapperInput = useRef()
  const [search, setSearch] = useState(false)
  const toggleSearch = () => setSearch(!search)
  useEffect(() => {
    if (search) {
      inputRef.current.focus()
    }
  }, [search])
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperInput.current.contains(e.target)) {
        return
      }
      setSearch(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])
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
          <div
            className={`relative ${search ? 'block' : 'hidden'}`}
            ref={wrapperInput}
          >
            <input
              ref={inputRef}
              type='text'
              className='text-sm w-80 rounded-md border-2 pr-10 pl-5 py-2 focus:outline-none focus:border-purple-400'
              placeholder='Search...'
            />
            <span
              className='cursor-pointer absolute right-3 top-3 text-gray-400'
              onClick={toggleSearch}
            >
              <FaSearch />
            </span>
          </div>
          {!search && (
            <>
              <button
                type='button'
                className='px-4 py-2 font-medium lg:block hidden'
              >
                Log In
              </button>
              <button
                type='button'
                className='px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded font-medium text-white lg:block hidden'
              >
                Get Started
              </button>
              <span
                className='cursor-pointer lg:block hidden'
                onClick={toggleSearch}
              >
                <FaSearch />
              </span>
            </>
          )}
          <div className='flex'>
            <span
              className='cursor-pointer lg:hidden block'
              onClick={toggleSidebarSearch}
            >
              <FaSearch />
            </span>
            <span
              className='lg:hidden block ml-4 cursor-pointer'
              onClick={toggleSidebar}
            >
              <FaBars />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
