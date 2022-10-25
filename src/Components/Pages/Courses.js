import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedAndTopSellingCard from "../FeaturedAndTopSellingCard";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="bg-slate-900 py-32">
      <h2 className="text-center  font-bold text-4xl mb-32 text-slate-100  px-4 ">
        welcome To Coures Page
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:w-4/5 mx-auto">
        {courses.map((course) => (
          <FeaturedAndTopSellingCard
            key={course.id}
            course={course}
            getDetails={true}
          ></FeaturedAndTopSellingCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
