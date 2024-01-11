import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function SecondRow() {
    return (
        <div className='grid items-center grid-cols-6 py-4 bg-gray-900'>
            <a href='Abcd' className='px-5 mb-0 font-sans text-3xl font-semibold tracking-wide text-white hover:cursor-pointer'>
                Digitic
            </a>
            <div className='relative flex flex-row items-stretch w-full col-span-2 focus:ring-0 border-[1px] border-[ced4da] rounded-full flex-warp'>
                <input
                    type='text'
                    className='w-full px-3 py-2 focus:bg-white focus:outline-none rounded-full bg-[#212529]'
                    placeholder='Search Product Here ...'
                />
                <div className='absolute top-0 bottom-0 right-0 flex px-4 py-2 align-middle bg-orange-200 rounded-r-full hover:cursor-pointer'>
                    <MagnifyingGlassIcon className='w-6 h-6 text-center text-black text' />
                </div>
            </div>
            <div className='px-5 mb-0 text-white text-end'>
                tel: +84 12345678
            </div>
        </div>
    )
}
