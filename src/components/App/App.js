import React from "react";
import Header from '../Header';
import Form from '../Form';
import Game from '../Game';
import initial from "../../data/initial";

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Header />
        {this.props.gameSetUp ? <Game /> : <Form />}
      </React.Fragment >
    );

  }
}

export default App;