import React, { useContext, useEffect } from "react";
import { ArrowRight } from "phosphor-react";
import PostSummary from "./PostSummary";
import { v4 as uuid } from "uuid";
import PostsContext from "../../Context/PostsContext";
import BlogApi from "../../api";

const PostList = () => {
  const { posts, setPosts } = useContext(PostsContext);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <h2 className="underline text-left font-bold text-orchid text-3xl sm:text-4xl ml-2 sm:ml-4 md: md:ml-10 sm:tracking-widest font-mono">
        All Blog Posts
        <ArrowRight className="inline" size={24} />
        <ArrowRight className="inline" size={24} />
        <ArrowRight className="inline" size={24} />
      </h2>
      <div className="container sm:px-5 py-24 mx-auto">
        {posts.length === 0 && (
          <div className="tracking-widest text-xl">
            Oh no! There are no posts to display. Quick, add a new one!
          </div>
        )}

        <div className="">
          {posts.map((p) => (
            <PostSummary
              key={uuid()}
              title={p.title}
              description={p.description}
              id={p.id}
              votes={p.votes}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
