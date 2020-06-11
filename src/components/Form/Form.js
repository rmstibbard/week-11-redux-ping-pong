import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1Name: props.player1Name,
      player2Name: props.player2Name,
      winningScore: props.winningScore,
      alternateEvery: props.alternateEvery,
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e, key) {
    this.setState(
      {
        [key]: e.currentTarget.value
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSave({ ...this.state });
  }

  render() {
    let { player1Name, player2Name, winningScore, alternateEvery } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="setup-form">
        <div className="form-group game-setup">
          <label>Player 1 Name</label>
          <input
            type="text"
            className="form-control game-setup"
            onChange={(e) => this.handleChange(e, "player1Name")} value={player1Name}
          />
        </div>
        <div className="form-group game-setup">
          <label>Player 2 Name</label>
          <input
            type="text"
            className="form-control game-setup"
            onChange={(e) => this.handleChange(e, "player2Name")} value={player2Name}
          />
        </div>
        <div className="form-group game-setup">
          <label>Winning Score</label>
          <input
            type="number"
            min="1"
            max="21"
            className="form-control game-setup"
            onChange={(e) => this.handleChange(e, "winningScore")} value={winningScore}
          />
        </div>
        <div className="form-group game-setup">
          <label>Change Server Interval</label>
          <input
            className="form-control game-setup"
            type="number"
            min="1"
            max="10"
            onChange={(e) => this.handleChange(e, "alternateEvery")} value={alternateEvery}
          />
        </div>
        <div className="game-setup">
          <button className="btn btn-primary game-setup">Save</button>
        </div>
      </form>
    );

  }

}

export default Form;