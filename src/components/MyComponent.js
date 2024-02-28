import React from 'react';

class MyComponent extends React.Component {

  state = {
    name: 'NgocTaidz',
    address: 'Hanoi',
    age: 19
  };

  //JSX   
  render() {
    return (
      <div>
        My name is {this.state.name}, I'm from {this.state.address}

      </div>


    )
  }
}

export default MyComponent;