import React from "react";

const FeaturedAndTopSellingCard = ({ course }) => {
  const { name, image, description } = course;
  return (
    <div className="p-3 bg-white rounded shadow-xl m-2">
      <img className="min-w-full rounded-md" src={image} alt="" />
      <h2 className="text-xl font-semibold mt-4 mb-6">{name}</h2>
      <p className="mt-4">{description.slice(0, 120)}....</p>
    </div>
  );
};

export default FeaturedAndTopSellingCard;
