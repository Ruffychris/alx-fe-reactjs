import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-todo-form">
      <input
        type="text"
        placeholder="Add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="add-todo-input"
      />
      <button type="submit" data-testid="add-todo-button">Add</button>
    </form>
  );
};

export default AddTodoForm;