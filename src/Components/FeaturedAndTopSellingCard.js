import React from "react";
import { Link } from "react-router-dom";

const FeaturedAndTopSellingCard = ({ course, getDetails }) => {
  const { id, name, image, description } = course;
  return (
    <div className="p-3 bg-gray-900 rounded  m-2 border border-slate-50 border-opacity-20">
      <img className="min-w-full rounded-md" src={image} alt="" />
      <h2 className="text-xl font-semibold mt-4 mb-6 text-slate-100">{name}</h2>
      <p className="my-4 text-slate-100">{description.slice(0, 120)}....</p>
      {getDetails ? (
        <Link
          className="px-3 py-2 rounded font-bold text-slate-900 bg-cyan-500"
          to={`/courses/${id}`}
        >
          Get Details
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default FeaturedAndTopSellingCard;
