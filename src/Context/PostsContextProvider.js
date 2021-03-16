import React, { useState } from "react";
import PostsContext from "./PostsContext";

const PostsContextProvider = ({ children }) => {
  const initialState = [];
  const [posts, setPosts] = useState(initialState);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
