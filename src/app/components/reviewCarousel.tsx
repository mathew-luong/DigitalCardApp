"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ReviewCarousel() {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            className="w-full h-full"
        >
            <SwiperSlide className="text-center flex justify-center items-center mb-8">
                <h1 className="header2 font-bold mb-4">
                    “Having a digital business card at the palm of my hands has
                    been a game changer. The ease of use and level of
                    customization is incredible!”
                </h1>
                <h2 className="text-grayText">Mathew L, CEO of MovieFinder</h2>
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center mb-8">
                <h1 className="header2 font-bold mb-4">
                    “Time savings is the most important thing for us. It&apos;s
                    been massive. I can share with 50 people in five seconds
                    with eBizz. It truly is amazing!”
                </h1>
                <h2 className="text-grayText">
                    Dwayne Johnson, President of Facebook
                </h2>
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center mb-8">
                <h1 className="header2 font-bold mb-4">
                    “Ever since I started using eBizz my life has been so much
                    easier. Now I can network quicker than ever and make life
                    long connections!”
                </h1>
                <h2 className="text-grayText">Nico G, Enterpreneur</h2>
            </SwiperSlide>
        </Swiper>
    );
}
