import React from 'react'

class DisplayInfor extends React.Component {

  render() {

    console.log(this.props);
    const { name, age } = this.props; //object // const name =this.props.name const age =this.props.age;
    // destructuring object/array : ktao nhanh cac bien trung ten voi this.props. (chuong 1)
    const { listUsers } = this.props; //const listUsers =this.props.listUsers;
    return (

      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>I'm {user.age} years old</div>
              <hr />
            </div>

          )
        })}

      </div>


    )
  }

}
export default DisplayInfor;