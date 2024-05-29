import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      {/* 1 */}
      <svg
        className="absolute right-5 top-0"
        width="416"
        height="675"
        viewBox="0 0 416 675"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672"
          stroke="url(#paint0_linear_1_23)"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_23"
            x1="365.5"
            y1="28"
            x2="110"
            y2="594"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#343045" />
            <stop offset="0.276042" stop-color="#8176AF" />
            <stop offset="0.739583" stop-color="#C0B7E8" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
      {/* 2 */}
      <svg
        className="absolute right-5 top-[-20px]"
        width="383"
        height="846"
        viewBox="0 0 383 846"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845"
          stroke="url(#paint0_linear_1_24)"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_24"
            x1="16.5"
            y1="39.5"
            x2="363"
            y2="814"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0104167" stop-color="#343045" />
            <stop offset="0.229167" stop-color="#C0B7E8" />
            <stop offset="0.776042" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
