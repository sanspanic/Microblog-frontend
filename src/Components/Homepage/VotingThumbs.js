import React, { useContext } from "react";
import PostsContext from "../../Context/PostsContext";
import { ThumbsUp, ThumbsDown } from "phosphor-react";

const VotingThumbs = ({ id, title, description, votes }) => {
  const { handleVote } = useContext(PostsContext);
  return (
    <div className="flex flex-row">
      <ThumbsUp
        onClick={() => handleVote(id, "up", title, description, votes)}
        className="jelly"
        size={28}
      />
      <ThumbsDown
        onClick={() => handleVote(id, "down", title, description, votes)}
        className="jelly black"
        size={28}
      />
    </div>
  );
};

export default VotingThumbs;
