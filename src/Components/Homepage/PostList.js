import React, { useContext, useEffect } from "react";
import { ArrowRight } from "phosphor-react";
import PostSummary from "./PostSummary";
import { v4 as uuid } from "uuid";
import PostsContext from "../../Context/PostsContext";
import BlogApi from "../../api";

const PostList = () => {
  const { posts, setPosts } = useContext(PostsContext);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await BlogApi.getAllPosts();
        console.log(res);
        setPosts(res);
      } catch (e) {
        console.log(e);
      }
    };
    getPosts();
  }, [setPosts]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <h2 className="text-left font-bold text-indigo-500 text-4xl sm:ml-4 md: md:ml-10">
        All Blog Posts <ArrowRight className="inline" size={24} />
        <ArrowRight className="inline" size={24} />
        <ArrowRight className="inline" size={24} />
      </h2>
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {posts.map((p) => (
            <PostSummary
              key={uuid()}
              title={p.title}
              description={p.description}
              id={p.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
