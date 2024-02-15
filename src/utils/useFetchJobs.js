import { useEffect, useState } from "react";
import { JOBSOID_API } from "../utils/common";

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(JOBSOID_API);
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return jobs;
};

export default useFetchJobs;
