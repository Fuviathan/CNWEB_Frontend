import React from 'react'

export default function Footer() {
  return (
    <div className='w-full pt-5 pb-3 mt-8 bg-light-brown'>
      <div className='grid grid-cols-4 mx-auto max-w-[1320px]'>
        <div className='px-3 tracking-wide grid-row-5 text-orange-gray'>
          <div className='mb-6 text-2xl font-bold uppercase'>Contact us</div>
          <div className='mb-4 '>Hno: 250 Kim Giang<br></br>Hoang Mai<br></br>Ha Noi</div>
          <div className='mb-2 '>+84 12345678</div>
          <div className='mb-2 '>ElectricalDevice@gmail.com</div>
          <div className=''>Contact us</div>
        </div>
        <div className='px-3 tracking-wide grid-row-4 text-orange-gray'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Information</div>
          <div className='pb-1 mb-2 '>Privacy Policy</div>
          <div className='pb-1 mb-2 '>Shipping Policy</div>
          <div className='pb-1 mb-2 '>Refund Policy</div>
        </div>
        <div className='px-3 tracking-wide grid-row-3 text-orange-gray'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Account</div>
          <div className='pb-1 mb-2 '>About Us</div>
          <div className='pb-1 mb-2 '>Contact</div>
        </div>
        <div className='px-3 tracking-wide text-orange-gray grid-row-3'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Our App</div>
          <div className='mb-2 '>Download our App and get extra 15% Discount on your first Order..!</div>
        </div>
      </div>
    </div>
  )
}
