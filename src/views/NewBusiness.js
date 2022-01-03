import React, { useState } from "react";

export default function NewBusiness() {
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const PageOne = () => {
    return (
      <div className="container px-5 mx-auto md:px-32 pt-36">
        <div className="mb-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Informacione rreth biznesit
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Plotsoni formën e mëposhtme për të vazhduar me hapin tjeter (Hapi{" "}
            <strong>{step}</strong> nga <strong>{totalSteps}</strong>)
          </p>
        </div>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="business-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Emri i biznesit
                </label>
                <input
                  type="text"
                  name="business-name"
                  id="business-name"
                  autoComplete="given-name"
                  className="mt-1 outline-none focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Kompania LLC"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="business-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail adresa e biznesit
                </label>
                <input
                  type="text"
                  name="business-email"
                  id="business-email"
                  autoComplete="given-email"
                  className="mt-1 outline-none focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="email@business.com"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="business-phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Numri i telefonit të biznesit
                </label>
                <input
                  type="number"
                  name="business-phone"
                  id="business-phone"
                  autoComplete="given-phone"
                  className="mt-1 outline-none focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="+383 44 123 456"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="business-phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Shteti
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                >
                  <option>Republika e Kosovës</option>
                  <option>Shqipëri</option>
                  <option>Maqedonia e Veriut</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="business-city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Qyteti
                </label>
                <input
                  type="text"
                  name="business-city"
                  id="business-city"
                  autoComplete="given-city"
                  className="mt-1 outline-none focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Gjilan"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Tjetra
            </button>
          </div>
        </div>
      </div>
    );
  };

  const PageTwo = () => {
    return (
      <div className="container px-5 mx-auto md:px-32 pt-36">
        <div className="mb-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Bashkëngjitjet dhe informacione të tjera të biznesit
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Plotsoni formën e mëposhtme për të përfunduar postimin e biznesit
            (Hapi <strong>{step}</strong> nga <strong>{totalSteps}</strong>)
          </p>
        </div>
        <div>
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Websajti i biznesit
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center p-3 rounded-l-md bg-gray-50 text-gray-500 text-sm">
                        https://
                      </span>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="ml-2 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-instagram"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Instagrami i biznesit
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center p-3 rounded-l-md bg-gray-50 text-gray-500 text-sm">
                      https://
                    </span>
                    <input
                      type="text"
                      name="company-instagram"
                      id="company-instagram"
                      className="ml-2 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="www.instagram.com/biznesi"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rreth biznesit
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm p-2 outline-none mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="..."
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Një përshkrim i shkurter rreth biznesit tuaj.
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Logoja e biznesit
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Ngarko një foto</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">ose tërhiq dhe lësho</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG deri në 80MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Prapa
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Posto
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 h-screen">
      {step === 1 && <PageOne />}
      {step === 2 && <PageTwo />}
    </div>
  );
}
