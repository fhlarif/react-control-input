import React, { useState } from "react";

const MultipleControlInput = () => {
  const [person, setPerson] = useState({
    name: "",
    job: "",
    company: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();

    const newUser = person;

    console.log(newUser);

    handleClearInput();
  };

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleClearInput = () => {
    setPerson({ name: "", job: "", company: "" });
  };

  return (
    <div>
      <h1 className="my-14 text-4xl text-center">Multiple Controlled Inputs</h1>
      <form onSubmit={handlesubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input
            onChange={handleChangeInput}
            type="text"
            id="name"
            name="name"
            value={person.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="fathularif"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="job" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">
            Job
          </label>
          <input
            onChange={handleChangeInput}
            type="text"
            id="job"
            name="job"
            value={person.job}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="dev"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="company"
            className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">
            Company
          </label>
          <input
            onChange={handleChangeInput}
            type="text"
            id="company"
            name="company"
            value={person.company}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="uia"
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

export default MultipleControlInput;
