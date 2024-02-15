import React from "react";
import { useParams } from "react-router-dom";
import useJobProvider from "../utils/useJobProvider";
import SocialsShare from "./SocialsShare";

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
    <div className="m-2 p-5 relative">
      <p className="text-lg font-semibold	">{company}</p>
      <p className="text-4xl font-bold	">{title}</p>
      <div className="flex">
        <p className="mr-2">{department}</p>

        <span>📍{city},</span>
        <span>{state}</span>
        <button className="bg-gray-200 px-2 ml-3">{type}</button>
      </div>
      <button
        className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded-full border border-blue-500 mt-10"
        onClick={handleApplyClick}
      >
        Apply
      </button>
      <hr className="h-1 mt-5" />
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <div className="absolute bottom-5 right-5">
        <SocialsShare shareUrl={applyUrl} />
      </div>
    </div>
  );
};

export default Jd;
