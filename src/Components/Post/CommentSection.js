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
          <>
            {" "}
            <div class="mx-auto max-w-prose flex flex-col items-center border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed my-2">
              <div className="flex">
                <strong>{c.name} </strong>{" "}
                <img
                  class="rounded-full w-6 h-6 border border-white"
                  src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                  alt="avatar"
                />
              </div>
              <span class="text-xs text-gray-400">3:34 PM</span>
              <div className="flex">
                <p class="text-sm">{c.text}</p>
                <button onClick={() => removeComment(c, c.id)}>
                  <Trash
                    className="mx-2 text-white bg-black p-1 rounded-xl hover:bg-blue-500 duration-500"
                    size={24}
                  />
                </button>
              </div>

              <div class="mt-4 flex items-center">
                <div class="flex -space-x-2 mr-2"></div>
              </div>
            </div>
          </>

          /*           <li
            key={uuid()}
            className="background4 grid grid-cols-5 gap-2 shadow-lg grid border border-indigo-800 rounded py-2 w-11/12 sm:w-4/6 mx-auto text-sm my-2"
          >
            <div className="col-span-2 lg:col-span-1 shadow-lg ml-3 background border border-black p-1 text-xs text-gray-500 place-self-center md:place-self-stretch">
              <div className="flex justify-between items-center">
                <UserRectangle size={18} />
                <div>{c.name}: </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 mx-2 italic">{c.text}</div>
            <button onClick={() => removeComment(c, c.id)}>
              <Trash
                className="mx-2 text-white bg-black p-1 rounded-xl hover:bg-blue-500 duration-500"
                size={24}
              />
            </button>
          </li> */
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
