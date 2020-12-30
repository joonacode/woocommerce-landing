import React from 'react'
import {
  IMGDotOneH,
  IMGDotTwoV,
  IMGQuote,
  IMGUser1,
  IMGUser2,
  IMGUser3,
  IMGUser4,
  IMGUser5,
  IMGUser6,
} from '../../assets'
import './testimoni.css'

const Testimoni = () => {
  return (
    <div className='bg-testimoni relative mt-60'>
      <div className='container mx-auto px-10'>
        <h2 className='text-center font-bold text-4xl'>
          Trusted by Agencies <br /> & Store Owners
        </h2>
        <div className='flex item-center justify-center mt-20 relative'>
          <div className='bg-white shadow-lg w-2/5 relative rounded-2xl z-10  p-16'>
            <p className='text-center relative text-gray-400 z-50'>
              No other eCommerce platform allows people to start for free and
              grow their store as their business grows. More importantly,
              WooCommerce doesn't charge you a portion of your profits as your
              business grows!
            </p>
            <div className='absolute z-10 top-0 img-quote'>
              <img src={IMGQuote} className='h-40 w-40' alt='quote' />
            </div>
          </div>
          <img
            src={IMGDotOneH}
            className='dot-testimoni-1 absolute'
            alt='quote'
          />
          <img
            src={IMGDotTwoV}
            className='dot-testimoni-2 absolute'
            alt='quote'
          />
          <img
            src={IMGUser1}
            className='testimoni-user1 rounded-full shadow-xl absolute'
            alt='user1'
          />
          <img
            src={IMGUser2}
            className='testimoni-user2 rounded-full shadow-xl absolute'
            alt='user1'
          />
          <img
            src={IMGUser3}
            className='testimoni-user3 rounded-full shadow-xl absolute'
            alt='user1'
          />
          <img
            src={IMGUser4}
            className='testimoni-user4 rounded-full shadow-xl absolute'
            alt='user1'
          />
          <img
            src={IMGUser5}
            className='testimoni-user5 rounded-full shadow-xl absolute'
            alt='user1'
          />
          <img
            src={IMGUser6}
            className='testimoni-user6 rounded-full shadow-xl absolute'
            alt='user1'
          />
        </div>
      </div>
    </div>
  )
}

export default Testimoni
