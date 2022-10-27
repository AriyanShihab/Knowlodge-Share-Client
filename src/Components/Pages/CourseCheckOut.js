import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import NotFound from "./NotFound";

const CourseCheckOut = () => {
  const course = useLoaderData();
  const { name, description, rattings, student, totalHours, image } = course;
  const [buttonText, setButtonText] = useState("Place Order");

  const handelOrder = () => {
    toast.success(`Order Placed for ${name} `, { autoClose: 1000 });
    setButtonText("Order Placed");
  };
  if (!course) {
    return <NotFound></NotFound>;
  }
  return (
    <div>
      <div className="bg-white grid items-center min-h-screen p-5">
        <div className="md:w-3/4 mx-auto shadow-2xl px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3  mx-auto px-4 mb-10">
            <div className="md:col-span-1">
              <img className="min-w-full rounded" src={image} alt="" />
            </div>
            <div className="md:col-span-2 text-slate-900">
              <h1 className="text-3xl my-3  font-bold text-[#f66962]">
                {name}
              </h1>
              <p>{description}</p>
              <div className="flex justify-between bg-slate-100 rounded p-2 mt-4 text-slate-900">
                <p>sutdent: {student}</p>
                <p>ratting: {rattings}</p>
                <p>Time {totalHours} hours</p>
              </div>
              <button
                className="p-3 bg-[#f66962] text-slate-100 font-bold rounded m-2"
                onClick={handelOrder}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCheckOut;
