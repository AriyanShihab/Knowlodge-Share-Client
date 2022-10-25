import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { name, description, rattings, student, totalHours, image } = course;
  return (
    <div className="bg-slate-900 grid items-center min-h-screen p-5">
      <div className="md:w-3/4 mx-auto bg-slate-800 px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3  mx-auto px-4 mb-10">
          <div className="md:col-span-1">
            <img className="min-w-full rounded" src={image} alt="" />
          </div>
          <div className="md:col-span-2 text-slate-100">
            <h1 className="text-3xl my-3  font-bold">{name}</h1>
            <p>{description}</p>
            <div className="flex justify-between bg-slate-700 rounded p-2 m-1 text-white">
              <p>sutdent: {student}</p>
              <p>ratting: {rattings}</p>
              <p>Time {totalHours} hours</p>
            </div>
          </div>
        </div>
        <button className=" min-w-full mx-auto bg-green-500 rounded py-3 font-bold">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
