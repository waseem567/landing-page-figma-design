import React from "react";

interface RootInterface {
  height: string;
  width: string;
  text: string;
  to: string;
  background: string;
}

const Button = ({ height, width, text, to, background }: RootInterface) => {
  return (
    <button
      className={`block h-[${height}px] uppercase w-[${width}px] rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[12px] font-bold`}
    >
      {text}
    </button>
  );
};

export default Button;
