import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-4 bg-slate-800  w-full bottom-0  text-[#f66962] text-xl">
      <div className="grid md:grid-cols-3 grid-col-1 gap-3 md:w-3/4 mx-auto px-3 py-12">
        <div className="p-2">
          <NavLink
            to="/"
            aria-label="knoledge share"
            title="knoledge share"
            className="inline-flex items-center"
            end
            style={({ isActive }) => {
              return { color: isActive ? "#f66962" : "#111827" };
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f66962"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#f66962"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <span className="ml-2 text-xl font-bold tracking-wide text-[#f66962]">
              Knowledge Share
            </span>
          </NavLink>
          <p className="text-xs ml-8">
            Shara your knowledge to create a better world
          </p>
        </div>
        <div className="p-2">
          <h2>Find Us On Social Media</h2>
          <div className="flex justify-start gap-2 mt-4 text-slate-400">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaLinkedin></FaLinkedin>
            <FaInstagram></FaInstagram>
          </div>
        </div>
        <div className="p-2">
          <h2>Subscribe To Our NewsLetter</h2>

          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-700 rounded-lg border border-gray-300 "
                placeholder="Subscribe"
                required=""
              />
              <button
                type="submit"
                className="text-white absolute right-0 bottom-0 bg-[#f66962]  font-medium rounded-lg text-sm px-4 py-3 "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
