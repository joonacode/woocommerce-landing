import React from 'react'
import { IMGQuote } from '../../assets'

const TestimoniItem = (props) => {
  return (
    <div className='focus:outline-none'>
      <div className='bg-white shadow-lg h-64 flex flex-col justify-center items-center relative rounded-2xl z-10  py-16 sm:px-16 px-10 '>
        <p className='text-center relative text-gray-400 z-50'>
          {props.description}
        </p>
        <div className='absolute z-10 top-0 img-quote'>
          <img src={IMGQuote} className='h-40 w-40 opacity-60' alt='quote' />
        </div>
      </div>
    </div>
  )
}

export default TestimoniItem
