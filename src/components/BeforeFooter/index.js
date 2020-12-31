import React from 'react'
import { IMGCircleSmall, IMGDotOneH, IMGDotTwoV, IMGTeam } from '../../assets'
import './before-footer.css'

const BeforeFooter = () => {
  return (
    <>
      <div className='container relative mx-auto md:px-20 sm:px-10 mt-32 before-footer'>
        <div className='flex flex-col justify-center items-center px-10'>
          <h2 className='text-center mb-6 text-4xl font-bold font-circular'>
            Supported by real people
          </h2>
          <p className='text-center text-sm opacity-60 lg:w-2/5 w-full mb-10'>
            Our team of Happiness Engineers works remotely from 58 countries
            providing customer support across multiple time zones.
          </p>
        </div>
        <div className='relative z-10'>
          <img src={IMGTeam} className='img-team' alt='team' />
        </div>
        <img
          src={IMGCircleSmall}
          className='before-footer-c1 absolute md:opacity-100 opacity-30'
          alt='circle-small'
        />
        <img
          src={IMGCircleSmall}
          className='before-footer-c2 absolute md:opacity-100 opacity-30'
          alt='circle-small'
        />
        <img
          src={IMGDotTwoV}
          className='before-footer-d1 absolute md:opacity-100 opacity-30'
          alt='circle-small'
        />
        <img
          src={IMGDotOneH}
          className='before-footer-d2 absolute md:opacity-100 opacity-30'
          alt='circle-small'
        />
        <img
          src={IMGCircleSmall}
          className='before-footer-c3 absolute md:opacity-100 opacity-30'
          alt='circle-small'
        />
      </div>
    </>
  )
}

export default BeforeFooter