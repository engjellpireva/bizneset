import React, { useState } from "react";
import Logo from "../assets/images/logo_transparent.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

const links = [
  { name: "Ballina", link: "/" },
  { name: "Bizneset", link: "/feed" },
  { name: "Rreth Nesh", link: "/#about" },
  { name: "Shërbimet", link: "/#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-20 w-full p-6 text-white bg-stone-900">
      <div className="container justify-between px-5 md:mx-auto md:px-32 md:flex">
        <span className="flex justify-between">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-20 cursor-pointer" />
          </Link>
          {open ? (
            <RiCloseFill
              onClick={() => setOpen(!open)}
              className="block my-auto text-4xl text-white cursor-pointer md:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="block my-auto text-4xl text-white cursor-pointer md:hidden"
            />
          )}
        </span>
        <ul
          className={`${
            !open
              ? "hidden md:flex text-md uppercase font-bold space-x-4 my-auto"
              : "my-auto text-md uppercase font-bold md:flex md:space-x-4"
          }`}
        >
          {links.map((link) => (
            <li className="text-gray-300 transition duration-500 ease-in-out hover:text-white">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
