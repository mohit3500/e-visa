import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Immigration = () => {
  return (
    <div className="my-5 px-[80px] z-0 relative">
      <h1 className="font-bold text-2xl tracking-tight flex justify-center items-center">
        WHY CHOOSE E-VISA IMMIGRATION?
      </h1>
      <div className="mt-14 flex items-center justify-between gap-10">
        <div className="w-[20vw] h-[35vh] flex flex-col gap-3 items-center justify-center ">
          <Image src="/Cases.png" height={75} width={75} alt="img" />
          <h1 className="text-[30px] font-bold text-[#1b4962] tracking-tight py-1">
            15000
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Over 15,000 successful cases
          </p>
        </div>
        <div className="w-[20vw] h-[35vh] flex flex-col gap-3 items-center justify-center">
          <Image src="/Consultants.png" height={100} width={100} alt="img" />
          <h1 className="text-[30px] font-bold text-[#1b4962] tracking-tight py-1">
            8
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center">
            8 Regulated Canadian Immigration Consultants
          </p>
        </div>
        <div className="w-[20vw] h-[35vh] flex flex-col gap-3 items-center justify-center">
          <Image src="/travel.png" height={85} width={85} alt="img" />
          <h1 className="text-[30px] font-bold text-[#1b4962] tracking-tight py-1">
            97 %
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center">
            97% approval rate for visa applications
          </p>
        </div>
        <div className="w-[20vw] h-[35vh] flex flex-col gap-3 items-center justify-center">
          <Image src="/Residency.png" height={100} width={100} alt="img" />
          <h1 className="text-[30px] font-bold text-[#1b4962] tracking-tight py-1">
            99.9 %
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center">
            99.9% success rate for permanent residency applications
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-10">
        <div className="w-[20vw] h-[35vh] flex flex-col gap-3 items-center justify-center">
          <Image src="/Ratings.png" height={100} width={100} alt="img" />
          <h1 className="text-[30px] font-bold text-[#1b4962] tracking-tight py-1">
            <p className="flex items-center justify-center gap-2">
              4.8
              <FaStar size={22} />
            </p>
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Google review rating 4.8 stars
          </p>
        </div>
        <div className="w-[20vw] h-[35vh] flex flex-col gap-3 items-center justify-center">
          <Image src="/Language.png" height={100} width={100} alt="img" />
          <h1 className="text-[30px] font-bold text-[#1b4962] tracking-tight py-1">
            4
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Service in 4 languages (English, Portuguese, Spanish and Farsi)
          </p>
        </div>
        <div className="w-[20vw] h-[35vh] flex flex-col gap-3 items-center justify-center">
          <Image src="/Countries.png" height={100} width={100} alt="img" />
          <h1 className="text-[30px] font-bold text-[#1b4962] tracking-tight py-1">
            60
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Clients from 60 countries
          </p>
        </div>
        <div className="w-[20vw] h-[35vh] flex flex-col gap-3 items-center justify-center">
          <Image src="/Offices.png" height={100} width={100} alt="img" />
          <h1 className="text-[30px] font-bold text-[#1b4962] tracking-tight py-1">
            4
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Offices in Toronto, Vancouver, Sao Paulo & Tehran
          </p>
        </div>
      </div>
    </div>
  );
};

export default Immigration;
