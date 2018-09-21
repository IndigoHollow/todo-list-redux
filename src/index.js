import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
//import AddItem from './components/addItem';
//import addingAction from './actions/actions';

const initialState = ["Do Acrobatics", "Do Yoga"];

function counter(state = initialState, action) {
  if (action.type === "ADD") {
    return [...state, action.payload];
  }

  return state;
}

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*
const initialState = {
    count: 0,
    toDoList: []
  },
  store = createStore(counter),
  input = document.getElementsByClassName("taskInput")[0],
  btn = document.getElementsByClassName("addTask")[0],
  list = document.getElementsByClassName("list")[0],
  rootElement = document.getElementById("root");

function counter(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return "removed";
  }

  return state;
}

store.subscribe(() => console.log("store has been changed", store.getState()));

btn.addEventListener("click", () => {
  store.dispatch({ type: "ADD", payload: input.value });
  list.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
});

function App() {
  return <div />;
}
*/
