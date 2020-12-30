import React from 'react'
import {
  IMGAdvantage1,
  IMGAdvantage2,
  IMGCircleBig,
  IMGCircleSmall,
  IMGDotTwoV,
} from '../../assets'
import './advantages.css'

const Advantages = () => {
  return (
    <div className='bg-advantages mt-40 text-white'>
      <div className='container mx-auto px-36'>
        <div className='grid grid-cols-12 relative'>
          <div className='col-span-4 relative z-10'>
            <img
              src={IMGAdvantage1}
              style={{ marginTop: '-80px' }}
              className='shadow-2xl'
              alt='advantages1'
            />
          </div>
          <div className='col-span-6 ml-10 w-3/5 mt-20'>
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
            <button className='px-6 py-4 bg-yellow-500 text-sm font-semibold text-white rounded-full focus:outline-none'>
              Read the Documentation
            </button>
          </div>
          <img src={IMGDotTwoV} className='absolute dot-a-v' alt='dot' />
          <img
            src={IMGCircleSmall}
            className='absolute circle-a-s'
            alt='circle-small'
          />
          <img
            src={IMGCircleBig}
            className='absolute circle-a-b'
            alt='circle-big'
          />
        </div>
        <div className='grid grid-cols-12 relative mt-20'>
          <div className='col-span-8 w-3/5 ml-auto mr-16'>
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
            <button className='px-6 py-4 bg-yellow-500 text-sm font-semibold text-white rounded-full focus:outline-none'>
              Read the Documentation
            </button>
          </div>
          <div className='col-span-4 z-10 relative'>
            <img src={IMGAdvantage2} className='shadow-2xl' alt='advantages1' />
          </div>
          <img src={IMGDotTwoV} className='absolute dot-a-h' alt='dot' />
          <img
            src={IMGCircleSmall}
            className='absolute circle-a-st z-20'
            alt='circle-small'
          />
          <img
            src={IMGCircleBig}
            className='absolute circle-a-bt'
            alt='circle-big'
          />
        </div>
      </div>
    </div>
  )
}

export default Advantages
