import Link from "next/link";
import React from "react";

const Subscribe = () => {
  return (
    <div >
      <section className="bg-gray-900 text-white ">
        <div className="mx-auto px-4 py-20 my-36 lg:flex lg:items-center">
          <div className="max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-indigo-500 via-blue-500 to-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Abunə olun
            </h1>

            <p className="w-4/5 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Film yeniliklərindən, eksklüziv xəbərlərdən və tövsiyələrdən
              xəbərdar olmaq üçün abunə olun! Bizə qoşulun və heç bir maraqlı
              premyeranı qaçırmayın!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={"/signin"}
                className="inline-block rounded px-8 py-3 transition hover:scale-110 hover:shadow-xl active:bg-indigo-500 w-full border border-primary bg-primary text-sm font-medium text-white  hover:bg-white hover:text-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto duration-300"
              >
                Abunə ol
              </Link>

              <Link
                href="/signin"
                className=" inline-block w-full rounded px-8 py-3  border transition hover:scale-110 hover:shadow-xl  border-primary text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring active:bg-blue-500 sm:w-auto duration-300"
              >
                Ətraflı
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
