import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules

// const images = [
//   {
//     src: "http://res.cloudinary.com/des2cvikr/image/upload/v1684597121/tsjgfwynjbbyot1t6apg.jpg",
//     alt: "First",
//   },
//   {
//     src: "http://res.cloudinary.com/des2cvikr/image/upload/v1684597121/tsjgfwynjbbyot1t6apg.jpg",
//     alt: "First",
//   },
//   {
//     src: "http://res.cloudinary.com/des2cvikr/image/upload/v1684597121/tsjgfwynjbbyot1t6apg.jpg",
//     alt: "First",
//   },
//   {
//     src: "http://res.cloudinary.com/des2cvikr/image/upload/v1684597121/tsjgfwynjbbyot1t6apg.jpg",
//     alt: "First",
//   },
//   {
//     src: "http://res.cloudinary.com/des2cvikr/image/upload/v1684597121/tsjgfwynjbbyot1t6apg.jpg",
//     alt: "First",
//   },
// ];

export default function SwiperProduct({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#ede2d1",
        }}
        // className={styles.mySwiper2}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-96 w-full rounded-lg"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={image.url}
                className="block h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        centeredSlides={true}
        // className={styles.mySwiper}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-5 h-32 rounded-lg border-2"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <button className="h-full w-full">
              <img src={image.url} className=" h-full w-full object-contain" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
