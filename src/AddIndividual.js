import React from 'react'

class AddIndividual extends React.Component{
    constructor(props) {
        super(props)

        this.state ={
            gender: "",
            dob: "",
            ss: "",
            id: ""
        }

        this.addUserData = this.addUserData.bind(this)
        this.generateUserID = this.generateUserID.bind(this)
    }

    addUserData(event) {
        if (event.target.name === "gender") {
            this.setState({gender: event.target.value})
        }
        if (event.target.name === "dob") {
            this.setState({dob: event.target.value})
        }
        if (event.target.name === "ss") {
            this.setState({ss: event.target.value})
        }
    }

    generateUserID() {
        if (this.state.gender.length > 1 && this.state.dob.length > 1 && this.state.ss.length > 1) {
            this.setState({id: Math.floor(Math.random() * (99000 - 10000 + 1) + 10000)});
        }
    }

    render() {
        let idOutput
        if (this.state.id !== "") {
            idOutput = (
                <div>
                    <p>New User ID:</p>
                    {this.state.id}
                </div>
            )
        } else {
            idOutput = (
                <div>
                    <p>clicking 'Add' will generate a unique user ID</p>
                    <button onClick={(event) => this.generateUserID(event)}>Add</button>
                </div>
            )
        }
      return (
        <div>
            <h1>Add Individual:</h1>
            <h3>Gender:</h3>
            <input name="gender" type="text" onChange={(event) => this.addUserData(event)}/>
            <h3>Date of Birth:</h3>
            <input name="dob" type="text" onChange={(event) => this.addUserData(event)}/>
            <h3>Social Security Number:</h3>
            <input name="ss" type="text" onChange={(event) => this.addUserData(event)}/>
            
            {idOutput}
        </div>
      );
    }
}
  
export default AddIndividual;