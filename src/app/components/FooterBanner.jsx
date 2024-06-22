import React from 'react';

const FooterBanner = () => {
  return (
    <div className="h-[7.5vh] w-full bg-[#d83b44] px-[72px] flex justify-between items-center">
      <div className="text-white text-[11px] font-semibold">
        © 2024, E-Visa Immigration Services Inc. All Right Reserved.
      </div>
      <div className="text-white text-[11px] font-semibold list-none flex gap-5 ">
        <li className="cursor-pointer transition-all ease-in duration-200 hover:text-white/70">
          Home
        </li>
        <li className="cursor-pointer transition-all ease-in duration-200 hover:text-white/70">
          About Us
        </li>
      </div>
    </div>
  );
};

export default FooterBanner;
