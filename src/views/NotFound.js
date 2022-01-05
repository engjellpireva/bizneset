import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-screen justify-center items-center bg-white dark:bg-zinc-900">
      <div className="md:flex md:space-x-3 my-auto">
        <h1 className="text-cyan-900 dark:text-indigo-900 text-6xl font-bold md:px-2 border-b-2 py-2 md:py-0 md:border-none">
          404
        </h1>
        <span className="hidden md:block border-r-2"></span>
        <div>
          <h1 className="text-5xl font-bold text-black dark:text-white">
            Faqja nuk u gjet
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Ju lutemi kontrolloni URL-në dhe provoni përsëri.
          </p>
          <a href="/">
            <button
              type="button"
              className="bg-cyan-900 dark:bg-indigo-900 p-2 rounded-lg mt-5 text-white"
            >
              Kthehu tek Ballina
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
