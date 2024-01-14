import React from "react";
import { TodoItem } from "./Todoitem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      <ul className="mb-4">
        {todos.length === 0 && (
          <p className="align-middle mt-4 w-full  text-center text-cyan-800">
            Add something...
          </p>
        )}
        {todos
          .slice()
          .reverse()
          .map((todo) => (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </ul>
    </>
  );
};
