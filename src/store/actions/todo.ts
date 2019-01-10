import { Dispatch, Store, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Todo, generateTodos } from "../../models/todo";

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export type TodoAction =
  | { type: "ADD_TODO"; id: number; text: string }
  | { type: "ADD_TODOS"; payload: Array<Todo> }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number }
  | { type: "FETCH_TODO_SUCCESS" }
  | { type: "FETCH_TODO_PENDING" }
  | { type: "FETCH_TODO_ERROR" };

let nextTodoId = 0;

export const addTodo = (text: string) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const toggleTodo = (id: number) => ({
  type: "TOGGLE_TODO",
  id
});

export const removeTodo = (id: number) => ({
  type: "REMOVE_TODO",
  id
});

export const addTodos = (todos: Array<Todo>) => ({
  type: "ADD_TODOS",
  payload: todos
});

export function fetchTodos<T extends Action<string>>(
  pass?: boolean
): ThunkAction<Promise<void>, any, void, T> {
  return async (dispatch: Dispatch) => {
    const todos = generateTodos(5);

    if (!!pass) {
      dispatch({ type: "FETCH_TODO_SUCCESS" });
      dispatch(addTodos(todos));
    } else {
      dispatch({ type: "FETCH_TODO_ERROR" });
    }

    await timeout(500);
  };
}
