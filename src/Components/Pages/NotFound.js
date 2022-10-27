import React from "react";
import { Link, useLocation } from "react-router-dom";
import notFoundIMage from "./404.png";

const NotFound = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="min-h-screen dark:bg-slate-900 py-20 mx-3">
      <div className="md:w-3/4 mx-auto p-8 dark:bg-slate-800 shadow-2xl grid grid-cols-1 sm:grid-cols-2 items-center rounded">
        <div>
          <img className="max-w-full" src={notFoundIMage} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#f66962]"> Sorry! </h1>
          <h3 className="text-xl text-slate-900 mb-8">PageNot Found</h3>
          <Link
            className="px-8 py-3 rounded bg-[#f66962] text-slate-100 font-bold text-xl"
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
