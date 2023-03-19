import React from "react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
function About() {
  return (
    <section>
      <div
        className="relative lg:bg-fixed flex items-center justify-center h-72"
        style={{
          backgroundImage: `url("https://bootstrapmade.com/demo/templates/Nova/assets/img/about-header.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute text-center z-10 mt-7">
          <h2 className="text-white font-Raleway text-3xl lg:text-6xl font-medium">
            About
          </h2>
          <h5 className="text-cyan-500  font-Raleway font-bold  mt-1 flex items-center justify-center gap-2">
            <Link
              to={"/"}
              className="no-underline hover:underline text-base text-gray-300 hover:text-gray-300"
            >
              Home
            </Link>
            <span className="text-white font-poppins text-xs">/</span> About
          </h5>
        </div>
        <div className="h-auto top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-75 absolute"></div>
      </div>

      <div className="container-lg grid sm:grid-cols-1 md:grid-cols-3 gap-14 py-16">
        <div className="flex items-center justify-center col-span-1 md:col-span-1">
          <img
            src="https://bootstrapmade.com/demo/templates/Nova/assets/img/about.jpg"
            alt=" "
            className="h-56 w-96 md:h-64 md:w-80 lg:h-72 lg:w-full"
          />
        </div>
        <div className="col-span-1 flex items-center justify-center flex-col md:flex md:items-start md:justify-start md:col-span-2">
          <h3 className="text-gray-700 font-poppins font-semibold md:text-3xl lg:mb-3">
            Voluptatem dignissimos provident quasi
          </h3>
          <p className="text-sky-800 px-12 md:px-0 lg:mt-6">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
          <ul className="p-0 lg:mt-8">
            <li className="flex justify-start items-center gap-1 text-base font-bold font-Raleway  md:mb-4">
              <AiFillCheckCircle className="text-cyan-600 text-2xl" /> Ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="flex justify-start items-center gap-1 text-base font-bold font-Raleway   md:mb-4">
              <AiFillCheckCircle className="text-cyan-600 text-2xl" /> Duis aute
              irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="flex justify-start items-center gap-1 text-base font-bold font-Raleway  ">
              <AiFillCheckCircle className="text-cyan-600 text-2xl" /> Ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
        </div>
      </div>

      <div className="container-lg pb-16">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold font-serif text-gray-600">
            Why Choose Us
          </h2>
          <span className="flex items-center justify-center w-20 h-0.5 bg-cyan-500 mt-2 rounded-xl"></span>
        </div>

        <div className="md:flex items-center justify-center bg-gray-200 mt-16 w-full flex-wrap md:grid md:grid-cols-2 ">
          <div className="flex justify-between items-center">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/why-us-bg.jpg"
              style={{ width: "600px", height: "570px" }}
              alt=""
              className="col-span-1"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Carousel slide={true} className="p-16 md:p-20  ">
              <Carousel.Item>
                <h3 className="text-2xl font-poppins text-slate-800 font-semibold">
                  Let's grow your business together
                </h3>
                <h4 className="text-lg font-poppins text-sky-900 font-light">
                  Optio reiciendis accusantium iusto architecto at quia minima
                  maiores quidem, dolorum.
                </h4>
                <p className="font-poppins text-zinc-800font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, ipsam perferendis asperiores explicabo vel
                  tempore velit totam, natus nesciunt accusantium dicta quod
                  quibusdam ipsum maiores nobis non, eum. Ullam reiciendis
                  dignissimos laborum aut, magni voluptatem velit doloribus quas
                  sapiente optio.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <h3 className="text-2xl font-poppins text-slate-800 font-semibold">
                  Unde perspiciatis ut repellat dolorem
                </h3>
                <h4 className="text-lg font-poppins text-sky-900 font-light">
                  Amet cumque nam sed voluptas doloribus iusto. Dolorem eos
                  aliquam quis.
                </h4>
                <p className="font-poppins text-zinc-800font-normal">
                  Dolorem quia fuga consectetur voluptatem. Earum consequatur
                  nulla maxime necessitatibus cum accusamus. Voluptatem dolorem
                  ut numquam dolorum delectus autem veritatis facilis. Et ea ut
                  repellat ea. Facere est dolores fugiat dolor.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <h3 className="text-2xl font-poppins text-slate-800 font-semibold">
                  Aliquid non alias minus
                </h3>
                <h4 className="text-lg font-poppins text-sky-900 font-light">
                  Necessitatibus voluptatibus explicabo dolores a vitae
                  voluptatum.
                </h4>
                <p className="font-poppins text-zinc-800font-normal">
                  Neque voluptates aut. Soluta aut perspiciatis porro deserunt.
                  Voluptate ut itaque velit. Aut consectetur voluptatem
                  aspernatur sequi sit laborum. Voluptas enim dolorum fugiat
                  aut.
                </p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("https://bootstrapmade.com/demo/templates/Nova/assets/img/cta-bg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "55vh",
        }}
        className="relative my-5 bg-fixed  "
      >
        <div className="position-absolute  bg-slate-800 bg-opacity-75 top-0 left-0 right-0 bottom-0  "></div>
        <div className="absolute flex items-center justify-center flex-col text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-white font-poppins font-bold text-3xl mb-3">
            Ut fugiat aliquam aut non
          </h3>
          <p className="text-white font-poppins mb-4 text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="text-white font-poppins text-lg bg-cyan-500 py-2.5 px-5 rounded-full">
            Call To Action
          </button>
        </div>
      </div>

      <div className="container-lg pb-16">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold font-serif text-gray-600">
            Our Team
          </h2>
          <span className="flex items-center justify-center w-20 h-0.5 bg-cyan-500 mt-2 rounded-xl"></span>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:pt-12">
          <div className="relative about-card-wrap cardContainer col-span-1 flex items-center justify-center flex-col group">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/team/team-1.jpg"
              alt=""
              className="h-96 w-96 md:h-full md:w-full"
            />
            <div className="w-100 about-card-wrap-icons absolute flex bg-slate-100 items-center justify-center bottom-16 gap-4  py-3 transition duration-500 ease-in-out">
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
          <div className="relative about-card-wrap cardContainer col-span-1 flex items-center justify-center flex-col group">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/team/team-2.jpg"
              alt=""
              className="h-96 w-96 md:h-full md:w-full"
            />
            <div className="w-100 about-card-wrap-icons absolute flex bg-slate-100 items-center justify-center bottom-16 gap-4  py-3 transition duration-500 ease-in-out">
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
          <div className="relative about-card-wrap cardContainer col-span-1 flex items-center justify-center flex-col group">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/team/team-3.jpg"
              alt=""
              className="h-96 w-96 md:h-full md:w-full"
            />
            <div className="w-100 about-card-wrap-icons absolute flex bg-slate-100 items-center justify-center bottom-16 gap-4  py-3 transition duration-500 ease-in-out">
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
          <div className="relative about-card-wrap cardContainer col-span-1 flex items-center justify-center flex-col group">
            <img
              src="https://bootstrapmade.com/demo/templates/Nova/assets/img/team/team-4.jpg"
              alt=""
              className="h-96 w-96 md:h-full md:w-full"
            />
            <div className="w-100 about-card-wrap-icons absolute flex bg-slate-100 items-center justify-center bottom-16 gap-4  py-3 transition duration-500 ease-in-out">
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

export default About;
