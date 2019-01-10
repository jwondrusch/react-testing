import React, { Component } from 'react'
import { Todo } from '../store/reducers/todos';

interface TodoListItemProps {
  todo: Todo;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

interface TodoListItemState {
}

export class TodoListItem extends Component<TodoListItemProps, TodoListItemState> {
  public render = () => {
    const { todo } = this.props;
    const textClass = todo.completed
      ? 'text-grey-light line-through'
      : ''
    const trashClass = todo.completed
      ? 'text-grey-light hover:text-grey'
      : 'hover:text-red-dark'

    return (
      <div className="columns border-solid border-b py-2 mx-1 todo-list__item hover:bg-grey-lightest cursor-pointer" onClick={this.handleChange}>
        <div className="column is-narrow">
          <input type="checkbox" className="todo-list__item__completed" checked={todo.completed} onChange={this.handleChange} />
        </div>

        <div className={`column ${textClass}`}>{todo.text}</div>

        <div className="column is-narrow">
          <i className={`fa fa-trash cursor-pointer todo-list__item__trash ${trashClass}`} onClick={this.removeTodo}></i>
        </div>
      </div>
    )
  }

  private removeTodo = (event: React.SyntheticEvent) => {
    this.props.remove(this.props.todo.id)
  }

  private handleChange = (event: React.SyntheticEvent) => {
    this.props.toggle(this.props.todo.id);
  }
}
