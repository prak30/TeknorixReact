import React from "react";

const FilterMenu = () => {
  return (
    <div className="bg-gray-100 m-5 p-10">
      <div className="flex justify-between">
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <button className="text-green-500">Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
