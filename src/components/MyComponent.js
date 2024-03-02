import React from 'react';
import Userinfor from './Userinfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {


  //JSX   
  render() {
    return (
      <div>
        <Userinfor />
        <br />
        <DisplayInfor name={'NgocTai'} age={'19'} />
        <hr />
        <DisplayInfor name={'HuongGiang'} age={'18'} />
      </div >


    )
  }
}

export default MyComponent;