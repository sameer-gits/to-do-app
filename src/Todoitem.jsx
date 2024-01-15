import React, { useState, useEffect } from "react";

export const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTodo(id);
      setIsDeleting(false);
    }, 1000); // 1000 millis = 1 second
  };

  return (
    <>
      <li
        className={`flex border border-transparent hover:border hover:border-cyan-400 relative hover:bg-cyan-950 items-center px-6 ${
          isDeleting ? "animate-burst duration-1000" : ""
        }`}
      >
        <label
          className={` space-x-2 flex items-center py-6 w-full cursor-pointer text-cyan-50 has-[:checked]:text-cyan-800 has-[:checked]:line-through`}
        >
          <input
            className="mr-2 min-h-5 min-w-5"
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <p className={`align-middle font-semibold break-all mr-4`}>{title}</p>
        </label>

        {isDeleting ? (
          <img
            className="w-32 h-32 absolute right-2 z-10"
            src="https://sameer-gits.github.io/to-do-app/image.gif"
          />
        ) : (
          <button
            onClick={handleDelete}
            className="border border-yellow-500 p-2 px-4 h-12 bg-sky-950 hover:bg-yellow-500 text-white font-semibold transition-colors"
            disabled={isDeleting}
          >
            Remove
          </button>
        )}
      </li>
    </>
  );
};
