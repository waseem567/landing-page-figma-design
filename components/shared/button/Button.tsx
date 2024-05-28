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
      className={`h-[${height}px] w-[${width}px] rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]`}
    >
      {text}
    </button>
  );
};

export default Button;
