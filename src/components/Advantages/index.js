import React, { useEffect } from 'react'
import {
  IMGAdvantage1,
  IMGAdvantage2,
  IMGCircleBig,
  IMGCircleSmall,
  IMGDotTwoV,
} from '../../assets'
import './advantages.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Advantages = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='bg-advantages mt-40 text-white'>
      <div className='container mx-auto xl:px-36 lg:px-20 px-10'>
        <div className='grid grid-cols-12 relative'>
          <div
            className='2xl:col-span-4 lg:col-span-5 col-span-6 md:block hidden relative z-10'
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            <img
              src={IMGAdvantage1}
              style={{ marginTop: '-80px' }}
              className='shadow-2xl rounded-2xl'
              alt='advantages1'
            />
          </div>
          <div
            className='md:col-span-6 col-span-12 md:ml-10 md:mt-20 mt-28'
            data-aos='fade-down'
            data-aos-duration='1500'
          >
            <h3 className='text-4xl font-bold mb-4 font-circular leading-10'>
              Develop <br /> Without Limits
            </h3>
            <p className='opacity-90 mb-5 leading-7'>
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable and can integrate with virtually any
              service. Design a complex store from scratch, extend a store for a
              client, or simply add a single product to a WordPress site—your
              store, your way.
            </p>
            <button
              type='button'
              className='px-6 py-4 outline-none bg-yellow-500 hover:bg-yellow-400 text-sm font-semibold text-white rounded-full focus:outline-none'
            >
              Read the Documentation
            </button>
          </div>
          <img
            src={IMGDotTwoV}
            className='absolute dot-a-v md:opacity-100 opacity-50'
            alt='dot'
          />
          <img
            src={IMGCircleSmall}
            className='absolute circle-a-s md:opacity-100 opacity-20'
            alt='circle-small'
          />
          <img
            src={IMGCircleBig}
            className='absolute circle-a-b md:opacity-100 opacity-20'
            alt='circle-big'
          />
        </div>
        <div className='grid grid-cols-12 relative mt-20'>
          <div className='2xl:col-span-2 2xl:block hidden col-ghost'></div>
          <div
            className='md:col-span-6 col-span-12 ml-auto md:mr-16'
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            <h3 className='text-4xl font-bold mb-4 font-circular leading-10'>
              Know our <br />
              Global Community
            </h3>
            <p className='opacity-90 mb-5 leading-7'>
              WooCommerce is one of the fastest-growing eCommerce communities.
              We’re proud that the helpfulness of the community and a wealth of
              online resources are frequently cited as reasons our users love
              it. There are 80+ meetups worldwide!
            </p>
            <button className='px-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-sm font-semibold text-white rounded-full focus:outline-none'>
              Read the Documentation
            </button>
          </div>
          <div
            className='2xl:col-span-4 lg:col-span-5 col-span-6 md:block hidden z-10 relative'
            data-aos='fade-down'
            data-aos-duration='1500'
          >
            <img
              src={IMGAdvantage2}
              className='shadow-2xl rounded-2xl'
              alt='advantages1'
            />
          </div>
          <img
            src={IMGDotTwoV}
            className='absolute dot-a-h md:opacity-100 opacity-50'
            alt='dot'
          />
          <img
            src={IMGCircleSmall}
            className='absolute circle-a-st z-20 md:opacity-100 opacity-20'
            alt='circle-small'
          />
          <img
            src={IMGCircleBig}
            className='absolute circle-a-bt md:opacity-100 opacity-20'
            alt='circle-big'
          />
        </div>
      </div>
    </div>
  )
}

export default Advantages
