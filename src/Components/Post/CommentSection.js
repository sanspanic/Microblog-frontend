import React from "react";
import { Trash } from "phosphor-react";
import { v4 as uuid } from "uuid";

const CommentSection = ({ comments, removeComment }) => {
  return (
    <div className="pt-10">
      <h3 className="text-indigo-500 font-black text-4xl pb-10">Comments</h3>
      <ul>
        {comments.map((c) => (
          <li
            key={uuid()}
            className="bg-indigo-50 flex justify-between border border-indigo-800 rounded py-2 w-11/12 sm:w-4/6 mx-auto text-sm my-2"
          >
            <div className="mx-2">{c.text}</div>
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
