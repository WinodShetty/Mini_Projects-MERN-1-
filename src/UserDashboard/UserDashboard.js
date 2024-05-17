import React from "react";
import axios from "axios";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      email: "",
      name: "",
      image:
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
    };
  }
  getdata = async (e) => {
    const url = await axios.get(`https://reqres.in/api/users/${e}`);
    const obj = url.data;
    console.log(obj);

    return obj;
  };
  handleClick = async (e) => {
    console.log(e);
    try {
      const obj = await this.getdata(e);
      console.log(obj);

      this.setState({
        id: obj.data.id,
        email: obj.data.email,
        name: `${obj.data.first_name} ${obj.data.last_name}`,
        image: obj.data.avatar,
      });
    } catch (e) {
      // console.log('alert');
      const handlealert = () => {
        alert("Failed to fetch data");
      };
      handlealert();
      this.setState({
        image: "",

        email: "",
        name: "",
      });
    }
  };

  render() {
    return (
      <div>
        <div class="btnContainer">
          <button
            class="button"
            value={1}
            onClick={(e) => this.handleClick(e.target.value)}
          >
            1
          </button>
          <button
            class="button"
            value={2}
            onClick={(e) => this.handleClick(e.target.value)}
          >
            2
          </button>
          <button
            class="button"
            value={3}
            onClick={(e) => this.handleClick(e.target.value)}
          >
            3
          </button>
          <button
            class="button"
            value={100}
            onClick={(e) => this.handleClick(e.target.value)}
          >
            100
          </button>
        </div>

        <ul class="ul">
          <li>Email: {this.state.email}</li>
          <li>Name: {this.state.name}</li>
        </ul>
        <img src={this.state.image} alt="Not available" />
      </div>
    );
  }
}

export default UserDashboard;
