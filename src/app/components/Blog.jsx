import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="h-[85vh] w-[100vw] bg-[#d83b44] px-[72px] py-10">
      <p className="text-[27px] text-white font-bold tracking-tight">BLOG</p>
      <div className="flex mt-10 gap-10 h-[42vh]">
        <div className="flex-[2.2] relative overflow-hidden">
          <Image
            src="/full-shot-happy-couple-traveling.jpg"
            alt="img"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              opacity: '0.95',
            }}
          />
          <div className="absolute bottom-5 z-40">
            <div className="flex items-end gap-1.5 z-40">
              <div className="w-[20px] h-[2px] bg-[#d83b44] mb-1.5" />
              <p className="text-[11px] text-white">IMMIGRATION NEWS</p>
            </div>
            <h1 className="text-white px-[25px] my-2 font-bold text-lg hover:text-[#d83b44] transition-all duration-500 cursor-pointer">
              292,000 Study Permits Approved for College in Canada
            </h1>
            <p className="text-white text-[10px] px-[25px] font-semibold line-clamp-3">
              In recent remarks to the Globe and Mail, Canada's Immigration
              Minister Marc Miller disclosed that the current allotment of study
              permits for international college and undergraduate students this
              year stands at approximately 292,000.
            </p>
            <FaAngleRight className="mx-6 mt-3 mb-1 text-[16px] text-[#d83b44] cursor-pointer hover:text-white transition-all ease-in duration-200 p-[2px]" />
          </div>
          <div className="bg-gradient-to-t from-black/80 h-full w-full absolute z-0 bottom-0" />
          <div className="absolute flex flex-col right-0 h-32 w-44 bg-white rotate-[30deg] -my-20 -mx-12 ">
            <p className="-rotate-[28deg] mt-[60px] ml-[105px] text-[21px] font-bold tracking-tighter">
              22
            </p>
            <p className="-rotate-[28deg] ml-[105px] font-semibold tracking-tighter -mt-1.5">
              MAR
            </p>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden bg-zinc-100">
          <div className="absolute bottom-5 z-40">
            <div className="flex items-end gap-1.5 z-40">
              <div className="w-[20px] h-[2px] bg-[#d83b44] mb-1.5" />
              <p className="text-[10px] tracking-tight">
                CANADIAN EDUCATION BLOG
              </p>
            </div>
            <h1 className="px-[25px] font-bold my-2 text-sm text-[#d83b44] transition-all duration-500 cursor-pointer hover:text-black">
              Provincial Attestation Letters FAQ: Understanding the Basics
            </h1>
            <p className="text-[10px] pl-[25px] pr-[15px] tracking-tight line-clamp-3 font-semibold">
              In late January this year, the federal government announced that
              most new international students at the college or undergraduate
              level would now...
            </p>
            <FaAngleRight className="mx-6 mt-3 mb-1 text-[15px] text-[#d83b44] cursor-pointer hover:text-white transition-all ease-in duration-200 p-[2px]" />
          </div>
          <div className="absolute flex flex-col right-0 h-32 w-44 bg-white rotate-[30deg] -my-20 -mx-12 ">
            <p className="-rotate-[28deg] mt-[60px] ml-[105px] text-[21px] font-bold tracking-tighter">
              18
            </p>
            <p className="-rotate-[28deg] ml-[105px] font-semibold tracking-tighter -mt-1.5">
              MAR
            </p>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden bg-zinc-100">
          <div className="absolute bottom-5 z-40">
            <div className="flex items-end gap-1.5 z-40">
              <div className="w-[20px] h-[2px] bg-[#d83b44] mb-1.5" />
              <p className="text-[10px] tracking-tight">
                CANADIAN EDUCATION BLOG
              </p>
            </div>
            <h1 className="px-[25px] font-bold my-2 text-sm text-[#d83b44] transition-all duration-500 cursor-pointer line-clamp-2 hover:text-black">
              Unveiling Canada's Plan: Reduction in Temporary Residency
            </h1>
            <p className="text-[10px] pl-[25px] pr-[15px] tracking-tight line-clamp-3 font-semibold">
              The addition of temporary resident targets to the annual
              Immigration Levels Plan, beginning in fall 2024, has been declared
              by Immigration Minister Marc Miller.
            </p>
            <FaAngleRight className="mx-6 mt-3 mb-1 text-[15px] text-[#d83b44] cursor-pointer hover:text-white transition-all ease-in duration-200 p-[2px]" />
          </div>
          <div className="absolute flex flex-col right-0 h-32 w-44 bg-white rotate-[30deg] -my-20 -mx-12 ">
            <p className="-rotate-[28deg] mt-[60px] ml-[105px] text-[21px] font-bold tracking-tighter">
              15
            </p>
            <p className="-rotate-[28deg] ml-[105px] font-semibold tracking-tighter -mt-1.5">
              MAR
            </p>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#c4343c] mt-5" />
      <div className="flex items-center justify-center mt-5 group">
        <button className="bg-white flex justify-between items-center  py-3 w-[22%] px-7 rounded-full text-[15px]  font-bold text-[#d83b44] group-hover:text-white transition-all ease-in duration-300 group-hover:bg-[#d83b44] border-[1px] border-white tracking-tight">
          VIEW ALL BLOG POSTS
          <div className="flex">
            <FaAngleRight className="text-[15px] text-[#d83b44]  group-hover:text-white transition-all ease-in duration-500" />
            <FaAngleRight className="text-[15px] text-[#d83b44] -mx-[8.25px] group-hover:text-white transition-all ease-in duration-500" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Blog;
