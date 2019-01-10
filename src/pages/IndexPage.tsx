import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../store/actions";
import { AddTodoForm } from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { Todo } from "../models/todo";

interface IndexPageProps {
  todos: Array<Todo>;
  fetchTodos: () => void;
  addTodoItem: (text: string) => void;
  toggleTodoItem: (id: number) => void;
  removeTodoItem: (id: number) => void;
}

export class IndexPage extends Component<IndexPageProps> {
  static propTypes = {};

  public componentDidMount = () => {
    this.props.fetchTodos();
  };

  render() {
    const { todos, addTodoItem, toggleTodoItem, removeTodoItem } = this.props;

    return (
      <div>
        <h1 className="title">React Testing 101</h1>

        <AddTodoForm handleSubmit={addTodoItem} />
        <TodoList
          todos={todos}
          handleToggle={toggleTodoItem}
          handleRemove={removeTodoItem}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos.all
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchTodos: () => ({}),
  toggleTodoItem: (id: number) => dispatch(toggleTodo(id)),
  removeTodoItem: (id: number) => dispatch(removeTodo(id)),
  addTodoItem: (text: string) => dispatch(addTodo(text))
});

export const ConnectedIndexPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
