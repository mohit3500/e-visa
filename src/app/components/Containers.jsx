import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoAdd } from 'react-icons/io5';

const Containers = () => {
  return (
    <div className="w-[100vw] h-[70vh] flex items-center justify-between px-[72px] ">
      <div className="relative w-[28.75vw] h-[30.75vw] overflow-hidden cursor-pointer shadow-lg rounded-sm group">
        <Image
          src="/canadian-flag-outdoors.jpg"
          fill
          alt="img"
          style={{
            objectFit: 'cover',
            zIndex: '-100',
          }}
        />
        <div className="absolute -z-10 top-0 left-0 h-full w-full bg-black/35 flex justify-center items-center flex-col">
          <p className="font-bold text-4xl text-white tracking-wide">
            IMMIGRATE
          </p>
        </div>
        <div className="h-0 w-0 border-b-[85px] border-b-white border-l-[29vw] border-l-transparent absolute bottom-[17.5vh] opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <div className="h-0 w-0 absolute border-l-[105px] border-l-transparent border-t-[105px] border-t-[#1b4962] -rotate-[13.5deg] bottom-[13vh] -right-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <IoAdd className="text-white absolute bottom-[24vh] right-4 text-[30px] opacity-0 hover:scale-90 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <div className="absolute h-[17.5vh] bg-white w-full opacity-0 bottom-0 left-0 right-0 mx-auto px-5 group-hover:opacity-100 group-hover:bg-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-500">
          <h1 className="text-[#d71c3b] pb-2.5 text-lg">
            Immigration to Canada
          </h1>
          <p className="text-[10px] font-semibold">
            Want to live in Canada? With over 80 immigration programs, our
            Immigration Consultants can find the best fit for you, based on your
            profile.
          </p>
        </div>
      </div>
      <div className="relative w-[28.75vw] h-[30.75vw] overflow-hidden cursor-pointer shadow-lg rounded-sm group">
        <Image
          src="/hands-writing-business-documents-desk-concept.jpg"
          alt="img"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute z-0 top-0 left-0 h-full w-full bg-black/35 flex justify-center items-center">
          <p className="font-bold text-4xl text-white tracking-wide">WORK</p>
        </div>
        <div className="h-0 w-0 border-b-[85px] border-b-white border-l-[29vw] border-l-transparent absolute bottom-[17.5vh] opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <div className="h-0 w-0 absolute border-l-[105px] border-l-transparent border-t-[105px] border-t-[#1b4962] -rotate-[13.5deg] bottom-[13vh] -right-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <IoAdd className="text-white absolute bottom-[24vh] right-4 text-[30px] opacity-0 hover:scale-90 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <div className="absolute h-[17.5vh] bg-white w-full opacity-0 bottom-0 left-0 right-0 mx-auto px-5 group-hover:opacity-100 group-hover:bg-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-500">
          <h1 className="text-[#d71c3b] py-2.5 text-lg">Work in Canada</h1>
          <p className="text-[10px] font-semibold ">
            'Kickstart your career in Canada: Our career programs are tailored
            for new immigrants.'
          </p>
        </div>
      </div>
      <div className=" relative w-[28.75vw] h-[30.75vw] overflow-hidden cursor-pointer shadow-lg rounded-sm group">
        <Image
          src="/colleagues-reading-using-laptop-study-session.jpg"
          fill
          alt="img"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute z-0 top-0 left-0 h-full w-full bg-black/35 flex justify-center items-center">
          <p className="font-bold text-4xl text-white tracking-wide">STUDY</p>
        </div>

        <div className="h-0 w-0 border-b-[85px] border-b-white border-l-[29vw] border-l-transparent absolute bottom-[17.5vh] opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <div className="h-0 w-0 absolute border-l-[105px] border-l-transparent border-t-[105px] border-t-[#1b4962] -rotate-[13.5deg] bottom-[13vh] -right-5 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <IoAdd className="text-white absolute bottom-[24vh] right-4 text-[30px] opacity-0 hover:scale-90 group-hover:opacity-100 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500" />
        <div className="absolute h-[17.5vh] bg-white w-full opacity-0 bottom-0 left-0 right-0 mx-auto px-5 group-hover:opacity-100 group-hover:bg-white group-hover:transition-all group-hover:ease-in-out group-hover:duration-500">
          <h1 className="text-[#d71c3b] py-2.5 text-lg">Study in Canada</h1>
          <p className="text-[10px] font-semibold ">
            Learn a new language or obtain from some of the best educational
            institutions in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Containers;
