import React from 'react'

export default function FirstRow() {
  return (
    <div className='w-full bg-gray-900 border-[#3b4149] border-b-[1px]'>
      <div className='grid max-w-[1320px] items-center grid-cols-2 py-4 text-xs font-normal mx-auto'>
        <div className='px-5 mb-0 font-medium text-white'>
          Free Shipping Over $100 & Free Returns
        </div>
        <div className='px-5 mb-0 font-medium text-white text-end'>
          tel: +84 12345678
        </div>
      </div>
    </div>
  )
}
