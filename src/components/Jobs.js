import React from "react";
import JobCard from "./JobCard";
import useFetchJobs from "../utils/useFetchJobs";

const Jobs = ({ searchQuery, department, location, jobFunction }) => {
  const jobs = useFetchJobs();

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (department ? job?.department?.title === department : true) &&
      (location
        ? `${job?.location?.city}, ${job?.location?.state}` === location
        : true) &&
      (jobFunction ? job?.title === jobFunction : true)
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
