import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import NotFound from "./NotFound";
import PDFFile from "./PDFFile";

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, name, description, rattings, student, totalHours, image } =
    course;

  if (!course) {
    return <NotFound></NotFound>;
  }

  return (
    <div className="white grid items-center min-h-screen md:p-5">
      <div className="md:w-3/4 mx-auto bg-slate-50 px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3  mx-auto md:px-4 px-2 mb-10">
          <div className="md:col-span-1">
            <img className="min-w-full rounded" src={image} alt="" />
          </div>
          <div className="md:col-span-2 text-slate-900 shadow-2xl p-4">
            <h1 className="text-3xl my-3  font-bold">{name}</h1>
            <p>{description}</p>
            <div className="flex justify-between bg-white shadow-2xl rounded p-2 m-1 text-slate-900">
              <p>sutdent: {student}</p>
              <p>ratting: {rattings}</p>
              <p>Time {totalHours} hours</p>
            </div>
            <PDFDownloadLink
              document={<PDFFile course={course} />}
              fileName="CourseDetails.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  <button className="min-w-full bg-[#f66962] py-2 m-1 rounded font-bold text-slate-800">
                    <FaRegFilePdf className="inline mr-2 text-xl"></FaRegFilePdf>{" "}
                    PDF is Loadeing
                  </button>
                ) : (
                  <button className="min-w-full bg-indigo-500 py-2 m-1 rounded font-bold  text-white">
                    <FaRegFilePdf className="inline mr-2 text-xl text-white"></FaRegFilePdf>{" "}
                    Download PDF
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
        </div>

        <Link
          to={`/courses/checkout/${id}`}
          className="min-w-full block text-center mt-2 bg-[#f66962] py-3 rounded font-bold text-slate-800"
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
