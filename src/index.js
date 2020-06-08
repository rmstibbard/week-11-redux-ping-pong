import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from "redux";

const initial = {
  count: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return {
      ...state,
      count: state.count + 1
    };
    default: return state;
  }
};

const store = createStore(reducer, initial);

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

