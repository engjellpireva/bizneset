import React from "react";
import Logo from "../assets/images/logo_transparent.png";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mt-5 p-5 bg-zinc-900">
      <div className="container mx-auto md:px-32 px-5 text-white">
        <div className="space-y-4 md:space-y-0 md:flex justify-between">
          <span>
            <img src={Logo} alt="Logo" className="w-20 cursor-pointer" />
            <h1 className="text-2xl font-bold uppercase">Bizneset</h1>
          </span>
          <span className="flex flex-col">
            <h1 className="font-bold">Linqet</h1>
            <a href="/newbusiness" className="hover:underline">
              Publiko Biznesin Tuaj
            </a>
            <a href="/feed" className="hover:underline">
              Bizneset
            </a>
            <a href="/contact" className="hover:underline">
              Kontakti
            </a>
          </span>
          <span className="flex flex-col">
            <h1 className="font-bold">Na ndiqni</h1>
            <span className="flex mt-3">
              <a href="/facebook">
                <AiFillFacebook className="text-4xl" />
              </a>
              <a href="/instagram">
                <AiFillInstagram className="text-4xl" />
              </a>
            </span>
            <p className="text-gray-500">
              Të drejtat e autorizuara &copy; 2022 Bizneset LLC.
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}
