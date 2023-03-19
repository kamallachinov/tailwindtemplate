import React from "react";
import { BiStore } from "react-icons/bi";
import {
  BsFillDatabaseFill,
  BsListCheck,
  BsBarChartFill,
} from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaBrush } from "react-icons/fa";
import { BiStation } from "react-icons/bi";
import { GiArmorUpgrade } from "react-icons/gi";
function Section2() {
  return (
    <div>
      <div className="container-lg sm:py-8 md:pb-56 lg:py-10 flex justify-between grid md:grid-cols-3 sm:flex-wrap">
        <div className="col-span-3 md:col-span-2">
          <h3 className="font-poppins text-4xl font-bold text-sky-900">
            Powerful Features for <br /> Your Business
          </h3>
          <div className="md:flex md:flex-row flex-col md:gap-24 mt-6 md:mt-14">
            <ul className="p-0 mb-4 md:mb-0 flex flex-col gap-4">
              <li className=" flex items-center gap-2">
                <BiStore className="text-yellow-500 text-3xl" />
                <span className="text-xl text-sky-800">Easy Cart Features</span>
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCalendar className="text-pink-500 text-3xl" />{" "}
                <span className="text-xl text-sky-800">
                  Ipsum Rerum Explicabo
                </span>
              </li>
              <li className="flex items-center gap-2">
                <BsFillDatabaseFill className="text-sky-500 text-3xl" />{" "}
                <span className="text-xl text-sky-800">Easy Cart Features</span>
              </li>
              <li className="flex items-center gap-2">
                <BsListCheck className="text-teal-500 text-3xl" />
                <span className="text-xl text-sky-800">
                  Ipsum Rerum Explicabo
                </span>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 p-0">
              <li className="flex items-center gap-2">
                <BsBarChartFill className="text-blue-800 text-3xl" />{" "}
                <span className="text-xl text-sky-800">
                  Sit amet consectetur adipisicing
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaBrush className="text-pink-600 text-3xl" />{" "}
                <span className="text-xl text-sky-800">Easy Cart Features</span>
              </li>
              <li className="flex items-center gap-2">
                <GiArmorUpgrade className="text-orange-700 text-3xl" />{" "}
                <span className="text-xl text-sky-800">
                  Sit amet consectetur adipisicing
                </span>
              </li>
              <li className="flex items-center gap-2">
                <BiStation className="text-purple-500 text-3xl" />
                <span className="text-xl text-sky-800">
                  Ipsum Rerum Explicabo
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex items-start justify-center col-span-3 md:col-span-1">
          <img
            src="https://bootstrapmade.com/demo/templates/Nova/assets/img/iphone.png"
            alt=""
            className="mt-16 md:mt-0 md:w-80 z-20"
          />
        </div>
      </div>
      <div className="bg-zinc-100 w-full py-16 md:py-28  md:-translate-y-72">
        <div className="container-lg">
          <h2 className="text-slate-800 font-bold text-3xl font-poppins mb-3">
            Labore Sdio Lidui <br /> Bonde Naruto
          </h2>
          <p className="max-w-xl font-poppins text-sm text-gray-700 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            nostrum molestias doloremque quae delectus odit minima corrupti
            blanditiis quo animi!
          </p>
          <button className="text-white font-poppins text-md bg-cyan-500 py-2 px-4 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
