import React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
function Contact() {
  return (
    <section>
      <div
        className="relative lg:bg-fixed flex items-center justify-center h-72"
        style={{
          backgroundImage: `url("https://bootstrapmade.com/demo/templates/Nova/assets/img/contact-header.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "25% 160%",
        }}
      >
        <div className="absolute text-center z-10 mt-7">
          <h2 className="text-white font-Raleway text-3xl lg:text-6xl font-medium">
            Contact
          </h2>
          <h5 className="text-cyan-500  font-Raleway font-bold  mt-1 flex items-center justify-center gap-2">
            <Link
              to={"/"}
              className="no-underline hover:underline text-base text-gray-300 hover:text-gray-300"
            >
              Home
            </Link>
            <span className="text-white font-poppins text-xs">/</span> Contact
          </h5>
        </div>
        <div className="h-auto top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-75 absolute"></div>
      </div>

      <div
        className="relative  flex items-center justify-center"
        style={{
          backgroundImage: `url("https://bootstrapmade.com/demo/templates/Nova/assets/img/contact-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-lg py-16 grid md:grid-cols-2 z-20">
          <div className="col-span-1">
            <ul className="m-0 p-0 flex flex-col gap-4">
              <li className="flex  items-center justify-start gap-3">
                <GoLocation className=" text-white text-4xl bg-cyan-500 px-2 py-2 rounded-full" />
                <div>
                  <h4 className="text-2xl m-0 text-cyan-600">Location:</h4>
                  <p className="m-0 text-sm">
                    A108 Adam Street, New York, NY 535022
                  </p>
                </div>
              </li>
              <li className="flex  items-center justify-start gap-3">
                <AiOutlineMail className=" text-white text-4xl bg-cyan-500 px-2 py-2 rounded-full" />
                <div>
                  <h4 className="text-2xl m-0 text-cyan-600">Email:</h4>
                  <p className="m-0 text-sm">info@example.com</p>
                </div>
              </li>
              <li className="flex  items-center justify-start gap-3">
                <BsPhone className=" text-white text-4xl bg-cyan-500 px-2 py-2 rounded-full" />
                <div>
                  <h4 className="text-2xl m-0 text-cyan-600">Call:</h4>
                  <p className="m-0 text-sm">+1 5589 55488 55</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="sm:mt-4 md:mt-0 col-span-1">
            <form className="flex flex-col justify-center items-start gap-4 w-100">
              <div className="flex justify-between gap-3 w-100">
                <input
                  placeholder="Your Name"
                  className="w-full px-3 py-2 outline-cyan-500 border border-gray-700 rounded-none"
                />
                <input
                  placeholder="Your Email"
                  className="w-full px-3 py-2 outline-cyan-500 border border-gray-700 rounded-none"
                />
              </div>
              <input
                placeholder="Subject"
                className="w-full px-3 py-2 outline-cyan-500 border border-gray-700 rounded-none"
              />
              <textarea
                placeholder="Message"
                className="w-full  px-3 py-3 outline-cyan-500 border border-gray-700 rounded-none"
              ></textarea>
              <button className=" bg-cyan-500 text-white py-2 px-5 mx-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="h-auto top-0 left-0 right-0 bottom-0   bg-white opacity-40   absolute"></div>
      </div>
    </section>
  );
}

export default Contact;
