import React from 'react'

export default function Footer() {
  return (
    <div className='w-full pb-3 pt-5 mt-8 bg-[#ede2d1]'>
      <div className='grid grid-cols-4 mx-auto max-w-[1320px]'>
        <div className='px-3 grid-row-5 tracking-wide text-[#917a67]'>
          <div className='mb-6 text-2xl font-bold uppercase'>Contact us</div>
          <div className='mb-4 '>Hno: 250 Kim Giang<br></br>Hoang Mai<br></br>Ha Noi</div>
          <div className='mb-2 '>+84 12345678</div>
          <div className='mb-2 '>ElectricalDevice@gmail.com</div>
          <div className=''>Contact us</div>
        </div>
        <div className='px-3 grid-row-4 tracking-wide text-[#917a67]'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Information</div>
          <div className='pb-1 mb-2 '>Privacy Policy</div>
          <div className='pb-1 mb-2 '>Shipping Policy</div>
          <div className='pb-1 mb-2 '>Refund Policy</div>
        </div>
        <div className='px-3 grid-row-3 tracking-wide text-[#917a67]'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Account</div>
          <div className='pb-1 mb-2 '>About Us</div>
          <div className='pb-1 mb-2 '>Contact</div>
        </div>
        <div className='px-3 text-[#917a67] tracking-wide grid-row-3'> 
          <div className='mb-6 text-2xl font-bold uppercase'>Our App</div>
          <div className='mb-2 '>Download our App and get extra 15% Discount on your first Order..!</div>
        </div>
      </div>
    </div>
  )
}
