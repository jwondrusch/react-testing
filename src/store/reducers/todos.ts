import { TodoAction } from "../actions";
import { Reducer } from "redux";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoState {
  all: Array<Todo>;
}

const initialState: ITodoState = {
  all: []
}

export const todos: Reducer<ITodoState, TodoAction> = (state = initialState, action?: TodoAction) => {
  if (!action) return state

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        all: [...state.all, { id: action.id, text: action.text, completed: false }]
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        all: state.all.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        all: state.all.filter(todo => todo.id !== action.id)
      }
    default:
      return state
  }
}
