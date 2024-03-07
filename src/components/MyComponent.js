import React from 'react';
import AddUserinfor from './AddUserinfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

  state = {
    listUsers: [
      { id: 1, name: 'NgocTai', age: 19 },
      { id: 2, name: 'HuongGiang', age: 18 },
      { id: 3, name: 'unu', age: 20 },
    ]

  }

  handleAddNewUser = (userObj) => {
    console.log(userObj)
    this.setState({
      listUsers: [...this.state.listUsers, userObj]
    })
  }

  //JSX   
  render() {
    return (
      <div>
        <AddUserinfor
          handleAddNewUser={this.handleAddNewUser}

        />
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