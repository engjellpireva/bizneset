import React from "react";
import Background from "../assets/images/background.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
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
        className="md:flex justify-center h-screen flex-col bg-stone-600"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container mx-auto md:px-32 px-5 pt-64 md:pt-0">
          <h1 className="text-4xl text-white pt-5 font-bold uppercase">
            Reklamoni biznesin tuaj
          </h1>
          <p className="text-md text-gray-300 font-bold mt-3">
            Mundësi reklamimi në Kosovë, Shqipëri dhe Maqedoni.
          </p>
          <Link to="/feed">
            <button
              type="button"
              className="bg-gray-900 p-3 text-white mt-2 uppercase font-bold w-full md:w-1/6 mt-5 rounded-md shadow-lg"
            >
              Fillo Tani
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-gray-100 py-20" id="about">
        <div className="container mx-auto md:px-32 px-5 text-gray-800">
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">
                  Rreth Nesh
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Pyetje dhe përgjigje rreth "Bizneset"
                </p>
              </div>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {questions.map((question) => (
                  <div key={question.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                        <question.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
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
      <section className="bg-white py-20" id="services">
        <div className="container mx-auto md:px-32 px-5 text-gray-800">
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">
                  Shërbimet
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Të gjitha shërbimet që "Bizneset" ofron
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
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
      <Footer />
    </div>
  );
}
