import React, { useState } from "react";
import duotone1 from "../../Assets/Imgs/duotone1.png";
import { PenNib, Trash } from "phosphor-react";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";
import Form from "./Form";

const Post = () => {
  const post = {
    body:
      "I'm baby artisan semiotics butcher etsy. Retro palo santo af I'm baby artisan semiotics butcher etsy. Retro palo santo   master cleanse live-edge man braid readymade. Cliche copper mug",
    title: "Title of the Blog Post",
    description: `
    It should have a button that shows an edit form for the post; this does not need to be routed differently (the url should stay the same). The edit form can look like the new-post form, above.`,
  };
  const initialComments = ["I am a comment", "I am another comment"];
  const [comments, setComments] = useState(initialComments);
  const [isEditing, setIsEditing] = useState(false);

  const addComment = (comment) => {
    setComments((comments) => [...comments, comment]);
  };
  const removeComment = (comment) => {
    setComments(comments.filter((c) => c !== comment));
  };

  return (
    <>
      <div>
        <img
          alt="book"
          className="mx-auto sm:w-5/6 md:w-4/6"
          src={duotone1}
        ></img>
        <h1 className="text-4xl py-10 font-black">{post.title}</h1>
        <p className="pb-5 italic w-4/6 md:w-2/6 mx-auto">{post.description}</p>
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={() => setIsEditing(true)}
          className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-800 focus:ring focus:outline-none border-0 py-1 px-3 mb-4"
        >
          Edit <PenNib className="inline" size={24} />
        </button>
        <button className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-red-800 focus:ring focus:outline-none border-0 py-1 px-3 mb-4">
          Delete <Trash className="inline" size={24} />
        </button>
      </div>

      <div className="">
        {isEditing && (
          <Form
            title={post.title}
            description={post.description}
            body={post.body}
          />
        )}
        {!isEditing && (
          <>
            <p className="p-5 text-center max-w-prose border border-gray-300 mx-auto">
              {post.body}
            </p>
            <CommentSection comments={comments} removeComment={removeComment} />
            <CommentForm addComment={addComment} />
          </>
        )}
      </div>
    </>
  );
};

export default Post;
