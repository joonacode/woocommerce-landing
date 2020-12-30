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
    <div style={{ marginTop: '-100px' }} className='z-10 relative'>
      <div className='bg-purple-700 py-20 text-white'>
        <div className='container mx-auto px-40'>
          <div className=' flex items-center space-x-5'>
            <div className='flex-grow'>
              <h5 className='text-2xl'>
                WooCommerce - the <b>most customizable eCommerce platform</b>{' '}
                for building
                <b>your online business</b>.
              </h5>
            </div>
            <div className='flex-grow'>
              <button className='ring-2 px-10 py-2 rounded-full'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-purple-600 text-white'>
        <div className='border-b border-purple-500 pt-10 pb-20'>
          <div className='container mx-auto px-40'>
            <div className='flex justify-center items-center space-x-10 flex-wrap'>
              <div className='flex items-center'>
                <img src={ICCheck} className='w-8 h-8 mr-3' alt='check' />
                <p>
                  30 day <b>money back guarantee</b>
                </p>
              </div>
              <div className='flex items-center'>
                <img src={ICSupport} className='w-8 h-8 mr-3' alt='support' />

                <p>
                  <b>Support</b> teams across the web
                </p>
              </div>
              <div className='flex items-center'>
                <img src={ICSecure} className='w-8 h-8 mr-3' alt='secure' />

                <p>
                  <b>Safe & Secure</b> online payment
                </p>
              </div>
              <img src={IMGLogoWhite} className='w-36 mt-20' alt='logo' />
            </div>
          </div>
        </div>
        <div className='py-16 container mx-auto px-40'>
          <div className='grid grid-cols-5'>
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
      <div className='container py-6 mx-auto px-10 flex items-center justify-between'>
        <div className='flex space-x-5'>
          <img src={ICTwitter} className='w-4' alt='twitter' />
          <img src={ICFacebook} className='w-4' alt='facebook' />
          <img src={ICRss} className='w-4' alt='rss' />
          <img src={ICInstagram} className='w-4' alt='instagram' />
        </div>
        <p className='text-xs'>
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
