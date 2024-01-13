import React from 'react'

export default function Footer() {
  return (
    <div className='w-full py-3 bg-gray-900'>
      <div className='grid grid-cols-4 mx-auto max-w-[1320px]'>
        <div className='px-3 grid-row-5'>
          <div className='mb-6 text-white uppercase'>Contact us</div>
          <div className='mb-4 text-white'>Hno: 250 Kim Giang<br></br>Hoang Mai<br></br>Ha Noi</div>
          <div className='mb-2 text-white'>+84 12345678</div>
          <div className='mb-2 text-white'>ElectricalDevice@gmail.com</div>
          <div className='text-white'>Contact us</div>
        </div>
        <div className='px-3 grid-row-4'> 
          <div className='mb-6 text-white uppercase'>Information</div>
          <div className='pb-1 mb-2 text-white'>Privacy Policy</div>
          <div className='pb-1 mb-2 text-white'>Shipping Policy</div>
          <div className='pb-1 mb-2 text-white'>Refund Policy</div>
        </div>
        <div className='px-3 grid-row-3'> 
          <div className='mb-6 text-white uppercase'>Account</div>
          <div className='pb-1 mb-2 text-white'>About Us</div>
          <div className='pb-1 mb-2 text-white'>Contact</div>
        </div>
        <div className='px-3 grid-row-3'> 
          <div className='mb-6 text-white uppercase'>Our App</div>
          <div className='mb-2 text-white'>Download our App and get extra 15% Discount on your first Order..!</div>
        </div>
      </div>
    </div>
  )
}
