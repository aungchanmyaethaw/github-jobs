import React from "react";
import { Link } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { dateFormatter } from "../utils/dateFormatter";

const JobItem = ({ job }) => {
  return (
    <Link
      className="flex items-center gap-4 p-2 bg-white rounded shadow"
      to={`/jobdetails/${job.id}`}
    >
      {/* logo */}
      <div className="w-20 h-20 overflow-hidden rounded">
        <img
          src={job?.logo}
          alt={job?.name}
          className="object-cover w-full h-full"
        />
      </div>
      {/* info */}
      <div className="flex flex-col gap-2 lg:flex-row lg:justify-between grow">
        <div className="flex flex-col gap-1 mb-2 lg:mb-0">
          <span className="text-xs font-semibold text-gray-600">
            {job?.name}
          </span>
          <h3 className="text-gray-600">{job?.title}</h3>
          {JSON.parse(job?.fulltime) ? (
            <div className="px-1 border border-gray-600 rounded w-max">
              <span className="text-xs font-medium text-gray-600">
                Full Time
              </span>
            </div>
          ) : (
            <div className="pt-2"></div>
          )}
        </div>
        <div className="flex items-end gap-8 pr-4">
          <div className="flex items-center gap-2 text-gray-500">
            <BiWorld />
            <span className="text-xs font-medium lg:text-sm">{job.city}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <AiOutlineClockCircle />
            <span className="text-xs font-medium lg:text-sm">
              {dateFormatter(job.date)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobItem;
