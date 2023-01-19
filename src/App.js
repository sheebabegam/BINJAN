import React from "react";
import "./index.css";

export default function App() {
  return (
    <>
      <div className=" bg-[#f8f7f1] w-full h-screen ">
        <nav
          className="lg:px-[5.5%] md:px-[0%] max-w-screen-lg max-w-screen-2xl py-14 container mx-auto flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="">
            <h1 className="text-2xl font-medium md:ml-[70px] lg:ml-0 sm:ml-[70px]">
              Binjan
            </h1>
          </div>
          {/* <div className="md:hidden">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
            </svg>
          </div> */}

          <div className="">
            <ul className="flex items-center justify-between h-full px-10 uppercase gap-6 font-medium pr-0 pl-0 ">
              <li className="font-medium text-base">Services</li>
              <li className="font-medium text-base ">Experience</li>
              <li className="font-medium text-base ">Portfolio</li>
              <li className="font-medium text-base">Testimonials</li>
              <li className="font-medium flex items-center justify-between gap-6 text-base flex-wrap md:mr-[70px] lg:mr-[70px] sm:mr-[70px] md:flex-wrap">
                <p>+001 (313) 345 678</p>
                <div className="bg-white p-3 rounded-full shadow-2xl ">
                  <svg
                    stroke="currentColor"
                    fill="#286f6c"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
                    <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

{
  /* <div className="md:mr-20">
            <ul
              className="flex items-center justify-between h-full px-10 uppercase gap-6 font-medium pr-0 pl-0 
            md:mt-96 md:block md:bg-white md:p-10 md:pr-0 md:rounded-md
            lg:flex"
            >
              <li className="font-medium text-base md:mb-8">Services</li>
              <li className="font-medium text-base md:mb-8">Experience</li>
              <li className="font-medium text-base md:mb-8">Portfolio</li>
              <li className="font-medium text-base md:mb-8">Testimonials</li>
              <li className="font-medium flex items-center justify-between gap-6 text-base flex-wrap md:mr-[70px] lg:mr-[70px] sm:mr-[70px] md:flex-wrap">
                <p>+001 (313) 345 678</p>
                <div className="bg-white p-3 rounded-full shadow-2xl ">
                  <svg
                    stroke="currentColor"
                    fill="#286f6c"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
                    <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div> */
}
