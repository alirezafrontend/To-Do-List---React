import React from "react";

const Selected = ({ handlefilter }) => {
  return (
    <div className="w-full relative">
      <select
        className="w-full h-[50px] bg-gray-200 border-none outline-none px-[20px] text-[#282828] rounded-[8px]"
        name="selected"
        onChange={handlefilter}
      >
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <span className="w-[50px] h-[50px] flex justify-center items-center text-white text-[30px] bg-[#5730af] absolute top-0 right-0 pointer-events-none rounded-r-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default Selected;
