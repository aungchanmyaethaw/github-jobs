import React from "react";
import { TbBriefcase } from "react-icons/tb";
const GitHubSearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="search h-[10rem] rounded-lg flex items-center justify-center relative px-4 overflow-hidden">
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-20" />
      <div className="relative z-20 max-w-[45rem] w-full bg-white p-4 rounded">
        <form className="flex items-center w-full">
          <TbBriefcase className="mr-3 text-lg text-gray-400 shrink-0" />
          <input
            type="text"
            className="grow focus:outline-none"
            placeholder="Title companies, expertise or benefits"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </section>
  );
};

export default GitHubSearchBar;
