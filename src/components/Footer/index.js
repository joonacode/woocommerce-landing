import React from 'react'
import {
  ICAutomatic,
  ICCheck,
  ICFacebook,
  ICInstagram,
  ICRss,
  ICSecure,
  ICSupport,
  ICTwitter,
  IMGLogoWhite,
} from '../../assets'

const Footer = () => {
  return (
    <div className='z-10 relative'>
      <div className='bg-purple-700 py-20 flex items-center justify-center text-white'>
        <div className='container mx-auto 2xl:px-40 lg:px-20 px-10'>
          <div className='w-full'>
            <h5 className='md:text-2xl text-lg md:w-9/12 sm:w-3/5 w-full float-left'>
              WooCommerce - the <b>most customizable eCommerce platform</b> for
              building
              <b>your online business</b>.
            </h5>
            <div className='sm:float-right float-left sm:mt-0 mt-8'>
              <button className='ring-2 px-10 py-2 rounded-full'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-purple-600 text-white clearfix'>
        <div className='border-b border-purple-500 pt-10 pb-20'>
          <div className='container mx-auto 2xl:px-40 xl:px-20 px-10'>
            <div className='flex justify-center md:flex-row flex-col items-center md:space-y-4 md:space-x-10'>
              <div className='flex items-center lg:flex-row md:flex-col flex-row md:mb-0 mb-5'>
                <img src={ICCheck} className='w-8 mr-3' alt='check' />
                <p className='text-center lg:mt-0 md:mt-6'>
                  30 day <b>money back guarantee</b>
                </p>
              </div>
              <div className='flex items-center lg:flex-row md:flex-col flex-row md:mb-0 mb-5'>
                <img src={ICSupport} className='w-8 mr-3' alt='support' />

                <p className='text-center lg:mt-0 md:mt-6'>
                  <b>Support</b> teams across the web
                </p>
              </div>
              <div className='flex items-center lg:flex-row md:flex-col flex-row'>
                <img src={ICSecure} className='w-8 mr-3' alt='secure' />

                <p className='text-center lg:mt-0 md:mt-6'>
                  <b>Safe & Secure</b> online payment
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <img src={IMGLogoWhite} className='w-36 mt-20' alt='logo' />
            </div>
          </div>
        </div>
        <div className='py-16 container mx-auto lg:px-40 px-10'>
          <div className='grid md:grid-cols-5 md:gap-x-5 md:gap-y-0 gap-y-10 grid-cols-1 md:text-left text-center'>
            <div>
              <h5 className='font-bold mb-5 uppercase'>Who We Are</h5>
              <div className='flex flex-col space-y-2'>
                <a href='/' className='text-sm'>
                  About
                </a>
                <a href='/' className='text-sm'>
                  Team
                </a>
                <a href='/' className='text-sm'>
                  Work With Us
                </a>
              </div>
            </div>
            <div>
              <h5 className='font-bold mb-5 uppercase'>WooCommerce</h5>
              <div className='flex flex-col space-y-2'>
                <a href='/' className='text-sm'>
                  Features
                </a>
                <a href='/' className='text-sm'>
                  Payments
                </a>
                <a href='/' className='text-sm'>
                  Marketing
                </a>
                <a href='/' className='text-sm'>
                  Shipping
                </a>
                <a href='/' className='text-sm'>
                  Extension Store
                </a>
                <a href='/' className='text-sm'>
                  eCommerce Blog
                </a>
                <a href='/' className='text-sm'>
                  Development blog
                </a>
                <a href='/' className='text-sm'>
                  Ideas board
                </a>
                <a href='/' className='text-sm'>
                  Mobile App
                </a>
                <a href='/' className='text-sm'>
                  Community
                </a>
                <a href='/' className='text-sm'>
                  Style Guide
                </a>
                <a href='/' className='text-sm'>
                  Email Newsletter
                </a>
              </div>
            </div>
            <div>
              <h5 className='font-bold mb-5 uppercase'>Other Product</h5>
              <div className='flex flex-col space-y-2'>
                <a href='/' className='text-sm'>
                  Storefront
                </a>
                <a href='/' className='text-sm'>
                  WooSlider
                </a>
                <a href='/' className='text-sm'>
                  Sensei
                </a>
                <a href='/' className='text-sm'>
                  Sensei Extension
                </a>
              </div>
            </div>
            <div>
              <h5 className='font-bold mb-5 uppercase'>Support</h5>
              <div className='flex flex-col space-y-2'>
                <a href='/' className='text-sm'>
                  Documentation
                </a>
                <a href='/' className='text-sm'>
                  Customizations
                </a>
                <a href='/' className='text-sm'>
                  Support Policy
                </a>
                <a href='/' className='text-sm'>
                  Contact
                </a>
                <a href='/' className='text-sm'>
                  COVID-19 Resources
                </a>
                <a href='/' className='text-sm'>
                  Privacy Notice For
                </a>
                <a href='/' className='text-sm'>
                  California Users
                </a>
              </div>
            </div>
            <div>
              <h5 className='font-bold mb-5 uppercase'>We Recommend</h5>
              <div className='flex flex-col space-y-2'>
                <a href='/' className='text-sm'>
                  WooExperts
                </a>
                <a href='/' className='text-sm'>
                  Hosting Solutions
                </a>
                <a href='/' className='text-sm'>
                  Pre-Sales FAQ
                </a>
                <a href='/' className='text-sm'>
                  Success Stories
                </a>
                <a href='/' className='text-sm'>
                  Design Feedback Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container py-6 relative mx-auto px-10 flex lg:flex-row flex-col lg:space-y-0 space-y-7 items-center justify-between'>
        <div className='flex space-x-5'>
          <img src={ICTwitter} className='w-4' alt='twitter' />
          <img src={ICFacebook} className='w-4' alt='facebook' />
          <img src={ICRss} className='w-4' alt='rss' />
          <img src={ICInstagram} className='w-4' alt='instagram' />
        </div>
        <p className='text-xs text-center'>
          COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
        </p>
        <div>
          <img src={ICAutomatic} alt='automatic' />
        </div>
      </div>
    </div>
  )
}

export default Footer
