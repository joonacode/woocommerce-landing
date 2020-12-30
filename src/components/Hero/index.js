import React from 'react'
import { IMGHero } from '../../assets'
import './hero.css'

const Hero = () => {
  return (
    <div className='bg-hero overflow-hidden'>
      <div className='container relative mx-auto px-20'>
        <div className='flex'>
          <div className='w-1/2'>
            <h1 className='text-6xl font-bold mb-8 font-circular'>
              Building exactly the eCommerce website you want.
            </h1>
            <p className='text-gray-500 mb-5'>
              WooCommerce is a customizable, open-source eCommerce platform
              built on WordPress. Get started quickly and make your way.
            </p>
            <div className='flex items-center space-x-2'>
              <button
                type='button'
                className='focus:outline-none px-10 py-3 text-sm font-medium bg-purple-600 text-white rounded-full'
              >
                Get a New Store
              </button>
              <span className='opacity-50'>or</span>
              <span className='text-blue-500 font-medium'>
                Customize & Extended{' '}
              </span>
            </div>
          </div>
          <div className=''>
            <img src={IMGHero} className='img-hero' alt='img-hero' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
