import React from "react";

const Header = () => {
  return (
    <div className="m-5 p-10 bg-gray-100">
      <div className="flex mb-5 relative">
        <input
          className="w-full h-12 px-4 py-2"
          type="text"
          placeholder="Search For Job"
        />
        <button className="absolute top-0 right-0 h-full px-4 py-2">🔍</button>
      </div>
      <div className="flex justify-between h-12">
        <select className="w-1/3 mr-10 px-4 py-2">
          <option value="Department">Department</option>
          <option value="Enginering">Engineering</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
        </select>
        <select className="w-1/3 mr-10">
          <option value="Location">Location</option>
          <option value="Goa">Goa</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="NYC">NYC</option>
        </select>
        <select className="w-1/3">
          <option value="Function">Function</option>
          <option value="Front-end">Front-End Developer</option>
          <option value="Front-end">Back-End Developer</option>
          <option value="Qa">QA</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
