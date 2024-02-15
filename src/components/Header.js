import React from "react";
import useFetchJobs from "../utils/useFetchJobs";

const Header = ({
  setSearchQuery,
  setDepartment,
  setLocation,
  setJobFunction,
}) => {
  const jobs = useFetchJobs();

  const handleJobFunctionChange = (e) => {
    setJobFunction(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="m-5 p-10 bg-gray-100">
      <div className="flex mb-5 relative">
        <input
          className="w-full h-12 px-4 py-2"
          type="text"
          placeholder="Search For Job"
          onChange={handleSearch}
        />
        <button className="absolute top-0 right-0 h-full px-4 py-2">🔍</button>
      </div>
      <div className="flex justify-between h-12">
        <select
          className="w-1/3 mr-10 px-4 py-2"
          onChange={handleDepartmentChange}
        >
          <option value="Department">Department</option>
          {jobs.map((job) => (
            <option key={job.id} value={job?.department?.title}>
              {job?.department?.title ? job.department?.title : "QA"}
            </option>
          ))}
        </select>
        <select className="w-1/3 mr-10" onChange={handleLocationChange}>
          <option value="Location">Location</option>
          {jobs.map((job) => (
            <option
              key={job.id}
              value={`${job?.location?.city}, ${job?.location?.state}`}
            >
              {job?.location?.city},{job?.location?.state}
            </option>
          ))}
        </select>
        <select className="w-1/3" onChange={handleJobFunctionChange}>
          <option value="Function">Function</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.title}>
              {job.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
