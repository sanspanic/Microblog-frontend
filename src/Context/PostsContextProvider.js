import React, { useState, useEffect } from "react";
import PostsContext from "./PostsContext";
import BlogApi from "../api";

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await BlogApi.getAllPosts();
        console.log("RETRIEVED NEW BLOG POSTS: ");
        console.log(res);
        setPosts(res);
      } catch (e) {
        console.log(e);
      }
    };
    getPosts();
  }, [setPosts]);

  const handleVote = async (id, direction, title, description, votes) => {
    try {
      const res = await BlogApi.addVote(id, direction);
      console.log(res);
      let delta = direction === "up" ? +1 : -1;
      const allPostsWithoutCurrent = posts.filter((p) => p.id != id);
      console.log("FILTERED POSTS: ", allPostsWithoutCurrent);
      //sorts array by id otherwise list keeps rearranging on each state change
      const newPosts = [
        ...allPostsWithoutCurrent,
        { id: +id, description, title, votes: votes + delta },
      ].sort((a, b) => a.id - b.id);
      console.log("adding this object into new post list: ", {
        id: +id,
        description,
        title,
        votes: votes + delta,
      });
      setPosts(newPosts);
      console.log("JUST SET NEW POSTS: ", newPosts);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts, handleVote }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
