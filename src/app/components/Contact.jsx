import React from 'react';

const Contact = () => {
  return (
    <div className="mt-16 px-[72px] w-[100vw] h-[42vh] bg-[#1b4962] mb-5 z-0 relative">
      <div className="flex items-center justify-between h-full w-full text-white">
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-1.5">
            <div className="w-[40px] h-[2px] bg-[#d83b44] mb-1.5" />
            <p className="text-[13px] tracking-tighter">
              Ready to come to Canada?
            </p>
          </div>
          <h1 className="text-3xl tracking-tighter font-bold">
            CONTACT US NOW!
          </h1>
        </div>
        <button className="text-[12px] tracking-tighter font-bold h-[45px] w-[160px] bg-[#d83b44]">
          CONTACT US NOW
        </button>
      </div>
    </div>
  );
};

export default Contact;
