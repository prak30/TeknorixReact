import React from "react";
import JobCard from "./JobCard";
import useFetchJobs from "../utils/useFetchJobs";

const Jobs = ({ searchQuery }) => {
  const jobs = useFetchJobs();

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="m-5 p-2 ">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
