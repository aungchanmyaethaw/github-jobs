import React from "react";
import { BiWorld } from "react-icons/bi";

const FilterAside = ({ setIsFullTime, isFullTime, setLocation, location }) => {
  return (
    <aside className="basis-1/3">
      <div className="flex items-center gap-2 mb-8">
        <input
          type="checkbox"
          checked={isFullTime}
          onChange={(e) => setIsFullTime(e.target.checked)}
          id="fulltime"
        />
        <label htmlFor="fulltime" className="text-sm font-medium text-gray-600">
          Full Time
        </label>
      </div>
      <div className="mb-8">
        <label htmlFor="" className="block mb-4 font-bold text-gray-400">
          LOCATION
        </label>
        <form>
          <div className="flex items-center gap-2 px-2 py-4 bg-white rounded shadow ">
            <BiWorld className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="City,state,zip code or country"
              className="w-full focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </form>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <input
            type="radio"
            value=""
            checked={location === ""}
            onChange={(e) => setLocation(e.target.value)}
            id="all"
          />
          <label htmlFor="all" className="font-semibold text-gray-600">
            All
          </label>
        </li>
        <li className="flex items-center gap-2">
          <input
            type="radio"
            value="london"
            checked={location === "london"}
            onChange={(e) => setLocation(e.target.value)}
            id="london"
          />
          <label htmlFor="london" className="font-semibold text-gray-600">
            London
          </label>
        </li>
        <li className="flex items-center gap-2">
          <input
            type="radio"
            value="wuhan"
            checked={location === "wuhan"}
            onChange={(e) => setLocation(e.target.value)}
            id="wuhan"
          />
          <label htmlFor="wuhan" className="font-semibold text-gray-600">
            Wuhan
          </label>
        </li>
        <li className="flex items-center gap-2">
          <input
            type="radio"
            value="new york"
            checked={location === "new york"}
            onChange={(e) => setLocation(e.target.value)}
            id="newyork"
          />
          <label className="font-semibold text-gray-600" htmlFor="newyork">
            New York
          </label>
        </li>
        <li className="flex items-center gap-2">
          <input
            type="radio"
            value="paris"
            checked={location === "paris"}
            onChange={(e) => setLocation(e.target.value)}
            id="paris"
          />
          <label htmlFor="paris" className="font-semibold text-gray-600">
            Paris
          </label>
        </li>
      </ul>
    </aside>
  );
};

export default FilterAside;
