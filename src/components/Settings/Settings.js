import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: props.step,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ step: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let { step } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Step</label>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={step}
          />
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    );

  }

}

export default Settings;