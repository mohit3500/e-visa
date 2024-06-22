import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <div className="overflow-hidden h-[100vh]">
      <motion.div>
        <motion.div
          variants={container}
          onAnimationComplete={() => {
            setLoading(false);
          }}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.div
            variants={itemMain}
            className="absolute origin-center flex items-center justify-center left-0 top-0 bottom-0 right-0 m-auto"
          >
            <motion.img
              layoutId="main-image"
              src="/visa-application-composition-with-canadian-flag.jpg"
              className="rounded-md w-[500px]"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="absolute origin-center flex items-center justify-center left-[16%] bottom-[14%] "
          >
            <Image
              height={225}
              width={225}
              className="opacity-90 rounded-md"
              src="/hands-writing-business-documents-desk-concept.jpg"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="absolute origin-center flex items-center justify-center right-[12%] top-[8%] "
          >
            <Image
              height={250}
              width={250}
              className="opacity-90 rounded-md"
              src="/journey-1130732_1280.jpg"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="absolute origin-center flex items-center justify-center right-[20%] bottom-[10%] "
          >
            <Image
              height={175}
              width={175}
              className="opacity-90 rounded-md"
              src="/colleagues-reading-using-laptop-study-session.jpg"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="absolute origin-center flex items-center justify-center left-[14%] top-[12%]"
          >
            <Image
              src="/full-shot-happy-couple-traveling.jpg"
              height={225}
              width={225}
              className="opacity-90 rounded-md"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
