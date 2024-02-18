import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const title = job.title;
  const city = job.location.city;
  const state = job.location.state;
  const id = job.id;
  const type = job.type === "" ? "Full Time" : job.type;
  const applyUrl = job.applyUrl;
  const navigate = useNavigate();

  const viewJd = () => {
    navigate(`/jobs/` + id);
  };

  const handleApplyClick = () => {
    window.location.href = applyUrl;
  };
  return (
    <div>
      <p className="text-4xl font-bold">{title}</p>
      <div className="w-20 border-b-4 border-blue-500 mb-10 "></div>
      <div className="flex justify-between mb-10">
        <div>
          <p className="text-xl font-bold">{title}</p>
          <div className="flex">
            <span>📍{city},</span>
            <span>{state}</span>
            <button className="bg-gray-200 px-2 ml-3">{type}</button>
          </div>
        </div>
        <div>
          <button
            className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded-full border border-blue-500"
            onClick={handleApplyClick}
          >
            Apply
          </button>
          <button className="ml-5 font-semibold" onClick={viewJd}>
            View
          </button>
          {/* <Link to={`/jobs/` + id} className="ml-5 font-semibold">
            View
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
