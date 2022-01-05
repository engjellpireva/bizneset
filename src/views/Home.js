import React from "react";
import Background from "../assets/images/background.jpg";
import { Link } from "react-router-dom";
import {
  BsFillLightningChargeFill,
  BsFillPatchQuestionFill,
} from "react-icons/bs";
import { MdMoneyOff, MdDelete } from "react-icons/md";

const questions = [
  {
    name: 'Për çfarë shërben "Bizneset"?',
    description:
      "Bizneset shërben për reklamimin dhe gjetjen e bizneseve në Kosovë dhe rajon.",
    icon: BsFillPatchQuestionFill,
  },
  {
    name: "Sa kushton për të reklamuar biznesin tim?",
    description:
      "Reklamimi i bizneseve është falas për të gjithë, por në rast se ju dëshironi që biznesi juaj të jetë ne faqën e parë (premium) dhe më leht i gjetur, ju duhet të paguani $$.",
    icon: BsFillPatchQuestionFill,
  },
  {
    name: 'Për sa kohë do të shfaqet reklama ime në "Bizneset"?',
    description:
      "Në momentin që ju dërgoni formën e plotësuar me të dhënat e biznesit tuaj, reklama do të shfaqet menjëherë në faqen tonë.",
    icon: BsFillPatchQuestionFill,
  },
];

const features = [
  {
    name: "Postime të menjëhershme",
    description:
      "Platforma jonë mundëson që biznesi juaj të postohet menjëherë pas kërkesës me formën që ju keni plotësuar.",
    icon: BsFillLightningChargeFill,
  },
  {
    name: "Falas",
    description: "Postimi dhe shfletimi i bizneseve është plotësisht falas.",
    icon: MdMoneyOff,
  },
  {
    name: "Fshirje e menjëhershme",
    description:
      "Në rast se ju dëshironi të largoni nga faqja një postim tuajin, ju mund të bëni atë automatikisht pa kontaktuar me administratorët.",
    icon: MdDelete,
  },
];

export default function Home() {
  return (
    <div>
      <section
        className="flex-col justify-center h-screen md:flex"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container px-5 pt-64 mx-auto md:px-32 md:pt-0">
          <h1 className="pt-5 text-4xl font-bold text-white uppercase">
            Reklamoni biznesin tuaj
          </h1>
          <p className="mt-3 font-bold text-gray-300 text-md">
            Mundësi reklamimi në Kosovë, Shqipëri dhe Maqedoni.
          </p>
          <Link to="/feed">
            <button
              type="button"
              className="w-full p-3 mt-2 mt-5 font-bold text-white uppercase bg-gray-900 rounded-md shadow-lg md:w-1/6"
            >
              Fillo Tani
            </button>
          </Link>
        </div>
      </section>
      <section className="py-20 dark:bg-zinc-900 bg-gray-100" id="about">
        <div className="container px-5 mx-auto dark:text-white text-gray-800 md:px-32">
          <div className="py-12">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base font-semibold tracking-wide uppercase dark:text-indigo-600 text-cyan-600">
                  Rreth Nesh
                </h2>
                <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl">
                  Pyetje dhe përgjigje rreth "Bizneset"
                </p>
              </div>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {questions.map((question) => (
                  <div key={question.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md dark:bg-indigo-500 bg-cyan-500">
                        <question.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 dark:text-gray-100 text-gray-900">
                        {question.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {question.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 dark:bg-zinc-800 bg-white" id="services">
        <div className="container px-5 mx-auto dark:text-gray-100 text-gray-800 md:px-32">
          <div className="py-12 dark:bg-zinc-800 bg-white">
            <div className="px-4 mx-auto max-w-7xl">
              <div className="lg:text-center">
                <h2 className="text-base font-semibold tracking-wide uppercase dark:text-indigo-600 text-cyan-600">
                  Shërbimet
                </h2>
                <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl">
                  Të gjitha shërbimet që "Bizneset" ofron
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md dark:bg-indigo-500 bg-cyan-500">
                          <feature.icon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 dark:text-gray-100 text-gray-900">
                          {feature.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
