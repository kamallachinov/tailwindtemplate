import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
function Team() {
  return (
    <section>
      <div
        className="relative lg:bg-fixed flex items-center justify-center h-72"
        style={{
          backgroundImage: `url("https://bootstrapmade.com/demo/templates/Nova/assets/img/team-header.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
      >
        <div className="absolute text-center z-10 mt-7">
          <h2 className="text-white font-Raleway text-3xl lg:text-6xl font-medium">
            Team
          </h2>
          <h5 className="text-cyan-500  font-Raleway font-bold  mt-1 flex items-center justify-center gap-2">
            <Link
              to={"/"}
              className="no-underline hover:underline text-base text-gray-300 hover:text-gray-300"
            >
              Home
            </Link>
            <span className="text-white font-poppins text-xs">/</span> Team
          </h5>
        </div>
        <div className="h-auto top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-75 absolute"></div>
      </div>
      <div className="container-lg py-12">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold font-serif text-gray-600">
            Our Team
          </h2>
          <span className="flex items-center justify-center w-20 h-0.5 bg-cyan-500 mt-2 rounded-xl"></span>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:pt-12">
          <div className="relative cardContainer col-span-1 flex items-center justify-center flex-col group">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/team/team-1.jpg"
              alt=""
              className="h-96 w-96 md:h-full md:w-full"
            />
            <div className="w-100 hidden absolute bg-slate-100  group-hover:flex items-center justify-center bottom-16 gap-4  py-3 transition duration-500 ease-in-out">
              <BsTwitter className="text-xl text-blue-900" />
              <BsFacebook className="text-xl text-blue-900" />
              <BsInstagram className="text-xl text-blue-900" />
              <BsLinkedin className="text-xl text-blue-900" />
            </div>
            <h4 className="mt-2 text-2xl font-poppins font-medium">
              Walter White
            </h4>
            <span className="text-sm text-gray-500">
              Chief Executive Officer
            </span>
          </div>
          <div className="relative cardContainer col-span-1 flex items-center justify-center flex-col group">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/team/team-2.jpg"
              alt=""
              className="h-96 w-96 md:h-full md:w-full"
            />
            <div className="w-100 hidden absolute bg-slate-100  group-hover:flex items-center justify-center bottom-16 gap-4  py-3 transition duration-500 ease-in-out">
              <BsTwitter className="text-xl text-blue-900" />
              <BsFacebook className="text-xl text-blue-900" />
              <BsInstagram className="text-xl text-blue-900" />
              <BsLinkedin className="text-xl text-blue-900" />
            </div>
            <h4 className="mt-2 text-2xl font-poppins font-medium">
              Sarah Jhonson
            </h4>
            <span className="text-sm text-gray-500">Product Manager</span>
          </div>
          <div className="relative cardContainer col-span-1 flex items-center justify-center flex-col group">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/team/team-3.jpg"
              alt=""
              className="h-96 w-96 md:h-full md:w-full"
            />
            <div className="w-100 hidden absolute bg-slate-100  group-hover:flex items-center justify-center bottom-16 gap-4  py-3 transition duration-500 ease-in-out">
              <BsTwitter className="text-xl text-blue-900" />
              <BsFacebook className="text-xl text-blue-900" />
              <BsInstagram className="text-xl text-blue-900" />
              <BsLinkedin className="text-xl text-blue-900" />
            </div>
            <h4 className="mt-2 text-2xl font-poppins font-medium">
              William Anderson
            </h4>
            <span className="text-sm text-gray-500">CTO</span>
          </div>
          <div className="relative cardContainer col-span-1 flex items-center justify-center flex-col group">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/team/team-4.jpg"
              alt=""
              className="h-96 w-96 md:h-full md:w-full"
            />
            <div className="w-100 hidden absolute bg-slate-100  group-hover:flex items-center justify-center bottom-16 gap-4  py-3 transition duration-500 ease-in-out">
              <BsTwitter className="text-xl text-blue-900" />
              <BsFacebook className="text-xl text-blue-900" />
              <BsInstagram className="text-xl text-blue-900" />
              <BsLinkedin className="text-xl text-blue-900" />
            </div>
            <h4 className="mt-2 text-2xl font-poppins font-medium">
              Amanda Jepson
            </h4>
            <span className="text-sm text-gray-500">Accountant</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
