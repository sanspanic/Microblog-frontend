import React from "react";

const Form = () => {
  return (
    <section class="text-gray-700 body-font">
      <div class="container sm:px-8 py-2 sm:py-10 mx-auto lg:px-4">
        <div class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-4/6 md:w-5/6 md:ml-auto md:mt-0">
          <div class="relative ">
            <label for="title" class="text-sm leading-7 text-gray-600">
              Title
            </label>
            <input
              type="title"
              id="title"
              name="title"
              placeholder="Why Einstein was wrong"
              class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div class="relative ">
            <label for="description" class="text-sm leading-7 text-gray-600">
              Description
            </label>
            <input
              type="description"
              id="description"
              name="description"
              placeholder="A post explaining my Improved Theory of Relativity"
              class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            />
          </div>
          <div class="relative ">
            <textarea
              rows="10"
              type="message"
              id="message"
              name="message"
              placeholder="I propose that everything we know about the Universe is wrong."
              class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            ></textarea>
          </div>
          <button class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
