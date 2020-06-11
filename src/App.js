import React from "react";
import Header from './components/Header';
import Form from './components/Form/';
import Game from './components/Game';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <Game />
    </React.Fragment >
  );
};

export default App;