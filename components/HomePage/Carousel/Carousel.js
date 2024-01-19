import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

export default function Carousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Mousewheel, Pagination]}
                className="w-full my-4 h-fit"
                loop={true}
            // autoplay={{
            //     delay: 2500,
            // }}
            >
                <SwiperSlide>
                    <div className='flex flex-row p-4 h-[30rem]'>
                        <img className='object-cover w-2/3 rounded-l-lg' src='https://thumbs.dreamstime.com/b/businesswoman-office-casual-shirt-use-computer-graphic-designer-choose-color-sample-to-match-publication-130344292.jpg'></img>
                        <div className='w-1/3 bg-[#ede2d1] flex flex-col px-4 justify-center rounded-r-lg'>
                            <div className='font-sans text-3xl font-bold tracking-widest text-[#917a67] uppercase '>Laptop</div>
                            <div className='font-sans text-2xl font-semibold tracking-wide text-[#917a67]'>We provide modern laptop</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row p-4 h-[30rem]'>
                        <div className='w-1/3 bg-[#ede2d1] flex flex-col px-4 justify-center rounded-l-lg'>
                            <div className='font-sans text-3xl font-bold tracking-widest text-right text-[#917a67] uppercase '>Laptop</div>
                            <div className='font-sans text-2xl font-semibold tracking-wide text-right text-[#917a67]'>We provide modern laptop</div>
                        </div>
                        <img className='object-cover w-2/3 rounded-r-lg' src='https://mockups-design.com/wp-content/uploads/2022/06/Smartphone_on_White_Background_Mockup_1.jpg'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row p-4 h-[30rem]'>
                        <div className='w-1/2 bg-[#ede2d1] flex flex-col px-4 justify-center rounded-l-lg'>
                            <div className='font-sans text-3xl font-bold tracking-widest text-right text-[#917a67] uppercase '>Laptop</div>
                            <div className='font-sans text-2xl font-semibold tracking-wide text-right text-[#917a67]'>We provide modern laptop</div>
                        </div>
                        <img className='object-cover w-1/2 rounded-r-lg' src='https://www.jabra.com/-/media/Images/Category-Pages/Professional/Office/V7-Refresh/wj-01.jpg'></img>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}



