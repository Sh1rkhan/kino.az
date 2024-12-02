import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-10">
      <header className="bg-gray-900 ">
        <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className=" md:hidden dropdown   ">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="ml-4 rounded-md bg-primary bg-transparent border border-primary px-5 py-2.5 hover:scale-110 hover:shadow-xl text-sm font-semibold text-white shadow hover:bg-white hover:text-primary duration-300  lg:hidden "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <div
                  tabIndex={0}
                  className=" navbar dropdown-content  h-screen bg-gray-900 z-[1] mt-3 shadow flex flex-col p-20 text-base font-bold text-white gap-10"
                >
                  <Link href={"/movies"} className="hover:text-primary">
                    Filmlər
                  </Link>
                  <Link href={"/tvshows"} className="hover:text-primary">
                    Seriallar
                  </Link>
                  <Link href={"/news"} className="hover:text-primary">
                    Xəbərlər
                  </Link>
                  <Link href={"/soon"} className="hover:text-primary">
                    Tezliklə
                  </Link>
                </div>
              </div>
            </div>

            <div className="sm:flex sm:gap-4 block md:hidden">
              <Link
                href={"/"}
                className="rounded-md bg-primary bg-transparent hover:scale-110 hover:shadow-xl text-xl font-black text-white shadow  hover:text-primary duration-300"
              >
                KINEMA
              </Link>
            </div>

            <div className=" md:items-center md:gap-12 hidden md:block">
              <Link href={"/"} className="block text-[rgb(124,98,227)]">
                <img src="./pngcopy.png" alt="logo" className="w-16" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <div className="flex items-center gap-10 text-sm ">
                  <Link
                    href={"/movies"}
                    className="text-white text-base font-bold transition hover:text-primary duration-300 hover:scale-110 hover:shadow-xl"
                  >
                    Filmlər
                  </Link>

                  <Link
                    href={"/tvshows"}
                    className="text-white text-base font-bold transition hover:text-primary duration-300 hover:scale-110 hover:shadow-xl"
                  >
                    Seriallar
                  </Link>

                  <Link
                    href={"/news"}
                    className="text-white text-base font-bold transition hover:text-primary duration-300 hover:scale-110 hover:shadow-xl"
                  >
                    Xəbərlər
                  </Link>

                  <Link
                    href={"/soon"}
                    className="text-white text-base font-bold transition hover:text-primary duration-300 hover:scale-110 hover:shadow-xl"
                  >
                    Tezliklə
                  </Link>
                </div>
              </nav>
            </div>
            {/* <button className="btn btn-ghost md:w-60 relative w-0"> */}
            <button className="btn btn-ghost md:w-60 relative w-0">
              <input
                type="text"
                placeholder="Axtarış bölməsi..."
                className="input input-ghost w-full hidden md:block"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div className="sm:flex sm:gap-4 mr-5 md:mr-0">
              <Link
                href={"/signin"}
                className="rounded-md bg-primary bg-transparent border border-primary px-5 py-2.5 hover:scale-110 hover:shadow-xl text-sm font-semibold text-white shadow hover:bg-white hover:text-primary duration-300"
              >
                Daxil ol
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
