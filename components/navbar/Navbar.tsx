import Image from "next/image";
import navLogo from "@/public/assets/png/navlogo.png";
import logoText from "@/public/assets/png/logotext.png";
import { Butcherman } from "next/font/google";
import Button from "../shared/button/Button";
import localFont from "next/font/local";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      {/* navbar hydra logo */}
      <div className="flex items-center">
        <Image src={navLogo} alt="nav logo" />
        <Image src={logoText} alt="logo text" />
      </div>
      {/* nav bar options */}
      <div>
        <ul className="flex justify-between items-center w-full text-white gap-5 uppercase">
          <li>About</li>
          <li>services</li>
          <li>technologies</li>
          <li>How to</li>
        </ul>
      </div>
      {/* navbar buttons */}
      <div className="flex justify-around gap-5">
        <button
          className={`text-white uppercase h-[48px] w-[150px] border-2 border-white rounded-full`}
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
    </div>
  );
};

export default Navbar;
