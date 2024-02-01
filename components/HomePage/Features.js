import React from 'react'
import { TruckIcon, GiftIcon, DevicePhoneMobileIcon, ReceiptPercentIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import { Gif } from '@mui/icons-material'


export default function features() {
  return (
    <>
        <div className='flex flex-row justify-between my-16'>
            <div className='flex flex-row items-center'>
                <TruckIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Free Shipping</div>
                    <div className='mt-2 text-sm text-left'>From all orders over 5$</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <GiftIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Daily Supprise Offers</div>
                    <div className='mt-2 text-sm text-left'>Save upto 25% off</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <DevicePhoneMobileIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Support 24/7</div>
                    <div className='mt-2 text-sm text-left'>Shop with an expert</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <ReceiptPercentIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Affordable Prices</div>
                    <div className='mt-2 text-sm text-left'>Get Factory Default Price</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>    
                <CreditCardIcon className='w-10 h-10 mr-4' />
                <div className='flex flex-col'>
                    <div className='font-bold tracking-wide text-left'>Secure Payment</div>
                    <div className='mt-2 text-sm text-left'>100% Protected Payment</div>
                </div>
            </div>
        </div>
    </>
  )
}
