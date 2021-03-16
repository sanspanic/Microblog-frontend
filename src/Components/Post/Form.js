import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ArrowCircleLeft } from "phosphor-react";

const Form = ({ title, description, body }) => {
  const initialFormData = title
    ? { title, description, body }
    : { title: "", description: "", body: "" };
  const history = useHistory();
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = () => {
    title ? history.push("/") : console.log("use id to push back to post page");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <section className="text-gray-700 body-font">
      <div className="flex flex-col container sm:px-8 py-2 sm:py-10 lg:px-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full p-8 mx-auto  border rounded-lg lg:w-4/6 md:w-5/6 md:ml-auto md:mt-0"
        >
          <Link className="self-start" to="/">
            <button className="font-semibold text-black hover:text-indigo-500 transition ease-in-out duration-500">
              <ArrowCircleLeft className="inline" size={24} /> Cancel
            </button>
          </Link>
          <div className="relative ">
            <label htmlFor="title" className="text-sm leading-7 text-gray-600">
              Title
            </label>
            <input
              onChange={handleChange}
              value={formData.title}
              type="title"
              id="title"
              name="title"
              placeholder="Why Einstein Was Wrong"
              className="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative ">
            <label
              htmlFor="description"
              className="text-sm leading-7 text-gray-600"
            >
              Description
            </label>
            <input
              value={formData.description}
              type="description"
              id="description"
              name="description"
              onChange={handleChange}
              placeholder="My Improved Theory of Relativity"
              className="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div className="relative ">
            <label htmlFor="body"></label>
            <textarea
              value={formData.body}
              rows="10"
              type="body"
              id="body"
              name="body"
              onChange={handleChange}
              placeholder="I propose that everything we know about the Universe is wrong."
              className="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            ></textarea>
          </div>
          <button className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-500 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
