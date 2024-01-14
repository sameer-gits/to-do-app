import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem.trim() === "") return;

    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <div className="sticky top-0 bg-sky-950 pt-4 z-20 text-cyan-50">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full text-center focus:ring-transparent"
      >
        <label htmlFor="item" className="text-5xl font-bold">
          TO-DOs
        </label>

        <input
          className="border border-cyan-400 text-2xl text-center h-10 w-full bg-cyan-800 placeholder:text-cyan-950 placeholder:text-xl focus:ring-transparent"
          placeholder="Add tasks..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />

        <button className="font-semibold border p-3 w-full border-cyan-400 hover:bg-cyan-600 transition-colors ">
          Add
        </button>
      </form>
      <h1 className="w-full my-4 text-center text-3xl font-bold">All Tasks</h1>
    </div>
  );
};

export default NewTodoForm;
