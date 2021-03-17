import React, { useState } from "react";
import Intro from "./Intro";
import PostList from "./PostList";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Intro />
      <PostList />)
    </div>
  );
};

export default Homepage;
