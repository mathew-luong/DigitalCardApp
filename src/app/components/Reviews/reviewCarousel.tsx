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
                delay: 5000,
                disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            className="w-full h-full"
        >
            <SwiperSlide className="flex items-center justify-center mb-8 text-center">
                <h1 className="mb-4 font-bold header2">
                    &quot;Having a digital business card at the palm of my hands
                    has been a game changer. The ease of use is truly
                    incredible!&quot;
                </h1>
                <h2 className="text-grayText">Mathew L, CEO of MovieFinder</h2>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center mb-8 text-center">
                <h1 className="mb-4 font-bold header2">
                    &quot;Time savings is very important for us. It&apos;s been
                    massive. I can share with 50 people in five seconds with
                    CVNNECT.&quot;
                </h1>
                <h2 className="text-grayText">
                    Dwayne Johnson, President of Facebook
                </h2>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center mb-8 text-center">
                <h1 className="mb-4 font-bold header2">
                    &quot;Since I started using CVNNECT I&apos;ve loved it. Now
                    I can network quicker than ever and make life long
                    friends!&quot;
                </h1>
                <h2 className="text-grayText">Nico G, Enterpreneur</h2>
            </SwiperSlide>
        </Swiper>
    );
}
