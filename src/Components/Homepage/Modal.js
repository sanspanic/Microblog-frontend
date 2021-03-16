import React, { useEffect, useState } from "react";
import { SmileyXEyes } from "phosphor-react";

const Modal = ({ setShowModals }) => {
  const [isBouncing, setIsBouncing] = useState(true);
  const className = isBouncing ? "animate-bounce" : "";
  useEffect(() => {
    setTimeout(() => {
      setIsBouncing(false);
    }, 2500);
  }, []);
  return (
    <div
      className={`${className} bg-indigo-50 my-16 p-2 flex flex-col items-center w-4/6 mx-auto border-2 border-pink-500 shadow-2xl rounded`}
    >
      <SmileyXEyes className="m-2" size={60} />
      <p className="font-bold text-indigo-500 text-4xl p-2">LOL JK!</p>
      <p>This is not a real feature. Sorry about that.</p>
      <button
        onClick={() => setShowModals(false)}
        className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-800 focus:ring focus:outline-none  border-0 py-1 px-3 my-5"
      >
        Return
      </button>
    </div>
  );
};

export default Modal;
