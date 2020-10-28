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
        <div className="section">
            <h3>Add Individual:</h3>
            <h5>Gender:</h5>
            <input name="gender" type="text" onChange={(event) => this.addUserData(event)}/>
            <h5>Date of Birth:</h5>
            <input name="dob" type="text" onChange={(event) => this.addUserData(event)}/>
            <h5>Social Security Number:</h5>
            <input name="ss" type="text" onChange={(event) => this.addUserData(event)}/>
            
            <button onClick={(event) => this.generateUserID(event)}>Add User</button>
        </div>
      );
    }
}
  
export default AddIndividual;