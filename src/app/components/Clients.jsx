'use client';
import React, { useState } from 'react';
import ClientsList from './ClientsList';

const Clients = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  return (
    <div className="h-[95vh] bg-[#1b4962] w-[100vw] flex flex-col  text-white tracking-tight overflow-hidden">
      <h1 className="text-center mt-10 mb-16 text-[22px] font-bold">
        SEE WHAT OUR CLIENTS ARE SAYING
      </h1>
      <div
        className={`flex`}
        style={{ transform: `translateX(${-translateX}vw)` }}
      >
        {items.map((item, index) => (
          <ClientsList key={index} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 transition-all duration-500">
        <div
          onClick={() => {
            setActiveIndex(1), setTranslateX(0);
          }}
          className={` ${
            activeIndex == '1'
              ? 'bg-[#d83b44] w-5 opacity-95'
              : 'bg-white opacity-90'
          } h-2.5 w-2.5 rounded-full transition-all  duration-100 cursor-pointer ease-in-out`}
        />
        <div
          onClick={() => {
            setActiveIndex(2), setTranslateX(100);
          }}
          className={` ${
            activeIndex == '2'
              ? 'bg-[#d83b44] opacity-95 w-5'
              : 'bg-white opacity-90'
          } h-2.5 w-2.5 rounded-full transition-all duration-100 cursor-pointer ease-in`}
        />
        <div
          onClick={() => {
            setActiveIndex(3), setTranslateX(200);
          }}
          className={` ${
            activeIndex == '3'
              ? 'bg-[#d83b44] opacity-95 w-5'
              : 'bg-white opacity-90'
          } h-2.5 w-2.5 rounded-full transition-all duration-100 cursor-pointer ease-in-out`}
        />
        <div
          onClick={() => {
            setActiveIndex(4), setTranslateX(300);
          }}
          className={` ${
            activeIndex == '4'
              ? 'bg-[#d83b44] w-5 opacity-95'
              : 'bg-white opacity-90'
          } h-2.5 w-2.5 rounded-full transition-all duration-100 cursor-pointer ease-in`}
        />
        <div
          onClick={() => {
            setActiveIndex(5), setTranslateX(400);
          }}
          className={` ${
            activeIndex == '5'
              ? 'bg-[#d83b44] opacity-95 w-5'
              : 'bg-white opacity-90'
          } h-2.5 w-2.5 rounded-full transition-all duration-100 cursor-pointer ease-in-out`}
        />
      </div>
    </div>
  );
};

export default Clients;
