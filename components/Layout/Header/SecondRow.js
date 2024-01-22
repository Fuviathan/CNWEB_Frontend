import React from 'react'

export default function SecondRow() {
  return (
    <div className='w-full bg-[#baaf9d]'>
      <div className='flex items-center max-w-[1320px] p-4 text-sm leading-5 font-normal mx-auto text-white'>
        <a className='pr-5 mb-0 font-medium text-white uppercase hover:cursor-pointer hover:opacity-75'>
          Home
        </a>
        <a className='px-5 mb-0 font-medium text-white uppercase hover:cursor-pointer hover:opacity-75'>
          Our Store
        </a>
        <a className='px-5 mb-0 font-medium text-white uppercase hover:cursor-pointer hover:opacity-75'>
          Orders
        </a>
        <a className='px-5 mb-0 font-medium text-white uppercase hover:cursor-pointer hover:opacity-75'>
          Contact
        </a>
      </div>
    </div>
  )
}
