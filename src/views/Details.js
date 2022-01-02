import React from "react";
import Shell from "../assets/images/shell.jpg";
import { GoMention } from "react-icons/go";

export default function Details() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container px-5 mx-auto md:px-32 pt-36 md:pt-32">
        <div className="md:flex md:space-x-2">
          <div className="mt-7 bg-white md:w-8/12 p-4 rounded-lg border border-gray-200">
            <span className="flex space-x-2">
              <img
                src={Shell}
                alt="Shell"
                className="rounded-full h-24 w-24 object-cover"
              />
              <span className="my-auto">
                <h1 className="text-xl font-semibold tracking-tight">
                  Informacione rreth biznesit
                </h1>
                <p className="text-gray-500 tracking-tight">
                  Detajet dhe aplikacioni i plotë
                </p>
              </span>
            </span>
            <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2">
              <span>
                <p className="text-gray-500 tracking-tight font-semibold">
                  Emri i biznesit
                </p>
                <p>Shell LLC</p>
              </span>
              <span>
                <p className="text-gray-500 tracking-tight font-semibold">
                  Numri i telefonit
                </p>
                <p>+383 45 696 699</p>
              </span>
              <span>
                <p className="text-gray-500 tracking-tight font-semibold">
                  E-Mail Adresa
                </p>
                <p>shell@rks.com</p>
              </span>
              <span>
                <p className="text-gray-500 tracking-tight font-semibold">
                  Shteti
                </p>
                <p>Republika e Kosovës</p>
              </span>
            </div>
            <p className="text-gray-500 tracking-tight font-semibold mt-5">
              Rreth Kompanisë
            </p>
            <p>lorem</p>
            <div className="mt-5">
              <p className="text-gray-500 tracking-tight font-semibold">
                Bashkëngjitjet
              </p>
              <div>
                <div className="flex p-2 mt-1 rounded-lg justify-between w-full border">
                  <span className="flex space-x-2">
                    <GoMention className="my-auto text-gray-500 text-xl" />
                    <p className="my-auto">Instagram</p>
                  </span>
                  <a href="/visit" className="text-indigo-600">
                    Vizito
                  </a>
                </div>
                <div className="flex p-2 mt-1 rounded-lg justify-between w-full border">
                  <span className="flex space-x-2">
                    <GoMention className="my-auto text-gray-500 text-xl" />
                    <p className="my-auto">Website</p>
                  </span>
                  <a href="/visit" className="text-indigo-600">
                    Vizito
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 bg-white md:w-4/12 p-4 rounded-lg border border-gray-200">
            Testing1234
          </div>
        </div>
      </div>
    </div>
  );
}
