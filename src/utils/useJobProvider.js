import { useState } from "react";
import { useEffect } from "react";
import { JOBSOID_API } from "./common";

const useJobProvider = (id) => {
  const [jobInfo, setJobInfo] = useState([]);
  useEffect(() => {
    fetchJd();
  }, []);
  const fetchJd = async () => {
    const response = await fetch(JOBSOID_API + id);
    const json = await response.json();
    console.log(json);
    setJobInfo(json);
  };
  return jobInfo;
};

export default useJobProvider;
