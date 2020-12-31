import React, { useEffect } from 'react'
import {
  IMGFeature1,
  IMGFeature1AO,
  IMGFeature1AT,
  IMGFeature2,
  IMGFeature2Facebook,
  IMGFeature2Google,
  IMGFeature2Square,
  IMGFeature3,
  IMGFeature2Mail,
  IMGFeature2Jetpack,
  IMGFeature3a1,
  IMGFeature3a2,
  IMGFeature3a3,
} from '../../assets'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './features.css'

const Features = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div
      className='container mx-auto xl:px-32 lg:px-20 px-10 mb-20 overflow-hidden'
      style={{ marginTop: '-70px' }}
    >
      <h2
        className='text-center mb-10 lg:text-4xl text-3xl font-bold font-circular'
        data-aos='zoom-in-up'
        data-aos-duration='1000'
      >
        Your eCommerce
        <br /> made simple
      </h2>
      <div className='grid md:grid-cols-3 grid-cols-1 lg:gap-x-12 md:gap-x-8 gap-x-0 md:gap-y-0 gap-y-10'>
        <div className='relative' data-aos='fade-up' data-aos-duration='1500'>
          <img
            src={IMGFeature1}
            className='shadow-xl rounded-2xl w-full main-img-features'
            alt='feature1'
          />
          <div className='md:mt-9 sm:mt-16 mt-9'>
            <h3 className='lg:text-2xl md:text-xl text-2xl font-bold font-circular mb-4'>
              All You Need to Start
            </h3>
            <p className='opacity-60 text-sm mb-4'>
              Add WooCommerce plugin to any WordPress site and set up a new
              store in minutes.
            </p>
            <a
              href='/'
              className='hover:underline text-sm text-blue-500 font-medium'
            >
              Ecommerce for Wordpress
            </a>
          </div>
          <img
            src={IMGFeature1AO}
            className='absolute feature1-addone'
            alt='feature1addone'
          />
          <img
            src={IMGFeature1AT}
            className='absolute feature1-addtwo'
            alt='feature1addone'
          />
        </div>
        <div
          className='mt-10 relative'
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          <img
            src={IMGFeature2}
            className='shadow-xl rounded-2xl w-full main-img-features'
            alt='feature1'
          />
          <div className='md:mt-9 sm:mt-16 mt-9'>
            <h3 className='lg:text-2xl md:text-xl text-2xl font-bold font-circular mb-4'>
              Customize and Extend
            </h3>
            <p className='opacity-60 text-sm mb-4'>
              From subscriptions to gym classes to luxury cars, WooCommerce is
              fully customizable.
            </p>
            <a
              href='/'
              className='hover:underline text-sm text-blue-500 font-medium'
            >
              Browser Extension
            </a>
          </div>
          <img
            src={IMGFeature2Facebook}
            className='absolute feature2-fb shadow-xl'
            alt='feature1'
          />
          <img
            src={IMGFeature2Square}
            className='absolute feature2-square shadow-xl'
            alt='feature1'
          />
          <img
            src={IMGFeature2Google}
            className='absolute feature2-google shadow-xl'
            alt='feature1'
          />
          <img
            src={IMGFeature2Mail}
            className='absolute feature2-mail shadow-xl'
            alt='feature1'
          />
          <img
            src={IMGFeature2Jetpack}
            className='absolute feature2-jetpack shadow-xl'
            alt='feature1'
          />
        </div>
        <div
          className='mt-20 relative'
          data-aos='fade-up'
          data-aos-duration='2000'
        >
          <img
            src={IMGFeature3}
            className='shadow-xl rounded-2xl w-full main-img-features'
            alt='feature1'
          />
          <div className='mt-9'>
            <h3 className='lg:text-2xl md:text-xl text-2xl font-bold font-circular mb-4'>
              Active Community
            </h3>
            <p className='opacity-60 text-sm mb-4'>
              WooCommerce is one of the fastest-growing eCommerce communities.
            </p>
            <a
              href='/'
              className='hover:underline text-sm text-blue-500 font-medium'
            >
              Check out Forums
            </a>
          </div>
          <img
            src={IMGFeature3a1}
            className='absolute feature3-a1 shadow-xl'
            alt='feature1'
          />
          <img
            src={IMGFeature3a2}
            className='absolute feature3-a2 shadow-xl'
            alt='feature1'
          />
          <img
            src={IMGFeature3a3}
            className='absolute feature3-a3 shadow-xl'
            alt='feature1'
          />
        </div>
      </div>
    </div>
  )
}

export default Features
