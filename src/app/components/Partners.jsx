'use client';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Partners = ({ items }) => {
  return (
    <div className="h-[50vh] w-full bg-white">
      <h1 className="mt-16 font-bold text-[22px] tracking-tighter px-[72px] ">
        EDUCATIONAL PARTNERS - MORE THAN 500 CANADIAN INSTITUTION TO CHOOSE FROM
      </h1>
      <div className="mt-16 relative px-[72px] ">
        <div className="flex justify-start items-center rounded-md ">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.button-next',
              prevEl: '.button-prev',
            }}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={5}
            style={{
              '--swiper-pagination-color': '#d83b44',
              '--swiper-pagination-bullet-size': '16px',
              '--swiper-pagination-bullet-horizontal-gap': '7px',
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide>
                <div className={`min-w-[230px] mb-16`}>{item}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <FaAngleLeft className="button-prev absolute top-5 left-7 text-3xl text-black/80 z-50 transition-all ease-in duration-200 hover:text-[#d83b44] cursor-pointer " />
        <FaAngleRight
          className={`button-next absolute top-5 right-7 text-3xl text-black/80 z-50 transition-all ease-in duration-200 hover:text-[#d83b44] cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default Partners;
