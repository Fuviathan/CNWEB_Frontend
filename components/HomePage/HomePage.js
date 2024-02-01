import React from 'react'
import Carousel from './Carousel/Carousel'
import Features from './Features'
import MarqueeLogo from './MarqueeLogo'
import ItemIntroduce from './ItemIntroduce'
import PopularProduct from './PopularProduct/PopularProduct'

export default function HomePage() {
  return (
    <div className='mx-auto max-w-[1320px] min-h-fit'>
      <Carousel />
      <Features />
      <ItemIntroduce />
      <MarqueeLogo />
      <PopularProduct />
    </div>
  )
}
