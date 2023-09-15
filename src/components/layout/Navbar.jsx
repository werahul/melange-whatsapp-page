import React, { useState, useEffect } from "react";
import { mainLogo, mainLogo3x } from "../../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed  z-50 w-full  ${hasShadow ? "shadow-md bg-white" : "bg-transparent"
        } transition-colors`}
    >
      <div className="flex justify-between items-center px-4 md:px-12 lg:px-24 h-[4.5rem] sm:h-[5rem] font-nunito">
        <div
          style={{
            width: "176px",
            height: "50px",
            overflow: "hidden",
          }}
        >
          <div to="/">
            <a href="#/"> <img
              src={mainLogo3x}
              alt="Logo"
              className="w-[100%] md:w-auto z-0 h-[100%]  md:h-12 "
            /></a>
          </div>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <RiCloseLine className="hamburger-icon   w-10 h-8" />
            ) : (
              <RiMenu3Line className="hamburger-icon  w-10 h-8" />
            )}
          </button>
        </div>
        <div
          className={`hidden  sm:flex font-extrabold text-[17px] justify-end items-center w-[80%] md:w-[70%] lg:w-[50%] ${isMenuOpen ? "hidden" : ""
            }`}
        >
          {/* <div className="navbar-link cursor-pointer">
            <div activeClassName="active-link" smooth className="nav-link">
              <a href="#ourservices"> Our Services</a>
            </div>
          </div>
          <div className="navbar-link cursor-pointer">
            <div activeClassName="active-link" exact className="nav-link">
              <a href="#pricingplan">Pricing Plan</a>
            </div>
          </div>
          <div className="navbar-link cursor-pointer">
            <div activeClassName="active-link" exact className="nav-link">
              <a href="#testimonials"> Testimonials</a>
            </div>
        </div>*/}
          <div className="navbar-contact shadow-lg rounded-2xl cursor-pointer bg-[#1A1A1A] font-medium text-[17px] text-[#fff] hidden sm:block">
            <div activeClassName="" exact className="">
              <a href="#contactus">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="bg-white pt-20 z-50 -mt-[73px]  flex flex-col items-start  pl-4 hover:multiverse-text pb-20 justify-between h-[40%] font-medium">
            {/*<div className="navbar-link cursor-pointer ">
              <div
                activeClassName="active-link"
                exact
                className="nav-link text-[25px] py-4 "
                onClick={closeMenu}
              >
                <a href="#ourservices"> Our Services</a>
              </div>
            </div>
            <div className="navbar-link cursor-pointer">
              <div
                activeClassName="active-link"
                exact
                className="nav-link text-[25px] "
                onClick={closeMenu}
              >
                <a href="#pricingplan">Pricing Plan</a>
              </div>
            </div>
            <div className="navbar-link cursor-pointer">
              <div
                activeClassName="active-link"
                exact
                onClick={closeMenu}
                className="nav-link text-[25px] py-4 "
              >
                <a href="#testimonials"> Testimonials</a>
              </div>
      </div>*/}
            <div className="navbar-link cursor-pointer">
              <div
                activeClassName="active-link"
                exact
                className="nav-link text-[25px] "
                onClick={closeMenu}
              >
                <a href="#contactus">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
