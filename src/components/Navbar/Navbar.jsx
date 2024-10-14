import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";

const Navlinks = [
  { name: "Home", link: "/" },
  { name: "Cars", link: "/cars" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 pb-3 my-5 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif">Car Rental</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map((data) => (
                <NavLink key={data.name} to={data.link} className="hover:underline">
                  {data.name}
                </NavLink>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark mode toggle */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
