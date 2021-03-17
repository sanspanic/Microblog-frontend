import React, { useState } from "react";
import BlogApi from "../../api";

const CommentForm = ({ addComment, postId }) => {
  const initialFormData = { text: "", name: "" };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await BlogApi.addNewComment(formData, postId);
      console.log(res);
      addComment({ text: res.text, id: res.id, name: res.name });
    } catch (e) {
      console.log(e);
    }

    setFormData(initialFormData);
  };
  return (
    <div className="py-10 border-t border-black mt-10">
      <form className="z-10" onSubmit={handleSubmit}>
        <label htmlFor="text" className="block text-sm leading-7 text-gray-600">
          Add Comment
        </label>
        <textarea
          className="w-11/12 sm:w-4/6 px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          name="text"
          id="text"
          type="textarea"
          rows="3"
          value={formData.text}
          onChange={handleChange}
          required
          placeholder="Agreed! Everybody is identical in their secret unspoken belief that way deep down they are different from everyone else."
        ></textarea>
        <label htmlFor="name" className="block text-sm leading-7 text-gray-600">
          Name
        </label>
        <input
          className="w-11/12 sm:w-4/6 px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          type="text"
          name="name"
          id="name"
          placeholder="LonelyBoi"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <button className="mx-auto block text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-800 focus:ring focus:outline-none border-0 py-1 px-3  mt-4 md:mt-0">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
