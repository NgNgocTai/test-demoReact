import React from "react";

class AddUserinfor extends React.Component {

  state = {
    name: 'NgocTaidz',
    address: 'Hanoi',
    age: 19
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value

    })
  }
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: this.props.listUsers.length + 1,
      name: this.state.name,
      age: this.state.age

    });
  }

  render() {

    return (
      <div>
        My name is {this.state.name}, I'm  {this.state.age}

        <form onSubmit={this.handleOnSubmit}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={this.handleOnChangeInput}
          /
          >

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={this.handleOnChangeAge}
          /
          >
          <button >Submit </button>
        </form>
      </div>


    )

  }

}
export default AddUserinfor;