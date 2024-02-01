import React from 'react'

export default function ItemIntroduce() {
  return (
    <div className='flex flex-row justify-between mx-auto min-h-fit'>
      <div className='relative flex w-1/4 mx-4 bg-black rounded-lg h-5/6'>
        <img src='/famous-1.webp' className='pt-12 rounded-lg' alt='brand' />
        <div className='absolute z-10 w-full h-full px-4 pt-6 text-white'>
          <div className='mb-4 text-2xl font-bold'>Smart Watch Series 7</div>
          <div className=''>From $399 or $16.62/mo. for 24 mo.*</div>
        </div>
      </div>
      <div className='relative flex w-1/4 mx-4 rounded-lg shadow-lg h-5/6'>
        <div className='absolute z-10 w-full h-full px-4 pt-6 text-black'>
          <div className='mb-4 text-2xl font-bold'>Room-filling sound</div>
          <div className=''>From $699 or $116.58/mo. for 12 mo.*</div>
        </div>
        <img src='/sound.webp' className='pt-12 rounded-lg' alt='brand' /> 
      </div>    
      <div className='relative flex w-1/4 mx-4 rounded-lg shadow-lg h-5/6'>
        <div className='absolute z-10 w-full h-full px-4 pt-6 text-black '>
          <div className='mb-4 text-2xl font-bold'>600 nit of brightness</div>
          <div className=''>27-inch 5K retina display</div>
        </div>
        <img src='/laptop.webp' className='pt-12 rounded-lg' alt='brand' /> 
      </div>   
      <div className='relative flex w-1/4 mx-4 rounded-lg shadow-lg h-5/6'>
        <div className='absolute z-10 w-full h-full px-4 pt-6 text-black'>
          <div className='mb-4 text-2xl font-bold'>Smartphone 13 Pro</div>
          <div className=''>Now in Green. From $999.00 or $41.62/mo. for 24 mo. </div>
        </div>
        <img src='/smartphone.webp' className='pt-12 rounded-lg' alt='brand' />
      </div>
    </div>

  )
}
