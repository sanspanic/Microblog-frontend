import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
  const initialFormData = { comment: "" };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(formData.comment);
    setFormData(initialFormData);
  };
  return (
    <div className="py-10 border-t border-black mt-10">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="comment"
          className="block text-sm leading-7 text-gray-600"
        >
          Add Comment
        </label>
        <textarea
          className="w-4/6 px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          name="comment"
          id="comment"
          type="textarea"
          rows="3"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
        <button className="mx-auto block text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-800 focus:ring focus:outline-none border-0 py-1 px-3  mt-4 md:mt-0">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
