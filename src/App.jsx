import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask() {
    this.props.onAddTask(this.addTask.value);
    this.addTask.value = "";
  }

  render() {
    console.log(this.props.testStore);
    return (
      <React.Fragment>
        <input type="text" ref={input => (this.addTask = input)} />
        <button onClick={this.handleAddTask}>+</button>
        <ul className="list">
          {this.props.testStore.map((value, key) => {
            return <li key={key}>{value}</li>;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTask: taskName => {
      dispatch({
        type: "ADD",
        payload: taskName
      });
    }
  })
)(App);
