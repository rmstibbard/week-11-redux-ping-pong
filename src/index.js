import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './data/store';

ReactDOM.render(
  <Provider store={store}>
    <App
      handleClickPlayer2={() => store.dispatch({ type: "PLAYER2_SCORES" })}
    />,
    </Provider>,
  document.getElementById("root")
);
