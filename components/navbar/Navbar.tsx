import Image from "next/image";
import navLogo from "@/public/assets/png/navlogo.png";
import logoText from "@/public/assets/png/logotext.png";
import { Butcherman } from "next/font/google";
import Button from "../shared/button/Button";
import localFont from "next/font/local";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2">
      {/* navbar hydra logo */}
      <div className="flex items-center">
        <Image
          className="block w-[50px] lg:w-[100px] h-auto"
          width={100}
          src={navLogo}
          alt="nav logo"
        />
        <Image
          className="block h-[30px] w-[45px]"
          src={logoText}
          alt="logo text"
        />
      </div>
      {/* nav bar options */}
      <div className="lg:flex hidden">
        <ul className="flex justify-between items-center w-full text-white gap-5 uppercase font-bold text-[16px]">
          <li>About</li>
          <li>services</li>
          <li>technologies</li>
          <li>How to</li>
        </ul>
      </div>
      {/* navbar buttons */}
      <div className="lg:flex hidden justify-around gap-5">
        <button
          className={`text-white uppercase h-[48px] w-[150px] border-2 border-white rounded-full text-[12px] font-bold`}
        >
          contact us
        </button>
        <Button
          height="50"
          width="150"
          background="#302C42"
          text="join hydra"
          to="/"
        />
      </div>
      {/* hamburger */}
      <div className="lg:hidden justify-center items-center text-4xl flex text-[#8176AF]">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
