import React from 'react'
import PopularWrap from './PopularWrap'

export default function PopularProduct() {
    return (
        <div className='flex flex-col mt-16 w-full max-w-[1320px]'>
            <div className='mb-2 text-2xl font-bold text-black'>Một vài sản phẩm của chúng tôi</div>
            {/* <div className='flex flex-col h-full py-2 mr-4 border rounded-lg shadow'>
                <div className='flex items-center px-4 mb-3 h-1/5'>
                    <img src='/camera.jpg' className='w-1/3 mr-4' />
                    <div>Camera</div>
                </div>
                <div className='flex items-center px-4 mb-3 h-1/5'>
                    <img src='/camera.jpg' className='w-1/3 mr-4' />
                    <div>Camera</div>
                </div>
                <div className='flex items-center px-4 mb-3 h-1/5'>
                    <img src='/camera.jpg' className='w-1/3 mr-4' />
                    <div>Camera</div>
                </div>
                <div className='flex items-center px-4 mb-3 h-1/5'>
                    <img src='/camera.jpg' className='w-1/3 mr-4' />
                    <div>Camera</div>
                </div>
                <div className='flex items-center px-4 mb-3 h-1/5'>
                    <img src='/camera.jpg' className='w-1/3 mr-4' />
                    <div>Camera</div>
                </div>
            </div> */}
            {/* <div className='pt-4 px-4 bg-[#4e6073] justify-between shadow flex flex-col max-h-full min-w-fit rounded-lg'>
                <div className='p-2 text-white'>
                    <div className='uppercase'>15% off</div>
                    <div className='my-1 font-bold uppercase'>Home Speakers</div>
                    <div className='text-sm'>From $39 or $16.62/mo for 24mo</div>
                </div>
                    <img src='/apple-loud.png' className='rounded-lg' />
            </div> */}
            <div className='py-2'>
                <PopularWrap />
            </div>
        </div>
    )
}
