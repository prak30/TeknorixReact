import React from "react";
import JobCard from "./JobCard";
import { JOBSOID_API } from "../utils/common";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    const response = await fetch(JOBSOID_API);
    const data = await response.json();
    console.log(data);
    setJobs(data);
  };
  return (
    <div className="m-5 p-2 ">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
