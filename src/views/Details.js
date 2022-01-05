import React from "react";
import Shell from "../assets/images/shell.jpg";
import { GoMention } from "react-icons/go";

export default function Details() {
  return (
    <div className="dark:bg-zinc-900 bg-gray-200 pb-10 md:pb-0 md:h-screen md:flex md:justify-center md:items-center">
      <div className="container px-5 mx-auto md:px-32 pt-36 md:pt-0">
        <div className="shadow dark:shadow-zinc-700">
          <div className="px-4 py-5 sm:px-6 dark:bg-neutral-900 bg-gray-50">
            <span className="flex space-x-2">
              <img
                src={Shell}
                alt="Shell"
                className="rounded-full h-24 w-24 object-cover"
              />
              <span className="my-auto">
                <h3 className="text-lg leading-6 font-medium dark:text-white text-gray-900">
                  Informacione rreth biznesit
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Detajet dhe postimi i plotë.
                </p>
              </span>
            </span>
          </div>
          <div className="border-t dark:border-zinc-900 border-gray-200">
            <dl>
              <div className="dark:bg-zinc-800 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium dark:text-gray-300 text-gray-500">
                  Emri i biznesit
                </dt>
                <dd className="mt-1 text-sm dark:text-white text-gray-900 sm:mt-0 sm:col-span-2">
                  Shell LLC
                </dd>
              </div>
              <div className="dark:bg-neutral-900 bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium dark:text-gray-300 text-gray-500">
                  Numri i telefonit
                </dt>
                <dd className="mt-1 text-sm dark:text-white text-gray-900 sm:mt-0 sm:col-span-2">
                  +383 44 123 456
                </dd>
              </div>
              <div className="dark:bg-zinc-800 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium dark:text-gray-300 text-gray-500">
                  Email adresa
                </dt>
                <dd className="mt-1 text-sm dark:text-white text-gray-900 sm:mt-0 sm:col-span-2">
                  shell@rks.com
                </dd>
              </div>
              <div className="dark:bg-neutral-900 bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium dark:text-gray-300 text-gray-500">
                  Shteti
                </dt>
                <dd className="mt-1 text-sm dark:text-white text-gray-900 sm:mt-0 sm:col-span-2">
                  Republika e Kosovës
                </dd>
              </div>
              <div className="dark:bg-zinc-800 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium dark:text-gray-300 text-gray-500">
                  Rreth Kompanisë
                </dt>
                <dd className="mt-1 text-sm dark:text-white text-gray-900 sm:mt-0 sm:col-span-2">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="dark:bg-neutral-900 bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium dark:text-gray-300 text-gray-500">
                  Bashkëngjitjet
                </dt>
                <dd className="mt-1 text-sm dark:text-white text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border dark:border-zinc-800 border-gray-200 rounded-md divide-y dark:divide-zinc-800 divide-gray-200">
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <GoMention
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          Website
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="/instagram"
                          className="font-medium dark:text-zinc-100 dark:hover:text-zinc-200 text-indigo-600 hover:text-indigo-500"
                        >
                          Vizito
                        </a>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <GoMention
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          Instagram
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="/website"
                          className="font-medium dark:text-zinc-100 dark:hover:text-zinc-200 text-indigo-600 hover:text-indigo-500"
                        >
                          Vizito
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
