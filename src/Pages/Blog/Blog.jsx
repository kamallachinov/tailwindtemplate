import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMan2 } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import {
  AiOutlineComment,
  AiOutlineArrowRight,
  AiOutlineSearch,
} from "react-icons/ai";
function Blog() {
  return (
    <section>
      <div
        className="relative lg:bg-fixed flex items-center justify-center h-72"
        style={{
          backgroundImage: `url("https://bootstrapmade.com/demo/templates/Nova/assets/img/blog-header.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute text-center z-10 mt-7">
          <h2 className="text-white font-Raleway text-3xl lg:text-6xl font-medium">
            Blog
          </h2>
          <h5 className="text-cyan-500  font-Raleway font-bold  mt-1 flex items-center justify-center gap-2">
            <Link
              to={"/"}
              className="no-underline hover:underline text-base text-gray-300 hover:text-gray-300"
            >
              Home
            </Link>
            <span className="text-white font-poppins text-xs">/</span> Blog
          </h5>
        </div>
        <div className="h-auto top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-75 absolute"></div>
      </div>

      <div className="container-lg grid grid-cols-1 md:grid-cols-3  md:gap-8 py-8 md:py-16">
        <div className="cardsContainer col-span-1  md:col-span-2  gap-0 ">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="cardContainer col-span-1 md:col-span-1 border-b-2 border-gray-300">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-1.jpg"
                alt=""
                className="lg:w-full lg:h-64"
              />
              <h2 className="my-2 font-poppins font-medium text-xl hover:text-cyan-500 duration-500">
                Dolorum optio tempore voluptas dignissimos cumque fuga qui
                quibusdam quia
              </h2>
              <div>
                <ul className="m-0 p-0 flex justify-start items-center gap-4 md:gap-8">
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <MdOutlineMan2 />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <BiTimeFive />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <AiOutlineComment />
                    John Doe
                  </li>
                </ul>
              </div>
              <p className="text-sm mt-2 text-stone-600 opacity-80 font-poppins">
                Similique neque nam consequuntur ad non maxime aliquam quas.
                Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                nostrum quidem aliquid dicta.
              </p>
              <div className="flex justify-end items-end mb-2">
                <button className="text-lg flex justify-center items-center  text-cyan-500">
                  Read More <AiOutlineArrowRight className="text-base" />
                </button>
              </div>
            </div>
            <div className="cardContainer col-span-1 border-b-2 border-gray-300">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-2.jpg"
                alt=""
                className="lg:w-full lg:h-64"
              />
              <h2 className="my-2 font-poppins font-medium text-xl hover:text-cyan-500 duration-500">
                Nisi magni odit consequatur autem nulla dolorem
              </h2>
              <div>
                <ul className="m-0 p-0 flex justify-start items-center gap-4 md:gap-8">
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <MdOutlineMan2 />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <BiTimeFive />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <AiOutlineComment />
                    John Doe
                  </li>
                </ul>
              </div>
              <p className="text-sm mt-2 text-stone-600 opacity-80 font-poppins">
                Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint
                ullam quis illum voluptatum et. Quo libero rerum voluptatem
                pariatur nam.
              </p>
              <div className="flex justify-end items-end mb-2">
                <button className="text-lg flex justify-center items-center  text-cyan-500">
                  Read More <AiOutlineArrowRight className="text-base" />
                </button>
              </div>
            </div>
            <div className="cardContainer col-span-1 border-b-2 border-gray-300">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-3.jpg"
                alt=""
                className="lg:w-full lg:h-64"
              />
              <h2 className="my-2 font-poppins font-medium text-xl hover:text-cyan-500 duration-500">
                Possimus soluta ut id suscipit ea ut. In quo quia et soluta
                libero sit sint.
              </h2>
              <div>
                <ul className="m-0 p-0 flex justify-start items-center gap-4 md:gap-8">
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <MdOutlineMan2 />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <BiTimeFive />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <AiOutlineComment />
                    John Doe
                  </li>
                </ul>
              </div>
              <p className="text-sm mt-2 text-stone-600 opacity-80 font-poppins">
                Aut iste neque ut illum qui perspiciatis similique recusandae
                non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat
                voluptate enim tenetur sunt omnis.
              </p>
              <div className="flex justify-end items-end mb-2">
                <button className="text-lg flex justify-center items-center  text-cyan-500">
                  Read More <AiOutlineArrowRight className="text-base" />
                </button>
              </div>
            </div>
            <div className="cardContainer col-span-1 border-b-2 border-gray-300">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-4.jpg"
                alt=""
                className="lg:w-full lg:h-64"
              />
              <h2 className="my-2 font-poppins font-medium text-xl hover:text-cyan-500 duration-500">
                Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                explicabo eius exercitationem.
              </h2>
              <div>
                <ul className="m-0 p-0 flex justify-start items-center gap-4 md:gap-8">
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <MdOutlineMan2 />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <BiTimeFive />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <AiOutlineComment />
                    John Doe
                  </li>
                </ul>
              </div>
              <p className="text-sm mt-2 text-stone-600 opacity-80 font-poppins">
                Aspernatur rerum perferendis et sint. Voluptates cupiditate
                voluptas atque quae. Rem veritatis rerum enim et autem. Saepe
                atque cum eligendi eaque iste omnis a qui.
              </p>
              <div className="flex justify-end items-end mb-2">
                <button className="text-lg flex justify-center items-center  text-cyan-500">
                  Read More <AiOutlineArrowRight className="text-base" />
                </button>
              </div>
            </div>
            <div className="cardContainer col-span-1 border-b-2 border-gray-300">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-5.jpg"
                alt=""
                className="lg:w-full lg:h-64"
              />
              <h2 className="my-2 font-poppins font-medium text-xl hover:text-cyan-500 duration-500">
                Accusamus quaerat aliquam qui debitis facilis consequatur
              </h2>
              <div>
                <ul className="m-0 p-0 flex justify-start items-center gap-4 md:gap-8">
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <MdOutlineMan2 />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <BiTimeFive />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <AiOutlineComment />
                    John Doe
                  </li>
                </ul>
              </div>
              <p className="text-sm mt-2 text-stone-600 opacity-80 font-poppins">
                In itaque assumenda aliquam voluptatem qui temporibus iusto nisi
                quia. Autem vitae quas aperiam nesciunt mollitia tempora odio
                omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut
                corrupti autem consequuntur totam dolorem.
              </p>
              <div className="flex justify-end items-end mb-2">
                <button className="text-lg flex justify-center items-center  text-cyan-500">
                  Read More <AiOutlineArrowRight className="text-base" />
                </button>
              </div>
            </div>
            <div className="cardContainer col-span-1 border-b-2 border-gray-300">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-6.jpg"
                alt=""
                className="lg:w-full lg:h-64"
              />
              <h2 className="my-2 font-poppins font-medium text-xl hover:text-cyan-500 duration-500">
                Distinctio provident quibusdam numquam aperiam aut
              </h2>
              <div>
                <ul className="m-0 p-0 flex justify-start items-center gap-4 md:gap-8">
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <MdOutlineMan2 />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <BiTimeFive />
                    John Doe
                  </li>
                  <li className="flex justify-center items-center gap-1 text-cyan-500">
                    <AiOutlineComment />
                    John Doe
                  </li>
                </ul>
              </div>
              <p className="text-sm mt-2 text-stone-600 opacity-80 font-poppins">
                Expedita et temporibus eligendi enim molestiae est architecto
                praesentium dolores. Illo laboriosam officiis quis. Labore
                officia quia sit voluptatem nisi est dignissimos totam. Et
                voluptate et consectetur voluptatem id dolor magni impedit.
                Omnis dolores sit.
              </p>
              <div className="flex justify-end items-end mb-2">
                <button className="text-lg flex justify-center items-center  text-cyan-500">
                  Read More <AiOutlineArrowRight className="text-base" />
                </button>
              </div>
            </div>
          </div>

          <div className="pagination mt-4  col-span-2 flex items-center justify-center gap-3">
            <span className="font-poppins flex items-center justify-center  text-white text-xl bg-cyan-500 opacity-50 rounded-full w-10 h-10">
              1
            </span>
            <span className="font-poppins flex items-center justify-center  text-white text-xl bg-cyan-500 rounded-full w-10 h-10">
              2
            </span>
            <span className="font-poppins flex items-center justify-center  text-white text-xl bg-cyan-500 opacity-50 rounded-full w-10 h-10">
              3
            </span>
          </div>
        </div>
        <div className="sideBarContainer  md:col-span-1">
          <h3 className="font-poppins text-2xl font-normal opacity-80 ">
            Search
          </h3>
          <div className="flex justify-start items-center">
            <input
              placeholder="Search..."
              className="w-full border-2 outline-none px-2 py-1 font-poppins"
            />
            <span className="bg-cyan-500 text-2xl text-white  py-2 px-2 rounded">
              <AiOutlineSearch />
            </span>
          </div>
          <h3 className="font-poppins text-2xl font-normal opacity-80 mt-4">
            Categories
          </h3>
          <ul className="m-0 p-0 flex flex-col gap-2">
            <li className="cursor-pointer text-base font-Raleway">
              General (25)
            </li>
            <li className="cursor-pointer text-base font-Raleway">
              Lifestyle (12)
            </li>
            <li className="cursor-pointer text-base font-Raleway">
              Travel (5)
            </li>
            <li className="cursor-pointer text-base font-Raleway">
              Design (22)
            </li>
            <li className="cursor-pointer text-base font-Raleway">
              Creative (8)
            </li>
            <li className="cursor-pointer text-base font-Raleway">
              Educaion (14)
            </li>
          </ul>
          <h3 className="font-poppins text-2xl font-normal opacity-80 mt-4">
            Recent Posts
          </h3>
          <ul className="flex flex-col gap-4 m-0 p-0">
            <li className="flex justify-center items-center gap-3 shadow-md p-3">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-recent-1.jpg"
                alt=""
                className="md:w-24 h-20"
              />
              <div className="flex flex-col ">
                <h4 className="text-xl font-poppins font-normal lg:mb-2 text-sky-900">
                  Nihil blanditiis at in nihil autem
                </h4>
                <span className="italic font-normal">Jan 1, 2020</span>
              </div>
            </li>
            <li className="flex justify-center items-center gap-3 shadow-md p-3">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-recent-2.jpg"
                alt=""
                className="md:w-24 h-20"
              />
              <div className="flex flex-col ">
                <h4 className="text-xl font-poppins font-normal lg:mb-2 text-sky-900">
                  Quidem autem et impedit
                </h4>
                <span className="italic font-normal">Jan 1, 2020</span>
              </div>
            </li>
            <li className="flex justify-center items-center gap-3 shadow-md p-3">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-recent-3.jpg"
                alt=""
                className="md:w-24 h-20"
              />
              <div className="flex flex-col ">
                <h4 className="text-xl font-poppins font-normal lg:mb-2 text-sky-900">
                  Id quia et et ut maxime similique occaecati ut
                </h4>
                <span className="italic font-normal">Jan 1, 2020</span>
              </div>
            </li>
            <li className="flex justify-center items-center gap-3 shadow-md p-3">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-recent-4.jpg"
                alt=""
                className="md:w-24 h-20"
              />
              <div className="flex flex-col ">
                <h4 className="text-xl font-poppins font-normal lg:mb-2 text-sky-900">
                  Laborum corporis quo dara net para
                </h4>
                <span className="italic font-normal">Jan 1, 2020</span>
              </div>
            </li>
            <li className="flex justify-center items-center gap-3 shadow-md p-3">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-recent-5.jpg"
                alt=""
                className="md:w-24 h-20"
              />
              <div className="flex flex-col ">
                <h4 className="text-xl font-poppins font-normal lg:mb-2 text-sky-900">
                  Et dolores corrupti quae illo quod dolor
                </h4>
                <span className="italic font-normal">Jan 1, 2020</span>
              </div>
            </li>
          </ul>
          <h3 className="font-poppins text-2xl font-normal opacity-80 mt-4">
            Tags
          </h3>
          <div className="flex gap-3">
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              App
            </span>
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              IT
            </span>
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Business
            </span>
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Mac
            </span>
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Design
            </span>
          </div>
          <div className="flex gap-3 mt-2">
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Office
            </span>
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Creative
            </span>
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Studio
            </span>
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Smart
            </span>
          </div>
          <div className="flex gap-3 mt-2">
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Tips
            </span>
            <span className="m-0 flex justify-center items-center text-cyan-600 border rounded-full p-2 hover:cursor-pointer hover:bg-cyan-500 hover:text-white duration-300">
              Marketing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
