import React, { useState } from "react";
import Intro from "./Intro";
import PostList from "./PostList";
import "./Homepage.css";
import Modal from "./Modal";

const Homepage = () => {
  const [showModals, setShowModals] = useState(false);
  return (
    <div className="Homepage">
      {showModals && <Modal setShowModals={setShowModals} />}
      {!showModals && (
        <>
          <Intro setShowModals={setShowModals} showModals={showModals} />
          <PostList />
        </>
      )}
    </div>
  );
};

export default Homepage;
