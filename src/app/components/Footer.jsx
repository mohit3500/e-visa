import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="px-[72px] flex gap-20 bg-[#1c4b65] w-full h-[45vh] pt-16">
      <div className="flex-1 text-[#d83b44] font-bold tracking-tighter">
        WHERE TO FIND US?
        <div className="flex flex-col list-none text-xs text-white gap-2 mt-3 font-normal ">
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            VIDEOS
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            BLOG
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            FREE E-BOOKS
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            CONTACT US
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            PARTNERS
          </li>
        </div>
      </div>
      <div className="flex-1 text-[#d83b44] font-bold tracking-tighter">
        SERVICES
        <div className="flex flex-col list-none text-xs text-white gap-2 mt-3 font-normal">
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            IMMIGRATION
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            STUDY VISA
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            BUSINESS
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            WORK/CAREER
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            REFUSAL/INADMISSABILITY
          </li>
        </div>
      </div>
      <div className="flex-1 text-[#d83b44] font-bold tracking-tighter">
        FREE ASSESSMENTS
        <div className="flex flex-col list-none text-xs text-white gap-2 mt-3 font-normal">
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            EXPRESS ENTRY
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            BRITISH COLUMBIA PNP
          </li>
          <li className="hover:text-[#d83b44] transition-all ease-in duration-300 cursor-pointer">
            ONTARIO IMMIGRATION NOMINEE PROGRAM
          </li>
        </div>
      </div>
      <div className="flex-1 text-[#d83b44] font-bold tracking-tighter">
        FOLLOW US
        <p className="flex flex-col list-none text-xs text-white gap-2 mt-3 font-semibold">
          For the latest news and updates follow our social media channels
        </p>
        <div className="flex gap-5 flex-wrap mt-5">
          <button className="h-10 w-10 bg-[#d83b44] rounded-full text-white flex justify-center items-center text-lg border-[1px] border-[#d83b44]">
            <FaWhatsapp />
          </button>
          <button className="h-10 w-10 bg-[#d83b44] rounded-full text-white flex justify-center items-center text-lg border-[1px] border-[#d83b44]">
            <FaInstagram />
          </button>
          <button className="h-10 w-10 bg-[#d83b44] rounded-full text-white flex justify-center items-center text-lg border-[1px] border-[#d83b44]">
            <FaFacebookF />
          </button>
          <button className="h-10 w-10 bg-[#d83b44] rounded-full text-white flex justify-center items-center text-lg border-[1px] border-[#d83b44]">
            <FaYoutube />
          </button>
          <button className="h-10 w-10 bg-[#d83b44] rounded-full text-white flex justify-center items-center text-lg border-[1px] border-[#d83b44]">
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
