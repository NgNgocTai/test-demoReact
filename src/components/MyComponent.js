import React from 'react';
import Userinfor from './Userinfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

  state = {
    listUsers: [
      { id: 1, name: 'NgocTai', age: 19 },
      { id: 2, name: 'HuongGiang', age: 18 },
      { id: 3, name: 'unu', age: 20 },
    ]

  }

  //JSX   
  render() {
    return (
      <div>
        <Userinfor />
        <br />

        <hr />
        <DisplayInfor
          listUsers={this.state.listUsers} //nen khoi tao ten bien de truyen xuong cho con trung voi state (thich dat nhu nao cung dc)
        //Users ={this.state.listUsers};
        />
      </div >


    )
  }
}

export default MyComponent;