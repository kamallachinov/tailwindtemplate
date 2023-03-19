import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function Section1() {
  return (
    <>
      <section className="container px-20 py-8 lg:py-16">
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

        <div className="flex items-center justify-center flex-col mt-12">
          <h2 className="text-4xl font-bold font-serif text-gray-600">
            Our Services
          </h2>
          <span className="flex items-center justify-center w-20 h-0.5 bg-cyan-500 mt-2 rounded-xl"></span>
        </div>

        <div className="md:flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-12 gap-4 md:gap-10">
          <div className="max-w-lg lg:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Lorem Ipsum
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
          </div>
          <div className="max-w-lg lg:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-teal-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Dolor Sitema
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat tarad limino ata
            </p>
          </div>
          <div className="max-w-lg lg:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-pink-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Sed ut perspiciatis
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-8 lg:mt-12 gap-4 md:gap-10">
          <div className="max-w-lg lg:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Magni Dolores
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborumt
            </p>
          </div>
          <div className="max-w-lg lg:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Nemo Enim
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque
            </p>
          </div>
          <div className="max-w-lg lg:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Eiusmod Tempor
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi
            </p>
          </div>
        </div>
      </section>

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
    </>
  );
}

export default Section1;
