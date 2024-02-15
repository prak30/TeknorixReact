import React from "react";
import useFetchJobs from "../utils/useFetchJobs";

const Header = ({ setSearchQuery }) => {
  const jobs = useFetchJobs();

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
        <select className="w-1/3 mr-10 px-4 py-2">
          <option value="Department">Department</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.department}>
              {job?.department?.title ? job.department?.title : "QA"}
            </option>
          ))}
        </select>
        <select className="w-1/3 mr-10">
          <option value="Location">Location</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.location}>
              {job?.location?.city},{job?.location?.state}
            </option>
          ))}
        </select>
        <select className="w-1/3">
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
