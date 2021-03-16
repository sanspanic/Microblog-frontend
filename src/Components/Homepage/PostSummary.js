import React from "react";
import { Link } from "react-router-dom";

const PostSummary = ({ title, description, id }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">
          BLOG POST
        </span>
        <span className="mt-1 text-gray-500 text-sm">16 Mar 2021</span>
      </div>
      <div className="flex-grow text-right">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p className=" leading-relaxed">{description}</p>
        <Link
          to={`/${id}`}
          className="text-indigo-500 inline-flex items-center mt-4"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PostSummary;
