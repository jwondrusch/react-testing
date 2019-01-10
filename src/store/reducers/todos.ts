import { TodoAction } from "../actions";
import { Reducer } from "redux";
import { Todo } from "../../models/todo";

export interface ITodoState {
  all: Array<Todo>;
}

const initialState: ITodoState = {
  all: []
};

export const todos: Reducer<ITodoState, TodoAction> = (
  state = initialState,
  action?: TodoAction
) => {
  if (!action) return state;

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        all: [
          { id: action.id, text: action.text, completed: false },
          ...state.all
        ]
      };
    case "ADD_TODOS":
      return {
        ...state,
        all: action.payload
      };
    case "FETCH_TODO_PENDING":
    case "FETCH_TODO_SUCCESS":
    case "FETCH_TODO_ERROR":
      console.log(`Action committed: ${action.type}`);
      return { ...state };
    case "TOGGLE_TODO":
      return {
        ...state,
        all: state.all.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case "REMOVE_TODO":
      return {
        ...state,
        all: state.all.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};
