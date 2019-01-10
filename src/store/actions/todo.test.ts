import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { fetchTodos, TodoAction } from "./todo";
import { AnyAction } from "redux";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async Todo Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("Example mocked http call.", () => {
    fetchMock.getOnce("/todos", {
      body: { todos: ["do something"] },
      headers: { "content-type": "application/json" }
    });

    expect(1).toBe(1);
  });

  it("Triggers FETCH_TODOS_SUCCESS when fetchTodos succeeds.", () => {
    const successAction: TodoAction = { type: "FETCH_TODO_SUCCESS" };

    const store = mockStore({ todos: { all: [] } });

    return store
      .dispatch((fetchTodos(true) as unknown) as AnyAction)
      .then(() => {
        expect(store.getActions()).toContainEqual(successAction);
      });
  });

  it("Todos are added after fetchTodos is called.", () => {
    const addTodosAction: Partial<TodoAction> = { type: "ADD_TODOS" };

    const store = mockStore({ todos: { all: [] } });

    return store
      .dispatch((fetchTodos(true) as unknown) as AnyAction)
      .then(() => {
        expect(store.getActions()).toContainEqual(
          expect.objectContaining(addTodosAction)
        );
      });
  });

  it("Triggers FETCH_TODOS_ERROR when fetchTodos fails.", () => {
    const failAction: TodoAction = { type: "FETCH_TODO_ERROR" };

    const store = mockStore({ todos: { all: [] } });

    return store
      .dispatch((fetchTodos(false) as unknown) as AnyAction)
      .then(() => {
        expect(store.getActions()).toContainEqual(failAction);
      });
  });
});
