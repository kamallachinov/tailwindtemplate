import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLink, AiOutlineSearch } from "react-icons/ai";
function Portfolio() {
  const [showCardsName, setShowCardName] = useState(["All"]);

  function handleClick(e) {
    const text = e.target.innerText;
    if (text == "All") setShowCardName("All");
    else setShowCardName(text);
  }

  return (
    <section>
      <div
        className="relative lg:bg-fixed flex items-center justify-center h-72"
        style={{
          backgroundImage: `url("https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio-header.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute text-center z-10 mt-7">
          <h2 className="text-white font-Raleway text-3xl lg:text-6xl font-medium">
            Portfolio
          </h2>
          <h5 className="text-cyan-500  font-Raleway font-bold  mt-1 flex items-center justify-center gap-2">
            <Link
              to={"/"}
              className="no-underline hover:underline text-base text-gray-300 hover:text-gray-300"
            >
              Home
            </Link>
            <span className="text-white font-poppins text-xs">/</span> Portfolio
          </h5>
        </div>
        <div className="h-auto top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-75 absolute"></div>
      </div>

      <div className="container-lg py-8 md:py-16">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handleClick}
            className="font-poppins text-xl hover:text-cyan-500 duration-300"
          >
            All
          </button>
          <button
            onClick={handleClick}
            className="font-poppins text-xl hover:text-cyan-500 duration-300"
          >
            App
          </button>
          <button
            onClick={handleClick}
            className="font-poppins text-xl hover:text-cyan-500 duration-300"
          >
            Product
          </button>
          <button
            onClick={handleClick}
            className="font-poppins text-xl hover:text-cyan-500 duration-300"
          >
            Branding
          </button>
          <button
            onClick={handleClick}
            className="font-poppins text-xl hover:text-cyan-500 duration-300"
          >
            Books
          </button>
        </div>
        {showCardsName == "All" && (
          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:mt-6">
            <div className="cardContainer about-card-wrap   col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/app-1.jpg"
                alt=""
                className=""
              />
              <div className="absolute about-card-wrap-icons flex  p-2 bottom-5 bg-white opacity-80 items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1"> App 1</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/product-1.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex  p-2 bottom-5 bg-white opacity-80 items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1"> Product 1</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/branding-1.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Branding 1</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/books-1.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1"> Books 1</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/app-2.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1"> App 2</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/product-2.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Product 2</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/branding-2.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Branding 2</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/books-2.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Books 2</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/app-3.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">App 3</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/product-3.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Product 3</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/branding-3.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Branding 3</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/books-3.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Books 3</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
          </div>
        )}
        {showCardsName == "App" && (
          <div>
            <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:mt-6">
              <div className="cardContainer about-card-wrap  col-span-1 relative flex items-center justify-center group ">
                <img
                  src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/app-1.jpg"
                  alt=""
                  className=""
                />
                <div className="  absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                  <div className="flex items-start justify-start flex-col">
                    <h4 className="text-xl font-poppins m-0 mb-1"> App 1</h4>
                    <p className="m-0 mb-2">
                      Lorem ipsum, dolor sit amet consectetur
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                    <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                  </div>
                </div>
              </div>
              <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
                <img
                  src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/app-2.jpg"
                  alt=""
                  className=""
                />
                <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                  <div className="flex items-start justify-start flex-col">
                    <h4 className="text-xl font-poppins m-0 mb-1"> App 2</h4>
                    <p className="m-0 mb-2">
                      Lorem ipsum, dolor sit amet consectetur
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                    <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                  </div>
                </div>
              </div>
              <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
                <img
                  src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/app-3.jpg"
                  alt=""
                  className=""
                />
                <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                  <div className="flex items-start justify-start flex-col">
                    <h4 className="text-xl font-poppins m-0 mb-1">App 3</h4>
                    <p className="m-0 mb-2">
                      Lorem ipsum, dolor sit amet consectetur
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                    <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showCardsName == "Product" && (
          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:mt-6">
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/product-1.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Product 1</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/product-2.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Product 2</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/product-3.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Product 3</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
          </div>
        )}
        {showCardsName == "Branding" && (
          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:mt-6">
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/branding-1.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Branding 1</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/branding-2.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Branding 2</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/branding-3.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Branding 3</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
          </div>
        )}
        {showCardsName == "Books" && (
          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:mt-6">
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/books-1.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1"> Books 1</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/books-2.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Books 2</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
            <div className="cardContainer about-card-wrap col-span-1 relative flex items-center justify-center group ">
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/portfolio/books-3.jpg"
                alt=""
                className=""
              />
              <div className=" absolute about-card-wrap-icons flex p-2 bottom-5 bg-white opacity-80  items-center justify-center transition duration-500  gap-4">
                <div className="flex items-start justify-start flex-col">
                  <h4 className="text-xl font-poppins m-0 mb-1">Books 3</h4>
                  <p className="m-0 mb-2">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="text-3xl mr-3 text-gray-500 hover:text-cyan-500 duration-300" />
                  <AiOutlineLink className="text-3xl text-gray-500 hover:text-cyan-500 duration-300" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
