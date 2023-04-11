import React, { useEffect, useState } from "react";
import { TbBriefcaseOff } from "react-icons/tb";
import JobItem from "./JobItem";
import ReactPaginate from "react-paginate";
const JobLists = ({ jobs }) => {
  const [currentJobLists, setCurrentJobLists] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [jobsPerPage, setJobPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const start = (currentPage - 1) * jobsPerPage;
    const end = jobsPerPage * currentPage;

    setCurrentJobLists(jobs.slice(start, end));
    setPageCount(Math.ceil(jobs.length / 5));
  }, [currentPage, jobs]);

  return (
    <section className="flex flex-col w-full gap-4">
      {jobs?.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 basis-2/3">
          <TbBriefcaseOff className="text-[3rem] text-gray-600" />
          <p className="text-xl font-bold text-gray-600">No jobs available</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-4 basis-2/3">
          {currentJobLists.map((job) => (
            <JobItem job={job} key={job.id} />
          ))}
        </ul>
      )}
      {currentJobLists.length > 0 ? (
        <div className="flex justify-center w-full mt-4">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            previousLabel="Prev"
            className="flex items-center gap-4 "
            activeClassName="bg-blue-500 px-2 rounded  bg-opacity-50"
            nextClassName="bg-blue-500 rounded p-2 text-white"
            previousClassName="bg-blue-500 rounded p-2 text-white"
            pageClassName="p-2"
            pageCount={pageCount}
            onPageChange={(e) => setCurrentPage(e.selected + 1)}
          />
        </div>
      ) : null}
    </section>
  );
};

export default JobLists;
