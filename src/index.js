import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './data/store';


ReactDOM.render( // Not good practice to have this inside render
  <Provider store={store}>
    <App
      handleClickPlayer1={() => store.dispatch({ type: "PLAYER1_SCORES" })}
      handleClickPlayer2={() => store.dispatch({ type: "PLAYER2_SCORES" })}
      handleReset={() => store.dispatch({ type: "RESET" })}
    />,
    </Provider>,
  document.getElementById("root")
);
