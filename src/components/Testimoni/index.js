import React, { useEffect, useRef } from 'react'
import {
  IMGDotOneH,
  IMGDotTwoV,
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
import { dataTestimoni } from './dataTestimoni'
import TestimoniItem from '../TestimoniItem'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='bg-testimoni relative lg:mt-30 md:mt-10 mt-36 pt-10 overflow-hidden'>
      <div className='container mx-auto px-10'>
        <h2
          className='text-center font-bold text-4xl'
          data-aos='zoom-in-up'
          data-aos-duration='1000'
        >
          Trusted by Agencies <br /> & Store Owners
        </h2>
        <div
          className='flex item-center justify-center mt-20 relative'
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          <div className='slider-width relative z-10'>
            <Slider {...settings} className='' ref={sliderRef}>
              {dataTestimoni.map((item, i) => (
                <TestimoniItem {...item} key={i} />
              ))}
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
