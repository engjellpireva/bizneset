import React, { useState } from "react";
import Logo from "../assets/images/logo_transparent.png";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

export default function Navbar(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-900 p-6 text-white fixed w-full">
        <div className="container md:mx-auto md:px-32 px-5 md:flex justify-between">
          <span className="flex justify-between">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-20 cursor-pointer" />
            </Link>
            {open ? (
              <RiCloseFill
                onClick={() => setOpen(!open)}
                className="text-white block cursor-pointer md:hidden my-auto text-4xl"
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setOpen(!open)}
                className="text-white block cursor-pointer md:hidden my-auto text-4xl"
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
            <NavLink name="Ballina" link="/" />
            <NavLink name="Bizneset" link="/feed" />
            <NavLink name="Rreth Nesh" link="/about" />
            <NavLink name="Shërbimet" link="/services" />
          </ul>
        </div>
      </div>
      {props.children}
    </>
  );
}
