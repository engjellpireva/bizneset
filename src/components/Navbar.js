import React, { useState } from "react";
import Logo from "../assets/images/logo_transparent.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
// import ReactCountryFlag from "react-country-flag";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

const links = [
  { id: 0, name: "Ballina", link: "/" },
  { id: 1, name: "Bizneset", link: "/feed" },
  { id: 2, name: "Rreth Nesh", link: "#about" },
  { id: 3, name: "Shërbimet", link: "#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="fixed z-20 w-full p-6 text-white bg-white dark:bg-stone-900">
      <div className="container justify-between px-5 md:mx-auto md:px-32 md:flex">
        <span className="flex justify-between">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-14 cursor-pointer" />
          </Link>
          {open ? (
            <RiCloseFill
              onClick={() => setOpen(!open)}
              className="block my-auto text-4xl text-zinc-900 dark:text-white cursor-pointer md:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="block my-auto text-4xl text-zinc-900 dark:text-white cursor-pointer md:hidden"
            />
          )}
        </span>
        <div className="flex space-x-4">
          <ul
            className={`${
              !open
                ? "hidden md:flex text-md uppercase font-bold space-x-4 my-auto"
                : "my-auto text-md uppercase font-bold md:flex md:space-x-4"
            }`}
          >
            {links.map((link) => (
              <li
                key={link.id}
                className="text-neutral-600 dark:text-white rounded-lg mt-5 md:mt-0 transition duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-indigo-600"
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            <span
              onClick={() => {
                setDarkMode(!darkMode);
                if (darkMode) {
                  return localStorage.setItem("darkMode", "false");
                }
                localStorage.setItem("darkMode", "true");
              }}
              className="block md:hidden p-2 w-2/6 mt-5 my-auto bg-zinc-900 dark:bg-gray-200 rounded-full cursor-pointer"
            >
              {!darkMode ? (
                <FaMoon className="text-white dark:text-black" />
              ) : (
                <BsFillSunFill className="text-white dark:text-black" />
              )}
            </span>
          </ul>
          <span
            onClick={() => {
              setDarkMode(!darkMode);
              if (darkMode) {
                return localStorage.setItem("darkMode", "false");
              }
              localStorage.setItem("darkMode", "true");
            }}
            className="hidden md:block p-2 my-auto bg-zinc-900 dark:bg-gray-200 rounded-full cursor-pointer"
          >
            {!darkMode ? (
              <FaMoon className="text-white dark:text-black" />
            ) : (
              <BsFillSunFill className="text-white dark:text-black" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
