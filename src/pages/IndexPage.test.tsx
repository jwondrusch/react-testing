import React from 'react';
import { configure, shallow, ReactWrapper, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Todo } from '../store/reducers/todos';
import { IndexPage, ConnectedIndexPage } from './IndexPage';
import { AddTodoForm } from '../components/AddTodoForm';
import TodoList from '../components/TodoList';

configure({ adapter: new Adapter() });


describe('Index Page Tests', () => {
  const toggle = jest.fn();
  const remove = jest.fn();
  const add = jest.fn();
  const todos: Array<Todo> = [];

  const setupWrapper = () => shallow(<IndexPage
    todos={todos}
    addTodoItem={add}
    toggleTodoItem={toggle}
    removeTodoItem={remove}
  />)

  it('Renders the correct title', () => {
    const wrapper = setupWrapper();

    expect(wrapper.find('.title').text()).toBe('React Testing 101');
  })

  it('Has form', () => {
    const wrapper = setupWrapper();

    expect(wrapper.find(AddTodoForm)).toHaveLength(1);
  })

  it('Has to do list', () => {
    const wrapper = setupWrapper();

    expect(wrapper.find(TodoList)).toHaveLength(1);
  })
});
