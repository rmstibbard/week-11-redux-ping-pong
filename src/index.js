import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER1_SCORES": return {
      ...state,
      player1: state.player1 + 1
    };
    case "PLAYER2_SCORES": return {
      ...state,
      player2: state.player2 + 1
    };
    case "RESET": return initial;
    default: return state;
  }
};

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // Enable redux
);

store.subscribe(() => {
  const state = store.getState();
  console.log(state.count);
})

const render = () => {
  let state = store.getState();

  ReactDOM.render( // Not good practice to have this inside render
    <App
      player1={state.player1}
      player2={state.player2}
      handleClickPlayer1={() => store.dispatch({ type: "PLAYER1_SCORES" })}
      handleClickPlayer2={() => store.dispatch({ type: "PLAYER2_SCORES" })}
      handleReset={() => store.dispatch({ type: "RESET" })}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();