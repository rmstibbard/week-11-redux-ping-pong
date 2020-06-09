import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";

const initial = {
  player1: 10,
  player2: 10,
  player1Serving: true,
  winner: "",
  previousGames: []
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

  let changeServer = 5;

  if ((player1 >= 20) && (player2 >= 20)) {
    changeServer = 2;
  }

  return (
    {
      ...state,
      player1Serving: (player1 + player2) % changeServer === 0 ? !player1Serving : player1Serving
    }
  )
}

const winningPlayer = (state) => {
  if ((state.player1 >= 21) && (state.player1 - state.player2 >= 2)) {
    return (
      {
        ...state,
        winner: "1",
        previousGames: [
          ...state.previousGames,
          {
            player1: {
              score: state.player1,
              won: true
            },
            player2: {
              score: state.player2,
              won: false
            }
          }
        ]
      }
    )
  }
  if ((state.player2 >= 21) && (state.player2 - state.player1 >= 2)) {
    return (
      {
        ...state,
        winner: "2",
        previousGames: [
          ...state.previousGames,
          {
            player1: {
              score: state.player1,
              won: false
            },
            player2: {
              score: state.player2,
              won: true
            }
          }
        ]
      }
    )
  }
  return (
    {
      ...state,
      winner: ""
    }
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER1_SCORES": return winningPlayer(setServer(player1Scores(state)));
    case "PLAYER2_SCORES": return winningPlayer(setServer(player2Scores(state)));
    case "RESET": return {
      ...initial,
      previousGames: state.previousGames,
    };
    default: return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initial,
  composeEnhancers(persistState())
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
      player1Serving={state.player1Serving}
      winner={state.winner}
      previousGames={state.previousGames}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();