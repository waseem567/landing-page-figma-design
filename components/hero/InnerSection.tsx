import React from "react";
import hero_image from "@/public/assets/png/hero.png";
import Image from "next/image";

const InnerSection = () => {
  return (
    <div className="h-full w-full grid grid-cols-2 border">
      {/* hero section text */}
      <div className="flex gap-5 flex-col justify-center items-start h-full">
        <p className="w-[80%] capitalize text-white font-bold text-[46px] leading-none break-words text-wrap">
          <span className="text-gradient">Dive</span> into the depths of{" "}
          <span className="text-gradient">Virtual Reality</span>
        </p>
        <p className="w-[80%] font-normal text-base text-white leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
        <div className="flex items-center gap-5">
          <button
            className={`block h-[48px] uppercase w-[214px] rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[12px] font-bold`}
          >
            Build your world
          </button>
          <div className="h-[33px] w-[40px] flex justify-center items-center">
            <svg
              className="cursor-pointer"
              width="46"
              height="38"
              viewBox="0 0 46 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8333 19L2.16666 19M43.8333 19L27.1667 35.6667M43.8333 19L27.1667 2.33333"
                stroke="#C0B7E8"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* hero section image */}
      <div className=" flex justify-end items-center h-full">
        <Image
          className="block h-[380px] w-[426px] "
          src={hero_image}
          alt="hero section main image"
        />
      </div>
    </div>
  );
};

export default InnerSection;
