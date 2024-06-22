import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="text-[5rem] font-[500] relative -tracking-[0.8rem] inline-block whitespace-nowrap mx-[10vw]"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.span
        className="text-[6rem] font-[500] relative -tracking-[0.5rem] inline-block whitespace-nowrap"
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={'overflow-hidden flex items-center'}>
      <div className="w-[50%] flex items-center justify-center">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
        className="w-[50%] flex items-center justify-center"
      >
        <span className="font-[600] text-[15px] w-[320px]">
          We are specialised in setting up the foundation of your journey and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowCenter1 = ({ title }) => {
  return (
    <motion.div
      initial={{ y: 310 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      className="flex items-center animate-marquee "
    >
      <AnimatedLetters title={title} disabled />
      <AnimatedLetters title={title} />
      <AnimatedLetters title={title} />
    </motion.div>
  );
};

const BannerRowCenter2 = ({ title }) => {
  return (
    <motion.div
      initial={{ y: 310 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 1 }}
      className="flex items-center animate-marquee2 absolute top-0"
    >
      <AnimatedLetters title={title} disabled />
      <AnimatedLetters title={title} />
      <AnimatedLetters title={title} />
    </motion.div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={'overflow-hidden flex items-center justify-center'}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1, delay: 1 }}
        className="h-[100px] w-[100px] rounded-full bg-white shadow-[rgba(0,0,0,0.20)_0px_5px_15px] absolute flex items-center justify-center flex-col left-[160px] z-50"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.8,
          }}
          className="text-[18px] font-[600]"
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.8,
          }}
          className="text-[18px] font-[600]"
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const Body = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlayMarquee(true);
  //   }, 2000);
  // }, []);

  return (
    <motion.div variants={banner} className="z-0 relative w-[100vw] h-[185vh]">
      <BannerRowTop title={'brand'} />
      <div className="flex relative w-[100vw] overflow-x-hidden">
        <BannerRowCenter1 title={'experience'} />
        <BannerRowCenter2 title={'experience'} />
      </div>
      <BannerRowBottom title={'Read More'} />

      {/* <div className="block -top-[128px] relative  w-[90vw] h-[50vh] mx-auto -z-50">
        <Image
          src="/visa-application-composition-with-canadian-flag.jpg"
          fill
          sizes="800px"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="bg-gradient-to-b from-black/25 h-[15vh] w-full" />
      </div> */}
      {/* <div className="flex items-start justify-end flex-col h-[55vh] ml-28 gap-12 text-[#9b292b]">
        <div className="flex flex-col  font-bold tracking-wide gap-1">
          <h1 className="text-[33px]">Why Choose Canada?</h1>
          <p className="tracking-tighter font-normal">
            FIND OUT WHY CANADA IS THE BEST OPTION FOR YOU!
          </p>
        </div>
        <button className="bg-[#1b4962] text-white py-4 px-8 text-lg font-semibold tracking-tight">
          Learn More
        </button>
      </div> */}
    </motion.div>
  );
};

export default Body;
