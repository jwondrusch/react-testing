import { todos } from "./todos";
import faker from "faker";
import { generateTodo, Todo } from "../../models/todo";

describe("Todos Reducer", () => {
  it("Should handle initial state", () => {
    expect(todos()).toEqual({ all: [] });
  });

  it("Should handle ADD_TODO", () => {
    const item = generateTodo({ completed: false });

    expect(
      todos(undefined, { type: "ADD_TODO", text: item.text, id: item.id })
    ).toEqual({
      all: [item]
    });
  });

  it("Should handle TOGGLE_TODO", () => {
    // Initialize a store
    let state = todos();

    // A new todo should always be uncompleted
    const item = generateTodo({ completed: false });

    // Add the item
    state = todos(state, { type: "ADD_TODO", text: item.text, id: item.id });

    // Test first toggle (should be true after test, so we set that up here)
    item.completed = true;
    state = todos(state, { type: "TOGGLE_TODO", id: item.id });
    expect(state).toEqual({ all: [item] });

    // Test next toggle (should be false after test, so we set that up here)
    item.completed = false;
    state = todos(state, { type: "TOGGLE_TODO", id: item.id });
    expect(state).toEqual({ all: [item] });
  });

  it("Should handle REMOVE_TODO", () => {
    const item = generateTodo({ completed: false });
    const state = todos(undefined, {
      type: "ADD_TODO",
      text: item.text,
      id: item.id
    });

    expect(state).toEqual({ all: [item] });

    expect(todos(state, { type: "REMOVE_TODO", id: item.id })).toEqual({
      all: []
    });
  });
});
