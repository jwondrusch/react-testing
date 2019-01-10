import React, { Component } from 'react'
import { Todo } from '../store/reducers/todos';
import { AddTodoForm } from './AddTodoForm';
import { TodoListItem } from './TodoListItem';

export interface TodoListProps {
  todos: Array<Todo>,
  handleToggle: (id: number) => void;
  handleRemove: (id: number) => void;
}

export default class TodoList extends Component<TodoListProps> {
  render() {
    const { todos } = this.props;

    return (
      <div className="todo-list">
        {todos && this.renderTodos(todos)}
        {todos.length === 0 && (
          <p className="text-grey-light text-center"><em>You don't have any todos! Add one to get started.</em></p>
        )}
      </div>
    )
  }

  private renderTodos = (todos: Array<Todo>) => {
    return todos.map(this.renderTodo)
  }

  private renderTodo = (todo: Todo) => {
    const { handleToggle, handleRemove } = this.props;

    return <TodoListItem
      todo={todo}
      key={todo.id}
      toggle={handleToggle}
      remove={handleRemove}
    />
  }
}
