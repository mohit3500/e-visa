import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
  return (
    <div className="px-[72px] relative my-5 z-0">
      <h1 className="font-bold text-[22px] tracking-tight">OUR SERVICES</h1>
      <div className="flex items-center justify-between gap-10 mt-10">
        <Link
          href="/immigration"
          className="flex items-start justify-between gap-2 w-[30vw] h-[20vh] cursor-pointer"
        >
          <Image src="/immigration.png" height={125} width={125} alt="img" />
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1b4962] font-bold text-lg">IMMIGRATION</h2>
            <p className="text-[12px]">
              If you goal is to immigrate to Canada, the canadian government
              offers more than 80 programs for different application profile.
              Our Regulated Canadian Immigration Consultants are ready to assist
              you.
            </p>
          </div>
        </Link>
        <div className="flex items-start justify-between gap-2 w-[30vw] h-[20vh] cursor-pointer">
          <Image src="/study.png" height={125} width={125} alt="img" />
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1b4962] font-bold text-lg">STUDY</h2>
            <p className="text-[12px]">
              If you plan to study in Canada, either to improve you language
              skills or even getting international degree, out educational
              division is ready to assist you. Contact our specialists today.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-2 w-[30vw] h-[20vh] cursor-pointer">
          <Image src="/travel.png" height={125} width={125} alt="img" />
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1b4962] font-bold text-lg">VISA</h2>
            <p className="text-[12px]">
              If you wish to visit, study or work in Canada,our visa specialists
              can help you with your application. Contact us now.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 mt-5">
        <div className="flex items-start justify-between gap-2 w-[30vw] h-[20vh] cursor-pointer">
          <Image src="/business.png" height={125} width={125} alt="img" />
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1b4962] font-bold text-lg">Business</h2>
            <p className="text-[12px]">
              Canada offers several programs for entrepreneurs and investors.
              Find out if you are eligible.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-2 w-[30vw] h-[20vh] cursor-pointer">
          <Image src="/work.png" height={125} width={125} alt="img" />
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1b4962] font-bold text-lg">WORK/CAREER</h2>
            <p className="text-[12px]">
              Your career is one of the main focus to take into consideration
              when planning your immigration to Canada. Join our program even if
              you are still in your home country, and be ready for Canadian
              labour market.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-2 w-[30vw] h-[20vh] cursor-pointer">
          <Image src="/Refusal.png" height={125} width={125} alt="img" />
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1b4962] font-bold text-lg">
              REFUSAL/INADMISSIBILITY
            </h2>
            <p className="text-[12px]">
              We specialize in overcoming visa refusal and inadmissibility
              cases. Find out how we can assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
