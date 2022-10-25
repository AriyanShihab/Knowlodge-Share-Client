import React from "react";
import { Link } from "react-router-dom";
import TopSelling from "../TopSelling";
import bannerGirl from "./bannerGirl.png";

const Home = () => {
  return (
    <div className="bg-[#f9fdff] py-20 px-3 ">
      <div className=" sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  py-20 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-[#d6e0fd8b] rounded border ">
        <div>
          <h1 className="font-bold text-4xl md:text-5xl my-4">
            Increase Your Knowledge to create a{" "}
            <span className="text-[#f66962]">better World</span>
          </h1>
          <p className="font-semibold leading-6 mb-5">
            Knowledge is power. Information is liberating. Education is the
            premise of progress, in every society, in every family.
          </p>
          <Link
            className="px-4 py-3 rounded font-bold text-slate-100 bg-[#f66962] m-1 ml-0"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="px-4 py-3 rounded font-bold text-slate-100 bg-[#f66962] m-1 border border-[#f66962] hover:bg-transparent hover:text-[#f66962] transition"
            to={"/signup"}
          >
            Sign up
          </Link>
        </div>
        <img className="md:max-w-[70%] md:ml-auto " src={bannerGirl} alt="" />
      </div>

      {/* top selling */}

      <TopSelling></TopSelling>
    </div>
  );
};

export default Home;
