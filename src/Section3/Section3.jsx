import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
function Section3() {
  return (
    <section className="py-10 md:-mt-72">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold font-serif text-gray-600">
          Recent Blog Posts
        </h2>
        <span className="flex items-center justify-center w-20 h-0.5 bg-cyan-500 mt-2 rounded-xl"></span>
      </div>
      <div className="container-lg py-12">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 lg:grid-cols-4 md:gap-6 ">
          <div className="cardContainer overflow-hidden cursor-pointer group">
            <div>
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-1.jpg"
                className="group-hover:scale-110 duration-500"
                alt=""
              />
            </div>
            <div className="mt-2">
              <span className="text-cyan-600 font-poppins text-md">
                Tue, December 12
              </span>
              <span className="font-poppins text-md"> / Julia Parker</span>
            </div>
            <h3 className="text-lg font-bold font-poppins group-hover:text-cyan-600 transition duration-300 mt-2">
              Eum ad dolor et. Autem aut fugiat debitis
            </h3>
            <p>
              Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel
              omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni
              est...
            </p>
            <div className="flex items-center">
              <span className="text-cyan-600 text-lg font-poppins hover:cursor-pointer">
                Read More
              </span>
              <AiOutlineArrowRight className="text-cyan-600 text-lg font-poppins hover:cursor-pointer" />
            </div>
          </div>
          <div className="cardContainer overflow-hidden  cursor-pointer group">
            <div>
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-2.jpg"
                alt=""
                className="group-hover:scale-110 duration-500"
              />
            </div>
            <div className="mt-2">
              <span className="text-cyan-600 font-poppins text-md">
                Fri, September 05
              </span>
              <span className="font-poppins text-md"> / Mario Douglas</span>
            </div>
            <h3 className="text-lg font-bold font-poppins group-hover:text-cyan-600 transition duration-300 mt-2">
              Et repellendus molestiae qui est sed omnis
            </h3>
            <p>
              Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id.
              Odit quia ab eum assumenda. Quisquam omnis doloribus...
            </p>
            <div className="flex items-center">
              <span className="text-cyan-600 text-lg font-poppins hover:cursor-pointer">
                Read More
              </span>
              <AiOutlineArrowRight className="text-cyan-600 text-lg font-poppins hover:cursor-pointer" />
            </div>
          </div>
          <div className="cardContainer overflow-hidden  cursor-pointer group">
            <div>
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-3.jpg"
                alt=""
                className="group-hover:scale-110 duration-500"
              />
            </div>
            <div className="mt-2">
              <span className="text-cyan-600 font-poppins text-md">
                Tue, July 27
              </span>
              <span className="font-poppins text-md"> / Lisa Hunter</span>
            </div>
            <h3 className="text-lg font-bold font-poppins group-hover:text-cyan-600 transition duration-300 mt-2">
              Quia assumenda est et veritati
            </h3>
            <p>
              Quia nam eaque omnis explicabo similique eum quaerat similique
              laboriosam. Quis omnis repellat sed quae consectetur magnam...
            </p>
            <div className="flex items-center">
              <span className="text-cyan-600 text-lg font-poppins hover:cursor-pointer">
                Read More
              </span>
              <AiOutlineArrowRight className="text-cyan-600 text-lg font-poppins hover:cursor-pointer" />
            </div>
          </div>
          <div className="cardContainer overflow-hidden  cursor-pointer group">
            <div>
              <img
                src="https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-4.jpg"
                alt=""
                className="group-hover:scale-110 duration-500"
              />
            </div>
            <div className="mt-2">
              <span className="text-cyan-600 font-poppins text-md">
                Tue, Sep 16
              </span>
              <span className="font-poppins text-md"> / Mario Douglas</span>
            </div>
            <h3 className="text-lg font-bold font-poppins group-hover:text-cyan-600 transition duration-300 mt-2">
              Pariatur quia facilis similique deleniti
            </h3>
            <p>
              Et consequatur eveniet nam voluptas commodi cumque ea est ex. Aut
              quis omnis sint ipsum earum quia eligendi...
            </p>
            <div className="flex items-center">
              <span className="text-cyan-600 text-lg font-poppins hover:cursor-pointer">
                Read More
              </span>
              <AiOutlineArrowRight className="text-cyan-600 text-lg font-poppins hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
