import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player_1: props.player_1.name,
      player_2: props.player_2.name,
      winning_score: props.winning_score,
      change_serve: props.change_serve,
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
    let { player_1, player_2, winning_score, change_serve } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="setup-form">
        <div className="form-group game-setup">
          <label>Player 1 Name</label>
          <input
            type="text"
            className="form-control game-setup"
            onChange={(e) => this.handleChange(e, "player_1")} value={player_1}
          />
        </div>

        <div className="form-group game-setup">
          <label>Player 2 Name</label>
          <input
            type="text"
            className="form-control game-setup"
            onChange={(e) => this.handleChange(e, "player_2")} value={player_2}
          />
        </div>
        <div className="form-group game-setup">
          <label>Winning Score</label>
          <input
            type="number"
            min="1"
            max="21"
            className="form-control game-setup"
            onChange={(e) => this.handleChange(e, "winning_score")} value={winning_score}
          />
        </div>
        <div className="form-group game-setup">
          <label>Change Server Interval</label>
          <input
            className="form-control game-setup"
            type="number"
            min="1"
            max="10"
            onChange={(e) => this.handleChange(e, "change_serve")} value={change_serve}
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