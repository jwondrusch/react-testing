import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AddTodoForm } from "../components/AddTodoForm";
import faker from "faker";
import { Todo } from "../models/todo";

configure({ adapter: new Adapter() });

describe("Add Todo Form Tests", () => {
  const todos: Array<Todo> = [];

  const setupWrapper = (add: jest.Mock) =>
    shallow(<AddTodoForm handleSubmit={add} />);

  it("Submits correctly.", () => {
    const add = jest.fn();

    const wrapper = setupWrapper(add);
    wrapper.simulate("submit", { preventDefault() {} });

    expect(add.mock.calls.length).toBe(1);
  });

  it("Input changes form component state", () => {
    const add = jest.fn();

    const newValue = faker.lorem.sentence();
    const wrapper = setupWrapper(add);
    const input = wrapper.find("input");

    input.simulate("change", {
      preventDefault() {},
      currentTarget: { value: newValue }
    });

    // We use `toEqual` instead of `toBe` to check equal values, not equal identity.
    expect(wrapper.state()).toEqual({ text: newValue });
  });
});
