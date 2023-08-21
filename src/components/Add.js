import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import Employees from "./Employees";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });
    history("/");
  };
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 ml-96 mt-32">
        <h1 className="text-2xl font-bold text-center">Create New User</h1>
        <form novalidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              NAME
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Age
            </label>
            <input
              type="text"
              name="age"
              id="age"
              placeholder="Enter Your Age"
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
