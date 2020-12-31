import React, { useEffect, useRef } from 'react'
import { IMGLogo } from '../../assets'
import { FaSearch, FaTimes } from 'react-icons/fa'

const Sidebar = ({
  toggleSidebar,
  showSidebar,
  sidebarSearch,
  toggleSidebarSearch,
  showSidebarSearch,
}) => {
  const inputRef = useRef(null)
  useEffect(() => {
    if (sidebarSearch) {
      inputRef.current.focus()
    }
  }, [sidebarSearch])

  return (
    <div className='fixed min-h-screen h-full w-full p-10 top-0 right-0 z-50 bg-white'>
      <div>
        <div className='flex justify-between items-center'>
          <img src={IMGLogo} className='' alt='logo' />
          <div className='flex items-center space-x-5'>
            {showSidebar && !sidebarSearch ? (
              <span className='cursor-pointer' onClick={showSidebarSearch}>
                <FaSearch />
              </span>
            ) : (
              ''
            )}
            <span
              className='lg:hidden block ml-3 cursor-pointer'
              onClick={toggleSidebar}
            >
              <FaTimes />
            </span>
          </div>
        </div>
        {showSidebar && sidebarSearch ? (
          <>
            <div className='relative mt-10'>
              <input
                ref={inputRef}
                type='text'
                className='text-sm w-full rounded-md border-2 pr-10 pl-5 py-2 focus:outline-none focus:border-purple-400'
                placeholder='Search...'
              />
              <span
                className='cursor-pointer absolute right-3 top-3 text-gray-400'
                onClick={toggleSidebarSearch}
              >
                <FaSearch />
              </span>
            </div>
          </>
        ) : showSidebar ? (
          <>
            <div className='flex flex-col mt-10 space-y-6'>
              <a href='/' className='hover:opacity-100 text-xl '>
                Sell
              </a>
              <a href='/' className='hover:opacity-100 text-xl opacity-70'>
                Marketplace
              </a>
              <a href='/' className='hover:opacity-100 text-xl opacity-70'>
                Community
              </a>
              <a href='/' className='hover:opacity-100 text-xl opacity-70'>
                Develop
              </a>
              <a href='/' className='hover:opacity-100 text-xl opacity-70'>
                Resource
              </a>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <div className='fixed bottom-5 w-full left-0 px-10'>
        {showSidebar && sidebarSearch ? (
          <>
            <button
              type='button'
              className='px-4 py-2 w-full shadow bg-purple-600 rounded-lg font-medium text-white'
            >
              Search
            </button>
          </>
        ) : showSidebar ? (
          <div className='flex justify-between items-center'>
            <button
              type='button'
              className='px-4 py-2 bg-purple-600 rounded-lg font-medium text-white'
            >
              Get Started
            </button>
            <div>
              <span className='mr-4'>or</span>
              <button
                type='button'
                className='px-4 py-2 rounded-lg bg-gray-300 text-gray-700'
              >
                Log In
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Sidebar
