import React, { useEffect, useState } from "react";
import FeaturedAndTopSellingCard from "./FeaturedAndTopSellingCard";

const TopSelling = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch(
      `https://learning-platform-server-side-ariyanshihab.vercel.app/topSellingCourses`
    )
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  py-20 px-4 mx-auto bg-[#f6f7fb8b] ">
      <h2 className="font-bold text-3xl md:text-4xl text-[#f66962]">
        Our Top selling Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-y-3">
        {course.map((course) => (
          <FeaturedAndTopSellingCard
            key={course.id}
            course={course}
          ></FeaturedAndTopSellingCard>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
