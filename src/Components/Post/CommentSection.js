import React from "react";
import { Trash } from "phosphor-react";
import { v4 as uuid } from "uuid";

const CommentSection = ({ comments, removeComment }) => {
  return (
    <div className="pt-10">
      <ul>
        {comments.map((c) => (
          <li
            key={uuid()}
            className="background flex justify-between border border-indigo-800 rounded py-2 w-4/6 mx-auto text-sm my-1"
          >
            <div className="mx-2">{c}</div>
            <button onClick={() => removeComment(c)}>
              <Trash className="mx-2 text-blue-800" size={24} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
