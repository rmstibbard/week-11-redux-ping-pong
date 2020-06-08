import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
const store = createStore(reducer, initial);

const initial = {
  count: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return { ...state, count: state.count + 1 };
    default: return state;
  }
};

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});

store.dispatch({ type: "INCREMENT" });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

