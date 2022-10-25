import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import FeaturedAndTopSellingCard from "../FeaturedAndTopSellingCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="bg-slate-900 py-32">
      <h2 className="text-center  font-bold text-4xl mb-32 text-slate-100  px-4 ">
        welcome To Coures Page
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:w-4/5 mx-auto">
        <div className="md:col-span-1">
          {courses.map((course) => (
            <Link
              key={course.id}
              className="px-3 py-2 rounded font-bold text-slate-200 bg-slate-800 m-1 block"
              to={`/courses/${course.id}`}
            >
              {course.name}
            </Link>
          ))}
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {courses.map((course) => (
            <FeaturedAndTopSellingCard
              key={course.id}
              course={course}
              getDetails={true}
            ></FeaturedAndTopSellingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
