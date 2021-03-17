import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PostsContext from "../../Context/PostsContext";
import VotingThumbs from "./VotingThumbs";

const PostSummary = ({ title, description, id, votes }) => {
  const { posts, setPosts } = useContext(PostsContext);
  console.log(posts);

  return (
    <div
      id="summary"
      className="bars duration-500 border shadow rounded py-8 px-4 mb-4 flex flex-wrap md:flex-nowrap mx-auto lg:w-11/12 transform hover:scale-105"
    >
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-start">
        <span className="font-semibold title-font text-gray-700">
          BLOG POST
        </span>
        <span className="mt-1 text-gray-500 text-sm">16 Mar 2021</span>
        <VotingThumbs
          id={id}
          title={title}
          description={description}
          votes={votes}
        />

        <div className="text-gray-500 text-sm">{votes} upvotes</div>
      </div>
      <div className="flex-grow text-right">
        <h2 className="underline post-title-bars text-2xl font-medium text-gray-900 title-font mb-2">
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
