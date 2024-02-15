import React from "react";

const FilterMenu = ({ department, location, jobFunction, clearFilters }) => {
  return (
    <div className="bg-gray-100 m-5 p-10">
      <div className="flex justify-between">
        <div className="flex">
          {department && (
            <div className="flex items-center mr-5">
              <p>{department}</p>
              <button
                className="ml-2 text-red-500"
                onClick={() => clearFilters("department")}
              >
                X
              </button>
            </div>
          )}
          {location && (
            <div className="flex items-center mr-5">
              <p>{location}</p>
              <button
                className="ml-2 text-red-500"
                onClick={() => clearFilters("location")}
              >
                X
              </button>
            </div>
          )}
          {jobFunction && (
            <div className="flex items-center mr-5">
              <p>{jobFunction}</p>
              <button
                className="ml-2 text-red-500"
                onClick={() => clearFilters("jobFunction")}
              >
                X
              </button>
            </div>
          )}
        </div>
        <div>
          <button className="text-green-500" onClick={() => clearFilters()}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
