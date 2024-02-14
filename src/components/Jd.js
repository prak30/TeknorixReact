import React from "react";
import { useParams } from "react-router-dom";
import useJobProvider from "../utils/useJobProvider";
import JobCard from "./JobCard";

const Jd = () => {
  const { id } = useParams();
  const jobInfo = useJobProvider(id);
  console.log(jobInfo);
  const company = jobInfo?.company;
  const title = jobInfo?.title;
  const description = jobInfo?.description;
  const department = jobInfo?.department?.title;
  const city = jobInfo?.location?.city;
  const state = jobInfo?.location?.state;
  const type = jobInfo.type === "" ? "Full Time" : jobInfo.type;
  const applyUrl = jobInfo.applyUrl;

  const handleApplyClick = () => {
    window.location.href = applyUrl;
  };

  return (
    <div>
      <p>{company}</p>
      <p>{title}</p>
      <p>{department}</p>
      <div className="flex">
        <span>📍{city},</span>
        <span>{state}</span>
        <button className="bg-gray-200 px-2 ml-3">{type}</button>
      </div>
      <button
        className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded-full border border-blue-500"
        onClick={handleApplyClick}
      >
        Apply
      </button>
      <hr className="h-1 mt-5" />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default Jd;
