import React from "react";
import { Trash, SmileySad } from "phosphor-react";
import { v4 as uuid } from "uuid";

const CommentSection = ({ comments, removeComment }) => {
  return (
    <div className="pt-10 border-t border-black">
      <h3 className="text-indigo-500 font-black text-4xl pb-10">Comments</h3>
      {comments.length === 0 && (
        <>
          <div className="text-xl tracking-widest">
            There don't appear to be any comments yet. Why not leave one?{" "}
          </div>
          <SmileySad className="mx-auto " size={48} />
        </>
      )}
      <ul>
        {comments.map((c) => (
          <div key={uuid()}>
            {" "}
            <div className=" mesh-bg mx-auto max-w-prose flex flex-col border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed my-2">
              <div className="flex">
                <strong>{c.name} </strong>{" "}
                <img
                  className="rounded-full w-6 h-6 border border-white"
                  src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                  alt="avatar"
                />
              </div>
              <span className="text-xs text-gray-400">3:34 PM</span>
              <div className="flex border bg-gray-100 p-2 rounded justify-between">
                <p className="text-sm">{c.text}</p>
                <button className="" onClick={() => removeComment(c, c.id)}>
                  <Trash
                    className="mx-2 text-white bg-black p-1 rounded-xl hover:bg-blue-500 duration-500"
                    size={24}
                  />
                </button>
              </div>

              <div className="mt-4 flex items-center">
                <div className="flex -space-x-2 mr-2"></div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
