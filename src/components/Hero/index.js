import React from 'react'
import { IMGHero } from '../../assets'
import './hero.css'

const Hero = () => {
  return (
    <div className='bg-hero overflow-hidden'>
      <div className='container relative mx-auto lg:px-20 px-10'>
        <div className='flex'>
          <div className='md:w-1/2 w-full'>
            <h1 className='lg:text-6xl text-4xl md:text-left text-center font-bold mb-8 font-circular'>
              Building exactly the eCommerce website you want.
            </h1>
            <p className='text-gray-500 mb-5 md:text-left text-center'>
              WooCommerce is a customizable, open-source eCommerce platform
              built on WordPress. Get started quickly and make your way.
            </p>
            <div className='flex lg:flex-row flex-col lg:items-center md:items-start items-center lg:space-x-2 lg:space-y-0 space-y-1'>
              <button
                type='button'
                className='focus:outline-none hover:bg-purple-700 px-10 py-3 text-sm font-medium bg-purple-600 text-white rounded-full'
              >
                Get a New Store
              </button>
              <span className='opacity-50'>or</span>
              <span className='text-blue-500 font-medium cursor-pointer hover:underline'>
                Customize & Extended{' '}
              </span>
            </div>
          </div>
          <div className='md:block hidden'>
            <img src={IMGHero} className='img-hero' alt='img-hero' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
