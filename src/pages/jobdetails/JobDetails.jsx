import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetJob } from "../../hooks/useGetJobs";
import { BeatLoader } from "react-spinners";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { dateFormatter } from "../../utils/dateFormatter";
import { BiWorld } from "react-icons/bi";

const JobDetails = () => {
  const { id } = useParams();

  const { data: job, isLoading } = useGetJob(id);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center w-full py-[10rem] ">
        <BeatLoader />
      </section>
    );
  }

  return (
    <section className="flex flex-col justify-between gap-12 lg:flex-row">
      {/* col-1 */}
      <div className=" basis-1/3">
        <div className="w-full mb-8">
          <Link to="/" className="flex items-center gap-2 ">
            <FaLongArrowAltLeft className="text-blue-500" />
            <span className="text-lg font-medium text-blue-500">
              Go back to search
            </span>
          </Link>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-gray-400 uppercase">
            How to apply
          </h3>
          <p className="text-slate-800 max-w-[20rem] w-full font-medium">
            Please email a copy of your resume and online portfolio to{" "}
            <span className="font-bold text-blue-500">aungchan@gmail.com</span>{" "}
            & CC <span className="font-bold text-blue-500">chan@gmail.com</span>{" "}
          </p>
        </div>
      </div>
      {/* col-2 */}
      <div className="basis-2/3">
        {/* heading */}
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-2xl font-bold lg:text-3xl text-slate-700">
            {job.title}
          </h2>
          {JSON.parse(job?.fulltime) ? (
            <div className="px-1 border border-gray-600 rounded w-max">
              <span className="text-xs font-medium text-gray-600">
                Full Time
              </span>
            </div>
          ) : null}
        </div>
        <div className="flex items-center gap-2 mb-8 lg:mb-12">
          <AiOutlineClockCircle className="text-gray-400" />
          <span className="flex items-center gap-2 font-semibold text-gray-400">
            {dateFormatter(job.date)}
          </span>
        </div>
        <div className="flex items-center gap-4 mb-8 lg:mb-12">
          <img
            src={job?.logo}
            alt={job?.name}
            className="object-cover w-16 h-16 overflow-hidden rounded"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-gray-600 lg:text-xl">
              {job.name}
            </h3>
            <div className="flex items-center gap-2 text-gray-400">
              <BiWorld className="text-gray-400" />
              <span className="text-xs font-medium lg:text-sm">{job.city}</span>
            </div>
          </div>
        </div>
        <h4 className="mb-8 text-xl capitalize text-slate-700">{job.author}</h4>
        <p className="text-base leading-7 lg:leading-8 lg:text-lg text-slate-700">
          {job.content}
        </p>
      </div>
    </section>
  );
};

export default JobDetails;
