import React from 'react'
import Carousel from './Carousel/Carousel'
import Features from './Features'


export default function HomePage() {
  return (
    <div className='h-fit max-w-[1320px] mx-auto'>
        <Carousel />
        <Features />


    </div>
  )
}
