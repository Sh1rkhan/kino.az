import Link from 'next/link';
import React from 'react'



const Header = () => {
  return (
    <div className="sticky top-0 z-10">
      <header className="bg-gray-900 ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link href={"/"} className="block text-[rgb(124,98,227)]">
                <span className="sr-only">Home</span>
                <img src="./pngcopy.png" alt="logo" className="w-16" />
                {/* <h1 className="text-xl font-bold rounded-md bg-primary bg-transparent border border-primary px-5 py-2.5 text-white shadow hover:text-primary duration-300 ">
                  Kinema
                </h1> */}
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <div className="flex items-center gap-6 text-sm ">
                  <Link
                    href={"/"}
                    className="text-white text-base font-bold transition hover:text-primary duration-300 hover:scale-110 hover:shadow-xl "
                  >
                    Home
                  </Link>

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

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  href={"/signin"}
                  className="rounded-md bg-primary bg-transparent border border-primary px-5 py-2.5 hover:scale-110 hover:shadow-xl text-sm font-semibold text-white shadow hover:bg-white hover:text-primary duration-300"
                >
                  Daxil ol
                </Link>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </header>

      {/* <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link href={"*"}>Homepage</Link>
              <Link href={"*"}>Portfolio</Link>
              <Link href={"*"}>About</Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href={"*"} className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Header;