import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        delay: 1.6,
      }}
      className="h-7 bg-[rgba(26,71,95,255)] flex justify-between items-center px-[6%] z-0"
    >
      <div className="flex items-center gap-10">
        <p className="text-[11px]  pb-1 text-wrap text-[#7f9da7] font-semibold tracking-tighter">
          FOR THE LATEST IMMIGRATION NEWS, FOLLOW US ON OUR SOCIAL MEDIA
          CHANNELS
        </p>
        <div className="text-white flex items-center">
          <Link href="">
            <FaWhatsapp className="mx-1.5 size-3 cursor-pointer" />
          </Link>
          <FaInstagram className="mx-1.5 size-3 cursor-pointer" />
          <FaFacebookF className="mx-1.5 size-3 cursor-pointer" />
          <FaLinkedinIn className="mx-1.5 size-3 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 cursor-default">
        <p className="text-white text-xs font-bold">En</p>
        <div className="flex items-center justify-center relative h-full w-full px-3">
          <Image
            src="/united-kingdom-flag_11654500.png"
            width={20}
            height={20}
          />
          <Image
            src="/united-states_4855884.png"
            width={20}
            height={20}
            className="absolute bottom-0 left-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
