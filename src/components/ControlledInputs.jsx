import React, { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    handleClearInput();
  };

  const handleClearInput = () => {
    setJob("");
    setName("");
  };

  return (
    <div>
      <h1 className="my-14 text-4xl text-center">Controlled Inputs</h1>
      <form onSubmit={handlesubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">
            Your name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            value={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="fathularif"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="job" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">
            Your name
          </label>
          <input
            onChange={(e) => setJob(e.target.value)}
            type="text"
            id="job"
            value={job}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="dev"
            required
          />
        </div>
        <button
          type="submit"
          className="flex justify-start text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledInputs;
