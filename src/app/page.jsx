'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Containers from './components/Containers';
import Services from './components/Services';
import Contact from './components/Contact';
import Immigration from './components/Immigration';
import Consultants from './components/Consultants';
import Image from 'next/image';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Partners from './components/Partners';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import FooterBanner from './components/FooterBanner';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Loader from './components/Loader';
import useStore from '../store/useStore';

const imageItems = [
  <Image
    height={160}
    width={160}
    src="/Cases.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/colleagues-reading-using-laptop-study-session.jpg"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
  <Image
    height={160}
    width={160}
    src="/user_1077114.png"
    alt="img"
    className="rounded-full"
  />,
];

const partnerInfo = [
  <Image height={200} width={200} src="/5big(4).jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/6samll.jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/7big(6).jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/11big(6).jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/12small.jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/15big(6).jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/16small.jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/5big(4).jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/6samll.jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/7big(6).jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/11big(6).jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/12small.jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/15big(6).jpg.webp" alt="img" />,
  <Image height={200} width={200} src="/16small.jpg.webp" alt="img" />,
];

const clientInfo = [
  {
    img: '/user_1077114.png',
    name: '1Josy Anne Souza',
    disc: "We strongly recommend e-Visa Immigration Consulting Services.My family and I had our PR approved and Marilene's support was essential.Marilene has experience and knowledge of the subject. It's been a long road here with ups and downs. We had negative experiences with two other consultants from another company and Marilene was able to reverse the situation. We couldn't have chosen a better professional for our PR process. We are grateful to the entire e-Visa team.",
  },
  {
    img: '/user_1077114.png',
    name: '2Josy Anne Souza',
    disc: "We strongly recommend e-Visa Immigration Consulting Services.My family and I had our PR approved and Marilene's support was essential.Marilene has experience and knowledge of the subject. It's been a long road here with ups and downs. We had negative experiences with two other consultants from another company and Marilene was able to reverse the situation. We couldn't have chosen a better professional for our PR process. We are grateful to the entire e-Visa team.",
  },
  {
    img: '/user_1077114.png',
    name: '3Josy Anne Souza',
    disc: "We strongly recommend e-Visa Immigration Consulting Services.My family and I had our PR approved and Marilene's support was essential.Marilene has experience and knowledge of the subject. It's been a long road here with ups and downs. We had negative experiences with two other consultants from another company and Marilene was able to reverse the situation. We couldn't have chosen a better professional for our PR process. We are grateful to the entire e-Visa team.",
  },
  {
    img: '/user_1077114.png',
    name: '4Josy Anne Souza',
    disc: "We strongly recommend e-Visa Immigration Consulting Services.My family and I had our PR approved and Marilene's support was essential.Marilene has experience and knowledge of the subject. It's been a long road here with ups and downs. We had negative experiences with two other consultants from another company and Marilene was able to reverse the situation. We couldn't have chosen a better professional for our PR process. We are grateful to the entire e-Visa team.",
  },
  {
    img: '/user_1077114.png',
    name: '5Josy Anne Souza',
    disc: "We strongly recommend e-Visa Immigration Consulting Services.My family and I had our PR approved and Marilene's support was essential.Marilene has experience and knowledge of the subject. It's been a long road here with ups and downs. We had negative experiences with two other consultants from another company and Marilene was able to reverse the situation. We couldn't have chosen a better professional for our PR process. We are grateful to the entire e-Visa team.",
  },
];

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 0.46], ['0%', '150%']);

  const scale = useTransform(scrollYProgress, ['0', '0.5'], ['1', '1.3']);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  const loader = useMemo(() => {
    return <Loader setLoading={setLoading} />;
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">{loader}</motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={ref}
        >
          <Banner />
          <Navbar />
          <motion.div style={{ y: textY }}>
            <Body />
          </motion.div>
          <>
            {!loading && (
              <div className="w-[100vw] absolute top-[425px] px-10 overflow-hidden -z-[100] opacity-90">
                <motion.img
                  style={{ scale: scale }}
                  transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 1.3 }}
                  layoutId="main-image"
                  src="/visa-application-composition-with-canadian-flag.jpg"
                  className="rounded-xl"
                />
              </div>
            )}
            <Containers />
            <Services />
            <Contact />
            <Immigration />
            <Consultants items={imageItems} />
            <Clients items={clientInfo} />
            <Blog />
            <Partners items={partnerInfo} />
            <NewsLetter />
            <Footer />
            <FooterBanner />
          </>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomePage;
