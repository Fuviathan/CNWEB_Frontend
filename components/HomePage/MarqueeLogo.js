import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function MarqueeLogo() {
  return (
    <div className='relative flex w-full overflow-x-hidden'>
      <div className='flex w-full py-12 whitespace-nowrap animate-marquee'>
        <img src='/brand-01.png' alt='brand' />
        <img src='/brand-02.png' alt='brand' />
        <img src='/brand-03.png' alt='brand' />
        <img src='/brand-04.png' alt='brand' />
        <img src='/brand-05.png' alt='brand' />
        <img src='/brand-06.png' alt='brand' />
        <img src='/brand-07.png' alt='brand' />
        <img src='/brand-08.png' alt='brand' />
      </div>
      <div className='flex w-full py-12 whitespace-nowrap animate-marquee2' aria-hidden='true'>
        <img src='/brand-01.png' alt='brand' />
        <img src='/brand-02.png' alt='brand' />
        <img src='/brand-03.png' alt='brand' />
        <img src='/brand-04.png' alt='brand' />
        <img src='/brand-05.png' alt='brand' />
        <img src='/brand-06.png' alt='brand' />
        <img src='/brand-07.png' alt='brand' />
        <img src='/brand-08.png' alt='brand' />
      </div>
    </div>

  )
}
