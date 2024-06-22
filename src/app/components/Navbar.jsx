'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoPlay } from 'react-icons/io5';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const router = useRouter();

  const scrollHeader = () => {
    if (window.scrollY > 100) setShowNav(true);
    else setShowNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.addEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          delay: 1.6,
        }}
        className="flex items-center justify-between py-4 "
      >
        {!showNav ? (
          <>
            <div className="flex items-center gap-20 pl-24 z-0">
              <Image
                src="/visa-logo_1863.png"
                height={75}
                width={75}
                alt="Logo"
              />
              <ul className="flex items-center font-[630] text-sm tracking-tighter gap-3 text-[#262626]">
                <li
                  className="cursor-pointer hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1"
                  onClick={() => router.push('/about-us')}
                >
                  ABOUT US
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  <Link href="visit"> VISIT</Link>
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  <Link href="immigrate">IMMIGRATE</Link>
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  <Link href="study">STUDY</Link>
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  <Link href="work">WORK</Link>
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  <Link href="blog">BLOG</Link>
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  BOOK AN APPOINTMENT
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between gap-5 pr-[72px]">
              {/* <FaSearch size={18} color="#1f516c" className="cursor-pointer" /> */}
              <div className="cursor-pointer bg-[#d83b44] py-3 px-6 text-white flex items-center justify-between gap-2 text-[13px] font-semibold rounded-3xl">
                <IoPlay />
                <p className="tracking-tighter">START NOW</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
              }}
              className="flex fixed top-0 items-center justify-between gap-20 bg-white w-full z-50 shadow-md px-24"
            >
              <Image
                src="/visa-logo_1863.png"
                height={75}
                width={75}
                alt="Logo"
              />
              <ul className="flex items-center font-[630] text-sm tracking-tighter gap-3 text-[#262626]">
                <li className="cursor-pointer hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  ABOUT US
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  VISIT
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  IMMIGRATE
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  STUDY
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  WORK
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  BLOG
                </li>
                <li className="cursor-pointer  hover:text-[#d71c3b] transition-all ease-in-out duration-400 py-5 px-1">
                  BOOK AN APPOINTMENT
                </li>
              </ul>
            </motion.div>
            <div className="flex items-center justify-between gap-5">
              {/* <FaSearch size={18} color="#1f516c" className="cursor-pointer" /> */}
              <div className="cursor-pointer bg-[#d83b44] py-3 px-6 text-white flex items-center justify-between gap-2 text-[13px] font-semibold rounded-3xl">
                <IoPlay />
                <p className="tracking-tighter">START NOW</p>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Navbar;
