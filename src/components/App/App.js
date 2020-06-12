import React from "react";
import Header from '../Header';
import Form from '../Form';
import Game from '../Game';

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Header />
        {this.props.game_setup ? <Game /> : <Form />}
      </React.Fragment >
    );

  }
}

export default App;