import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount, configure, shallow } from "enzyme";
import { MemoryRouter, Route, Switch } from "react-router";
import FourOhFourPage from "./pages/FourOhFourPage";
import { IndexPage, ConnectedIndexPage } from "./pages/IndexPage";
import Adapter from "enzyme-adapter-react-16";
import configureStore, { MockStoreEnhanced, MockStore } from "redux-mock-store";
import { Provider } from "react-redux";
import { AboutPage, ConnectedAboutPage } from "./pages/AboutPage";
import thunk from "redux-thunk";

const middlewares = [thunk];

configure({ adapter: new Adapter() });

describe("Basic App Tests", () => {
  const mockStore = configureStore(middlewares);
  const initialState = {
    todos: {
      all: []
    }
  };

  let wrapper;
  let store: MockStore;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("Renders the index page", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(ConnectedIndexPage)).toHaveLength(1);
    expect(wrapper.find(ConnectedAboutPage)).toHaveLength(0);
  });

  it("Renders the about page", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/about"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(ConnectedAboutPage)).toHaveLength(1);
  });

  it("Renders a 404 Page", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/random"]} initialIndex={0}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(FourOhFourPage)).toHaveLength(1);
  });
});
