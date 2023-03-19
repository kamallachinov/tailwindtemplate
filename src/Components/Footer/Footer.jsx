import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-zinc-100 py-14">
      <div className="container-lg grid grid-cols-10 lg:grid-cols-12 ">
        <div className="mb-4 md:mb-0 col-span-10 lg:col-span-6 ">
          <h3 className="text-zinc-800 font-poppins font-bold text-3xl">
            Nova
          </h3>
          <p className="text-zinc-700 font-poppins md:pr-16 text-md">
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div className="flex gap-2">
            <span className="bg-cyan-500 p-2 rounded-full flex items-center justify-center hover:cursor-pointer">
              <AiOutlineTwitter className="text-white text-lg" />
            </span>
            <span className="bg-cyan-500 p-2 rounded-full flex items-center justify-center hover:cursor-pointer">
              <BsFacebook className="text-white text-lg" />
            </span>
            <span className="bg-cyan-500 p-2 rounded-full flex items-center justify-center hover:cursor-pointer">
              <AiOutlineInstagram className="text-white text-lg" />
            </span>
            <span className="bg-cyan-500 p-2 rounded-full flex items-center justify-center hover:cursor-pointer">
              <AiFillLinkedin className="text-white text-lg" />
            </span>
          </div>
        </div>
        <div className="mb-3 md:mb-0 col-span-5 lg:col-span-2">
          <h4 className="text-sky-900 font-poppins font-bold text-xl">
            Useful Links
          </h4>
          <ul className="p-0">
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Home
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              About us
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Services
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Terms of service
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Privacy policy
            </li>
          </ul>
        </div>
        <div className="col-span-5 lg:col-span-2">
          <h4 className="text-sky-900 font-poppins font-bold text-xl">
            Useful Links
          </h4>
          <ul className="p-0">
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Web Design
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Web Development
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Product Management
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Marketing
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300 flex justify-start items-center gap-1">
              <span className="flex items-center justify-center w-2 h-0.5 bg-cyan-500"></span>
              Graphic Design
            </li>
          </ul>
        </div>
        <div className="col-span-5 lg:col-span-2">
          <h4 className="text-sky-900 font-poppins font-bold text-xl">
            Useful Links
          </h4>
          <ul className="p-0">
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300">
              A108 Adam Street
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300">
              New York, NY 535022
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300">
              United States
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300">
              <span className="font-bold">Phone:</span> +1 5589 55488 55
            </li>
            <li className="text-slate-600 hover:cursor-pointer hover:text-cyan-500 duration-300">
              <span className="font-bold">Email:</span> info@example.com{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
