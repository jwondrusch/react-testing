import React from "react";
import { configure, shallow, ReactWrapper, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TodoListItem } from "./TodoListItem";
import { generateTodo, Todo } from "../models/todo";

configure({ adapter: new Adapter() });

describe("TodoListItem Tests", () => {
  let wrapper: ShallowWrapper;
  let todo: Todo;
  const toggle = jest.fn();
  const remove = jest.fn();

  beforeEach(() => {
    todo = generateTodo();
    wrapper = shallow(
      <TodoListItem todo={todo} toggle={toggle} remove={remove} />
    );
  });

  it("Renders a div", () => {
    expect(wrapper.type()).toBe("div");
  });

  it("Toggle is called on value change", () => {
    const checkbox = wrapper.find(".todo-list__item__completed");
    checkbox.simulate("change", { target: { value: true } });

    expect(toggle).toBeCalled();
  });

  it("Clicking row toggles completed", () => {
    wrapper.simulate("click");

    expect(toggle).toBeCalled();
  });
});
