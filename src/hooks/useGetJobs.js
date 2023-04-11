import { useQuery } from "@tanstack/react-query";
import { getJobs, getSingleJob } from "../api/getJobs";

export const useGetJobs = (searchTerm, isFullTime, location) => {
  return useQuery(["jobs", searchTerm, isFullTime, location], () =>
    getJobs(searchTerm, isFullTime, location)
  );
};
export const useGetJob = (id) => {
  return useQuery(["job", id], () => getSingleJob(id));
};
