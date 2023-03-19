import React from "react";
import { BsPlayCircle } from "react-icons/bs";
function Header() {
  return (
    <>
      <header
        className="relative lg:bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: `url("https://bootstrapmade.com/demo/templates/Nova/assets/img/hero-bg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="position-absolute  bg-slate-800 bg-opacity-75 top-0 left-0 right-0 bottom-0  "></div>

        <div className=" grid grid-cols-1 lg:grid-cols-8 h-full z-10">
          <div className="flex items-start justify-center flex-col  md:col-span-3 lg:bg-slate-800 p-16">
            <h2 className="text-white text-4xl mb-10 font-poppins">
              Focus On What Matters
            </h2>
            <p className="text-white  text-base border-l-4 border-spacing-2 border-cyan-500 font-poppins">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis cum recusandae eum laboriosam voluptatem repudiandae
              odio, vel exercitationem officiis provident minima.
            </p>
            <div className="flex mt-10 flex-col sm:flex-row">
              <button className="font-mono bg-cyan-600 outline-none rounded-xl text-white text-xl px-3 py-2 rounded">
                Get Started
              </button>
              <div className="flex sm:flex-wrap justify-center items-center px-6 py-3 gap-2 ">
                <BsPlayCircle className="text-cyan-500 text-2xl cursor-pointer" />
                <span className="text-cyan-500 text-2xl cursor-pointer">
                  Watch video
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
