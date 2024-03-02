import React from 'react'

class DisplayInfor extends React.Component {

  render() {

    console.log(this.props);

    return (

      <div>
        <div>
          My name is {this.props.name}
        </div>
        <div>
          I'm {this.props.age} years old
        </div>
      </div>


    )
  }

}
export default DisplayInfor;