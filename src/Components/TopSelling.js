import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedAndTopSellingCard from "./FeaturedAndTopSellingCard";

const TopSelling = ({ fetchUrl, topic, allButton }) => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch(`${fetchUrl}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  py-20  mx-auto  mt-5 ">
      <h2 className="font-bold text-3xl md:text-4xl text-[#f66962]">
        Our {topic} Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-y-3">
        {course.map((course) => (
          <FeaturedAndTopSellingCard
            key={course.id}
            course={course}
          ></FeaturedAndTopSellingCard>
        ))}
      </div>
      {allButton ? (
        <div className="text-center mt-4">
          <Link
            to={"/courses"}
            className="px-4 py-3 rounded font-bold text-slate-100 bg-[#f66962] "
          >
            Show All Courses
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopSelling;
