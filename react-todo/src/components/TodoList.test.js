import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component Tests", () => {

  test("renders initial todos correctly", () => {
    render(<TodoList />);
    const todo1 = screen.getByText("Learn React");
    const todo2 = screen.getByText("Write Tests");
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("add-todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    const newTodo = screen.getByText("New Todo");
    expect(newTodo).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // toggle on
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    // toggle off
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getByTestId("delete-1");

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });

});