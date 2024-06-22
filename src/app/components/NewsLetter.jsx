import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const NewsLetter = () => {
  return (
    <div className="px-[72px] mb-20 w-full h-[70vh] bg-white">
      <div className="shadow-[rgba(17,17,26,0.05)_0px_4px_16px,rgba(17,17,26,0.05)_0px_8px_32px] p-10">
        <h1 className="text-[22px] font-bold">Newsletter</h1>
        <form className="pt-10">
          <div className="flex gap-8">
            <div className="flex flex-1 flex-col gap-1.5">
              <label htmlFor="name" className="text-[13px] text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] border-gray-200 text-[13px] p-3 outline-none rounded-sm font-semibold focus:border-sky-500 focus:text-gray-600 text-gray-500 transition-all ease-in duration-300"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <label htmlFor="name" className="text-[13px] text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] border-gray-200 text-[13px] p-3 outline-none rounded-sm font-semibold focus:border-sky-500 focus:text-gray-600 text-gray-500 transition-all ease-in duration-300"
              />
            </div>
          </div>
          <div className="flex my-5 gap-8">
            <div className="flex flex-1 flex-col gap-1.5">
              <label htmlFor="email" className="text-[13px] text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-[1px] border-gray-200 text-[13px] p-3 outline-none rounded-sm font-semibold focus:border-sky-500 focus:text-gray-600 text-gray-500 transition-all ease-in duration-300"
              />
            </div>
            <div className="flex flex-1 items-center gap-3">
              <p className="text-[13px] text-gray-600">Looking For:</p>
              <select className="border-[1px] border-gray-200 text-[12px] text-gray-600 p-2 py-4 bg-white cursor-pointer outline-none tracking-tighter">
                <option value="someOption" className="bg-gray-200">
                  --None--
                </option>
                <option value="otherOption">Career</option>
                <option value="otherOption">Education</option>
                <option value="otherOption">Immigration</option>
              </select>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1.5 my-5">
            <label htmlFor="name" className="text-[13px] text-gray-600">
              Country
            </label>
            <input
              type="text"
              id="name"
              className="border-[1px] border-gray-200 text-[13px] p-3 outline-none rounded-sm font-semibold focus:border-sky-500 focus:text-gray-600 text-gray-500 transition-all ease-in duration-300"
            />
          </div>
          <button
            type="submit"
            className="bg-[#d83b44] flex justify-center items-center p-4 px-7 text-white gap-2"
          >
            <p className="font-semibold text-[15px]">Submit</p>
            <div className="flex">
              <FaAngleRight />
              <FaAngleRight className="-mx-2.5" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
