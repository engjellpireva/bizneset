import React from "react";
import Background from "../assets/images/background.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto md:px-32 px-5 text-gray-800">
          <h1 className="text-3xl font-bold">Rreth Nesh</h1>
          <p className="md:text-xl mt-4 font-bold text-gray-800 uppercase">
            Për çfarë shërben "Bizneset"?
          </p>
          <p>
            Bizneset shërben për reklamimin dhe gjetjen e bizneseve në Kosovë
            dhe rajon.
          </p>
          <p className="md:text-xl mt-4 font-bold text-gray-800 uppercase">
            Sa kushton për të reklamuar biznesin tim?
          </p>
          <p>
            Reklamimi i bizneseve është falas për të gjithë, por në rast se ju
            dëshironi që biznesi juaj të jetë ne faqën e parë{" "}
            <strong>(premium)</strong> dhe më leht i gjetur, ju duhet të paguani
            $$.
          </p>
          <p className="md:text-xl mt-4 font-bold text-gray-800 uppercase">
            Për sa kohë do të shfaqet reklama ime në "Bizneset"?
          </p>
          <p>
            Në momentin që ju dërgoni formën e plotësuar me të dhënat e biznesit
            tuaj, reklama do të shfaqet menjëherë në faqen tonë.
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto md:px-32 px-5 text-gray-800">
          <h1 className="text-3xl font-bold">Shërbimet</h1>
          {/* Sherbimet */}
          <div className="mt-4"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
