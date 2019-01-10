import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { IndexPage } from "./IndexPage";
import { AddTodoForm } from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { Todo } from "../models/todo";

configure({ adapter: new Adapter() });

describe("Index Page Tests", () => {
  const toggle = jest.fn();
  const remove = jest.fn();
  const add = jest.fn();
  const todos: Array<Todo> = [];

  let fetchTodos = jest.fn();

  afterEach(() => {
    fetchTodos = jest.fn();
  });

  const setupWrapper = () =>
    shallow(
      <IndexPage
        fetchTodos={fetchTodos}
        todos={todos}
        addTodoItem={add}
        toggleTodoItem={toggle}
        removeTodoItem={remove}
      />
    );

  it("Fetches Todos on load", () => {
    const wrapper = setupWrapper();

    expect(fetchTodos.mock.calls.length).toBe(1);
  });

  it("Renders the correct title", () => {
    const wrapper = setupWrapper();

    expect(wrapper.find(".title").text()).toBe("React Testing 101");
  });

  it("Has form", () => {
    const wrapper = setupWrapper();

    expect(wrapper.find(AddTodoForm)).toHaveLength(1);
  });

  it("Has to do list", () => {
    const wrapper = setupWrapper();

    expect(wrapper.find(TodoList)).toHaveLength(1);
  });
});
