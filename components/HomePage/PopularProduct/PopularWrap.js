import { getProducts } from '@/state/Products/Action'
import React, { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import ProductCard from '@/components/productCard/ProductCard';
import { For } from 'react-haiku';

export default function PopularWrap() {
    const notIconAdd = true
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const productCateGory = useSelector((state) => state?.product?.products)
    const productArray = productCateGory.slice(0, 10)
    console.log(productArray)
    return (
        <Swiper
            // pagination={{
            //     clickable: true,
            // }}
            spaceBetween={30}
            slidesPerView={5}
            mousewheel={true}
            className="max-w-[140vh] min-w-[140vh] my-4 h-fit"
            modules={[Autoplay, Mousewheel, Pagination]}
            loop={true}
            autoplay={{
                delay: 2500,
            }}
        >
            <SwiperSlide>
                <ProductCard item={productArray[6]}></ProductCard>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard item={productArray[1]}></ProductCard>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard item={productArray[2]}></ProductCard>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard item={productArray[3]}></ProductCard>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard item={productArray[4]}></ProductCard>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard item={productArray[5]}></ProductCard>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard item={productArray[7]}></ProductCard>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard item={productArray[8]}></ProductCard>
            </SwiperSlide>
            {/* <For each={productArray} render={(data, index) => 
                <SwiperSlide>
                    <ProductCard item={data}></ProductCard>
                </SwiperSlide>
            }/> */}
        </Swiper>
    )
}
