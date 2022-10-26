import React from "react";
import { Link } from "react-router-dom";
import notFoundIMage from "./404.png";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="md:w-3/4 mx-auto p-8 bg-slate-800 grid grid-cols-1 sm:grid-cols-2 items-center rounded">
        <div>
          <img className="max-w-full" src={notFoundIMage} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#f66962]"> Sorry! </h1>
          <h3 className="text-xl text-slate-100 mb-8">
            The Content you are looking for, are here
          </h3>
          <Link
            className="px-8 py-3 rounded bg-[#f66962] text-slate-900 font-bold text-xl"
            to={"/"}
          >
            Back To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
