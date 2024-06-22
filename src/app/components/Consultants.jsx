'use client';
import React, { useState } from 'react';
import CarouselList from './CarouselList';

const Consultants = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const bubblePrev = () => {
    const isFirstSlide = activeIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const bubbleNext = () => {
    const isLastSlide = activeIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="my-5 h-[95vh] w-[100vw] px-[72px] bg-[#d83b44] relative overflow-hidden">
        <div className="absolute -my-[530px] -mx-[45px] w-[150vw] h-[100vh] rotate-[6deg] bg-white  shadow-[0 0 0 250px #522d5b]" />
        <div className="absolute my-[566px] -mx-[62px] w-[150vw] h-[100vh] -rotate-[2deg] bg-white  shadow-[0 0 0 250px #522d5b]" />
        <h1 className="pt-20 text-2xl tracking-tight text-white font-bold ">
          MEET OUR CONSULTANTS
        </h1>
        <div className="">
          <div className="flex w-fit gap-7 mt-20 justify-between overflow-hidden product-container">
            {items.map((item, index) => (
              <CarouselList key={index} item={item} activeIndex={activeIndex} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-3 transition-all duration-500">
          <div
            onClick={bubbleNext}
            className="h-2.5 w-2.5 rounded-full bg-white opacity-50 transition-all duration-500 hover:w-5 hover:opacity-100"
          />
          <div className="h-2.5 w-2.5 rounded-full bg-white opacity-50 transition-all duration-500 hover:w-5 hover:opacity-100" />
          <div
            onClick={bubblePrev}
            className="h-2.5 w-2.5 rounded-full bg-white opacity-50 transition-all duration-500 hover:w-5 hover:opacity-100"
          />
        </div>
      </div>
      <div className="px-[72px] w-[100vw] h-[32vh] mb-5">
        <div className="flex items-center justify-between h-full w-full text-white">
          <div className="flex flex-col gap-1">
            <div className="flex items-end gap-1.5">
              <div className="w-[40px] h-[2px] bg-[#d83b44] mb-1.5" />
              <p className="text-[13px] text-black tracking-tighter">
                Canadian Immigration Starts Here
              </p>
            </div>
            <h1 className="text-3xl text-black tracking-tighter font-bold">
              BOOK A CONSULTATION
            </h1>
          </div>
          <button className="text-[12px] tracking-tighter font-bold h-[45px] w-[130px] bg-[#d83b44]">
            START NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Consultants;
