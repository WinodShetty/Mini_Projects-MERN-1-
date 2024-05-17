import React from "react";
//Counter App data
import Counter from "./CounterApp/Counter";
import UserDashboard from "./UserDashboard/UserDashboard";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Counter /> */}
        <UserDashboard />
      </div>
    );
  }
}

export default App;
