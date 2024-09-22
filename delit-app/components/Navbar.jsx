import React from "react";
import { Josefin_Sans } from "@next/font/google";
import logo from "../assests/logo.svg"
import logo2 from "../assests/logo2.svg"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weights: [100, 300, 400, 600, 700],
});

const Navbar = () => {
  return (
    <nav className="flex {josefin.className} justify-between px-[31px] py-[25px] font-{600} h-[12vh] bg-[#212429] rounded-b-[50px] text-white text-[20px] mx-[451] my-[31]">
      <div className="logo"><img src={logo} alt="De" /></div>
      <div className="nav-items">
        <ul className="flex gap-12">
          <li className="hover:bg-white hover:text-black hover:rounded-[20px] hover:scale-2 hover:p-1">
            Magazines & Publications
          </li>
          <li className="hover:bg-white hover:text-black hover:rounded-[20px] hover:scale-2 hover:p-1">
            Blog
          </li>
          <li className="hover:bg-white hover:text-black hover:rounded-[20px] hover:scale-2 hover:p-1">
            Gallery
          </li>
          <li className="hover:bg-white hover:text-black hover:rounded-[20px] hover:scale-2 hover:p-1">
            Club Talk
          </li>
          <li className="hover:bg-white hover:text-black hover:rounded-[20px] hover:scale-2 hover:p-1">
            About Us
          </li>
          <li className="hover:bg-white hover:text-black hover:rounded-[20px] hover:scale-2 hover:p-1">
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
