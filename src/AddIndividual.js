import React from 'react'

class AddIndividual extends React.Component{
    constructor(props) {
        super(props)

        this.state ={
            id: "",
            gender: "",
            dob: "",
            ss: "",
            smoker: "",
            allergies: [],
            medicalConditions: [],
            healthHistory: [
                {
                    date: "",
                    type: "",
                    billedAmount: "",
                    coveredAmount: ""
                }
            ]
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

        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  
    }

    render() {
      return (
        <form>
            <h1>Add Individual:</h1>
            <h3>Gender:</h3>
            <input name="gender" type="text" onChange={(event) => this.addUserData(event)}/>
            <h3>Date of Birth:</h3>
            <input name="dob" type="text" onChange={(event) => this.addUserData(event)}/>
            <h3>Social Security Number:</h3>
            <input name="ss" type="text" onChange={(event) => this.addUserData(event)}/>
            
            <p>clicking 'Add' will generate a unique user ID</p>
            <button onClick={(event) => this.generateUserID(event)}>Add</button>
        </form>
      );
    }
}
  
export default AddIndividual;