import React from "react";
import Header from "./Header";
import Buttton from "./Button";
import Display from "./Display";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Buttton btnClick={this.increment} btnText=" + " />
        <Display dispalyvalue={this.state.count} />
        <Buttton btnClick={this.decrement} btnText=" - " />
      </div>
    );
  }
}

export default Counter;
