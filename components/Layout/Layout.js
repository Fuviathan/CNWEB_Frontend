import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function Layout(props) {
  return (
    <div className='flex flex-col justify-between min-h-screen bg-white h-fit'>
      <div>
        <Header />
      </div>
      {props.children}
      <Footer />
    </div>
  )
}
