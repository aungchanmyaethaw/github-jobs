import React, { useState } from "react";
import { useGetJobs } from "../../hooks/useGetJobs";
import { BeatLoader } from "react-spinners";
import FilterAside from "../../components/FilterAside";
import JobLists from "../../components/GitHubJobLists";
import GitHubSearchBar from "../../components/GitHubSearchBar";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const [location, setLocation] = useState("");
  const { data: jobs, isLoading } = useGetJobs(
    searchTerm,
    isFullTime,
    location
  );

  return (
    <section className="flex flex-col gap-6">
      <GitHubSearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

      <div className="flex flex-col gap-8 lg:flex-row">
        <FilterAside
          setIsFullTime={setIsFullTime}
          isFullTime={isFullTime}
          setLocation={setLocation}
          location={location}
        />
        {isLoading ? (
          <section className="flex items-center justify-center w-full py-[10rem] ">
            <BeatLoader />
          </section>
        ) : (
          <JobLists jobs={jobs} />
        )}
      </div>
    </section>
  );
};

export default Home;
