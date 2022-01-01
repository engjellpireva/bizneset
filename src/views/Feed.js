import React from "react";
import Logo from "../assets/images/background.jpg";
import Shell from "../assets/images/shell.jpg";
import { MdLocationOn } from "react-icons/md";
import Footer from "../components/Footer";

export default function Feed() {
  return (
    <>
      <div className="container px-5 mx-auto md:px-32 pt-36 md:pt-32">
        <h1 className="text-lg uppercase bg-zinc-800 text-white p-2">
          Bizneset <strong>Premium</strong>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          <div className="border bg-gray-900 text-white shadow-lg">
            <img src={Logo} alt="Shell" className="w-full h-64 object-cover" />
            <span className="flex p-2 justify-between border-t border-b">
              <p className="truncate">ReklamimiReklamimiReklamimiReklamimi</p>
              <span className="flex">
                <MdLocationOn className="my-auto" />
                <p>Gjilan</p>
              </span>
            </span>
            <button
              type="button"
              className="bg-zinc-800 text-white uppercase p-4 w-full"
            >
              Detajet
            </button>
          </div>
          <div className="border bg-gray-900 text-white shadow-lg">
            <img src={Shell} alt="Shell" className="w-full h-64 object-cover" />
            <span className="flex p-2 justify-between border-t border-b">
              <p className="truncate">Shell</p>
              <span className="flex">
                <MdLocationOn className="my-auto" />
                <p>Prishtinë</p>
              </span>
            </span>
            <button
              type="button"
              className="bg-zinc-800 text-white uppercase p-4 w-full"
            >
              Detajet
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-lg uppercase bg-zinc-800 text-white p-2">
            Të gjitha bizneset
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            <div className="border bg-gray-900 text-white shadow-lg">
              <img
                src={Logo}
                alt="Shell"
                className="w-full h-64 object-cover"
              />
              <span className="flex p-2 justify-between border-t border-b">
                <p className="truncate">ReklamimiReklamimiReklamimiReklamimi</p>
                <span className="flex">
                  <MdLocationOn className="my-auto" />
                  <p>Gjilan</p>
                </span>
              </span>
              <button
                type="button"
                className="bg-zinc-800 text-white uppercase p-4 w-full"
              >
                Detajet
              </button>
            </div>
            <div className="border bg-gray-900 text-white shadow-lg">
              <img
                src={Shell}
                alt="Shell"
                className="w-full h-64 object-cover"
              />
              <span className="flex p-2 justify-between border-t border-b">
                <p className="truncate">Shell</p>
                <span className="flex">
                  <MdLocationOn className="my-auto" />
                  <p>Prishtinë</p>
                </span>
              </span>
              <button
                type="button"
                className="bg-zinc-800 text-white uppercase p-4 w-full"
              >
                Detajet
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
