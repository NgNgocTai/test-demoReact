import React from 'react'

class DisplayInfor extends React.Component {

  state = {
    isShow: true
  }

  handleShowHide = (event) => {
    this.setState({
      isShow: !this.state.isShow
    })

  }

  render() {


    // console.log(this.props);
    const { name, age } = this.props; //object // const name =this.props.name const age =this.props.age;
    // destructurisng object/array : ktao nhanh cac bien trung ten voi this.props. (chuong 1)
    const { listUsers } = this.props; //const listUsers =this.props.listUsers;
    console.log(listUsers);
    return (

      <div>
        <div>
          <button onClick={this.handleShowHide} >{this.state.isShow ? "Hide List Users" : "Show List Users"}</button>
        </div>

        {listUsers.map((user) => {
          return (
            <div>


              {this.state.isShow &&
                < div key={user.id} className={user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age} years old</div>
                  <hr />
                </div>
              }

            </div>
          )

        })
        }

      </div >


    )
  }

}
export default DisplayInfor;