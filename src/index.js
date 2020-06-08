import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
  player1Serving: true
};


const player1Scores = (state) => (
  {
    ...state,
    player1: state.player1 + 1
  }
);

const player2Scores = (state) => (
  {
    ...state,
    player2: state.player2 + 1
  }
);

const setServer = (state) => {
  const { player1, player2, player1Serving } = state;
  return (
    {
      ...state,
      player1Serving: (player1 + player2) % 5 === 0 ? !player1Serving : player1Serving
    }
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER1_SCORES": return setServer(player1Scores(state));
    case "PLAYER2_SCORES": return setServer(player2Scores(state));
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