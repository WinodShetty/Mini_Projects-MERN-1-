import React from "react";

class Buttton extends React.Component {
  render() {
    return (
      <button onClick={this.props.btnClick}> {this.props.btnText} </button>
    );
  }
}

export default Buttton;
