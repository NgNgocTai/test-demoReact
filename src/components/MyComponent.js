import React from 'react';

class MyComponent extends React.Component {

  state = {
    name: 'NgocTaidz',
    address: 'Hanoi',
    age: 19
  };
  handleClick = (event) => {
    console.log(">>>>> Click me");
    console.log("random: ", Math.floor((Math.random()) * 100) + 1)
    this.setState({
      name: 'HuongGiangIdol',
      age: Math.floor((Math.random()) * 100) + 1
    })
  }
  //JSX   
  render() {
    return (
      <div>
        My name is {this.state.name}, I'm  {this.state.age}
        <button onClick={this.handleClick}>Click me</button>
      </div >


    )
  }
}

export default MyComponent;