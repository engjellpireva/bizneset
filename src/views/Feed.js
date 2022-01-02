import React from "react";
import Logo from "../assets/images/background.jpg";
import Shell from "../assets/images/shell.jpg";
import { MdLocationOn } from "react-icons/md";

export default function Feed() {
  return (
    <div className="bg-gray-100 py-5">
      <div className="container px-5 mx-auto md:px-32 pt-36 md:pt-32">
        <h1 className="p-2 text-sm text-white uppercase bg-zinc-800">
          Bizneset <strong>Premium</strong>
        </h1>
        <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-4">
          <div className="text-white bg-gray-900 border shadow-lg">
            <img src={Logo} alt="Shell" className="object-cover w-full h-64" />
            <span className="flex justify-between p-2 border-t border-b">
              <p className="truncate">ReklamimiReklamimiReklamimiReklamimi</p>
              <span className="flex">
                <MdLocationOn className="my-auto" />
                <p>Gjilan</p>
              </span>
            </span>
            <button
              type="button"
              className="w-full p-4 text-white uppercase bg-zinc-800 hover:bg-zinc-900 transition duration-400 ease-in"
            >
              Detajet
            </button>
          </div>
          <div className="text-white bg-gray-900 border shadow-lg">
            <img src={Shell} alt="Shell" className="object-cover w-full h-64" />
            <span className="flex justify-between p-2 border-t border-b">
              <p className="truncate">Shell</p>
              <span className="flex">
                <MdLocationOn className="my-auto" />
                <p>Prishtinë</p>
              </span>
            </span>
            <button
              type="button"
              className="w-full p-4 text-white uppercase bg-zinc-800 hover:bg-zinc-900 transition duration-400 ease-in"
            >
              Detajet
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="p-2 text-sm text-white uppercase bg-zinc-800">
            Të gjitha bizneset
          </h1>
          <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-4">
            <div className="text-white bg-gray-900 border shadow-lg">
              <img
                src={Logo}
                alt="Shell"
                className="object-cover w-full h-64"
              />
              <span className="flex justify-between p-2 border-t border-b">
                <p className="truncate">ReklamimiReklamimiReklamimiReklamimi</p>
                <span className="flex">
                  <MdLocationOn className="my-auto" />
                  <p>Gjilan</p>
                </span>
              </span>
              <button
                type="button"
                className="w-full p-4 text-white uppercase bg-zinc-800 hover:bg-zinc-900 transition duration-400 ease-in"
              >
                Detajet
              </button>
            </div>
            <div className="text-white bg-gray-900 border shadow-lg">
              <img
                src={Shell}
                alt="Shell"
                className="object-cover w-full h-64"
              />
              <span className="flex justify-between p-2 border-t border-b">
                <p className="truncate">Shell</p>
                <span className="flex">
                  <MdLocationOn className="my-auto" />
                  <p>Prishtinë</p>
                </span>
              </span>
              <button
                type="button"
                className="w-full p-4 text-white uppercase bg-zinc-800 hover:bg-zinc-900 transition duration-400 ease-in"
              >
                Detajet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
