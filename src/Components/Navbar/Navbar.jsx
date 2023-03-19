import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowUp } from "react-icons/bs";

function Navbar() {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const [showTopBtn, setShowTopBtn] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#293B57") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  let [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-50 opacity-90">
        <nav
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
          className="md:flex items-center justify-between py-6  md:px-12  text-white   w-full "
        >
          <h3 className="cursor-pointer text-2xl font-bold text-slate-200 md:pl-0 pl-9 mb-0">
            Nova
          </h3>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <AiOutlineClose /> : <HiMenu />}
          </div>
          <ul
            className={`md:flex items-center gap-7 md:pt-0 md:pb-0 [pb-3] mb-0 absolute md:static md:bg-transparent bg-slate-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            <li className="cursor-pointer md:my-0 my-3">
              <Link
                to={"/"}
                className="text-xl text-slate-800  md:hover:text-white md:text-slate-200 transition ease-in delay-150 no-underline"
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer md:my-0 my-3">
              <Link
                to={"/about"}
                className="text-xl text-slate-800 md:hover:text-white md:text-slate-200 transition ease-in delay-150 no-underline"
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer md:my-0 my-3">
              <Link
                to={"/services"}
                className="text-xl  text-slate-800 md:hover:text-white md:text-slate-200 transition ease-in delay-150 no-underline"
              >
                Services
              </Link>
            </li>
            <li className="cursor-pointer md:my-0 my-3">
              <Link
                to={"/portfolio"}
                className="text-xl  text-slate-800 md:hover:text-white md:text-slate-200 transition ease-in delay-150 no-underline"
              >
                Portfolio
              </Link>
            </li>
            <li className="cursor-pointer md:my-0 my-3">
              <Link
                to={"/team"}
                className="text-xl  text-slate-800 md:hover:text-white md:text-slate-200 transition ease-in delay-150 no-underline"
              >
                Team
              </Link>
            </li>
            <li className="cursor-pointer md:my-0 my-3">
              <Link
                to={"/blog"}
                className="text-xl  text-slate-800 md:hover:text-white md:text-slate-200 transition ease-in delay-150 no-underline"
              >
                Blog
              </Link>
            </li>
            <li className="cursor-pointer md:my-0 my-3">
              <Link
                to={"/contact"}
                className="text-xl  text-slate-800 md:hover:text-white md:text-slate-200 transition ease-in delay-150 no-underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {showTopBtn && (
          <button
            onClick={goToTop}
            style={{
              position: "fixed",
              padding: "0.75rem 0.75rem",
              fontSize: "20px",
              bottom: "40px",
              right: "40px",
              backgroundColor: "#0891B2",
              color: "#fff",
              textAlign: "center",
              borderRadius: "0.3rem",
              zIndex: "200",
              border: "0",
            }}
          >
            <BsArrowUp />
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;
