import React, { useRef } from 'react'
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
import Slider from 'react-slick'
import './testimoni.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Testimoni = () => {
  const sliderRef = useRef(null)
  const next = () => sliderRef.current.slickNext()
  const prev = () => sliderRef.current.slickPrev()
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  }
  return (
    <div className='bg-testimoni relative mt-40 pt-10'>
      <div className='container mx-auto px-10'>
        <h2 className='text-center font-bold text-4xl'>
          Trusted by Agencies <br /> & Store Owners
        </h2>
        <div className='flex item-center justify-center mt-20 relative'>
          <div className='slider-width relative z-10'>
            <Slider {...settings} className='' ref={sliderRef}>
              <div className='focus:outline-none'>
                <div className='bg-white shadow-lg relative rounded-2xl z-10  p-16'>
                  <p className='text-center relative text-gray-400 z-50'>
                    No other eCommerce platform allows people to start for free
                    and grow their store as their business grows. More
                    importantly, WooCommerce doesn't charge you a portion of
                    your profits as your business grows!
                  </p>
                  <div className='absolute z-10 top-0 img-quote'>
                    <img src={IMGQuote} className='h-40 w-40' alt='quote' />
                  </div>
                </div>
              </div>
              <div className='focus:outline-none'>
                <div className='bg-white shadow-lg relative rounded-2xl z-10  p-16'>
                  <p className='text-center relative text-gray-400 z-50'>
                    No other eCommerce platform allows people to start for free
                    and grow their store as their business grows. More
                    importantly, WooCommerce doesn't charge you a portion of
                    your profits as your business grows!
                  </p>
                  <div className='absolute z-10 top-0 img-quote'>
                    <img src={IMGQuote} className='h-40 w-40' alt='quote' />
                  </div>
                </div>
              </div>
              <div className='focus:outline-none'>
                <div className='bg-white shadow-lg relative rounded-2xl z-10  p-16'>
                  <p className='text-center relative text-gray-400 z-50'>
                    No other eCommerce platform allows people to start for free
                    and grow their store as their business grows. More
                    importantly, WooCommerce doesn't charge you a portion of
                    your profits as your business grows!
                  </p>
                  <div className='absolute z-10 top-0 img-quote'>
                    <img src={IMGQuote} className='h-40 w-40' alt='quote' />
                  </div>
                </div>
              </div>
              <div className='focus:outline-none'>
                <div className='bg-white shadow-lg relative rounded-2xl z-10  p-16'>
                  <p className='text-center relative text-gray-400 z-50'>
                    No other eCommerce platform allows people to start for free
                    and grow their store as their business grows. More
                    importantly, WooCommerce doesn't charge you a portion of
                    your profits as your business grows!
                  </p>
                  <div className='absolute z-10 top-0 img-quote'>
                    <img src={IMGQuote} className='h-40 w-40' alt='quote' />
                  </div>
                </div>
              </div>
            </Slider>
            <div className='flex items-center cus-slider-nav'>
              <span
                className='text-gray-700 text-2xl mr-2 cursor-pointer'
                onClick={prev}
              >
                <BsArrowLeft />
              </span>
              <span
                className='text-gray-700 text-2xl cursor-pointer'
                onClick={next}
              >
                <BsArrowRight />
              </span>
            </div>
          </div>
          <img
            src={IMGDotOneH}
            className='dot-testimoni-1 absolute md:opacity-100 opacity-30'
            alt='quote'
          />
          <img
            src={IMGDotTwoV}
            className='dot-testimoni-2 absolute md:opacity-100 opacity-30'
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
