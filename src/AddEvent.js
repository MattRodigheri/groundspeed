import React from 'react';

class AddEvent extends React.Component {
  constructor() {
    super()

    this.state={
      id: "",
      gender: "",
      dob: "",
      ss: "",
      smoker: "",
      allergies: [],
      medicalConditions: [],
      healthHistory: [],
      date: "",
      type: "",
      billedAmount: "",
      coveredAmount: ""
    }
    this.addUserID = this.addUserID.bind(this)
    this.getSingleUserData = this.getSingleUserData.bind(this)
    this.addEvent = this.addEvent.bind(this)
  }

  addUserID(event) {
      this.setState({id:event.target.value})
  }

  getSingleUserData() {
    fetch(`http://localhost:3001/users/${this.state.id}`)
    .then(response => response.json())
    .then(data => {
        this.setState({
          gender: data.gender,
          dob: data.dob,
          ss: data.ss,
          smoker: data.smoker,
          allergies: data.allergies,
          medicalConditions: data.medicalConditions,
          healthHistory: data.healthHistory
        })
    })
  .catch((error) => {
      console.error('Error:', error);
  });
  }

  addEventData(event) {
    if (event.target.name === "date") {
        this.setState({date: event.target.value})
    }
    if (event.target.name === "type") {
        this.setState({type: event.target.value})
    }
    if (event.target.name === "billedAmount") {
        this.setState({billedAmount: event.target.value})
    }
    if (event.target.name === "coveredAmount") {
        this.setState({coveredAmount: event.target.value})
    }
  }

  addEvent() {

    let healthHistory = this.state.healthHistory

    let newEvent = {}
    newEvent.date = this.state.date
    newEvent.type = this.state.type
    newEvent.billedAmount = this.state.billedAmount
    newEvent.coveredAmount = this.state.coveredAmount

    healthHistory.push(newEvent)

    fetch(`http://localhost:3001/users/${this.state.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                id: this.state.id,
                gender: this.state.gender,
                dob: this.state.dob,
                ss: this.state.ss,
                smoker: this.state.smoker,
                allergies: this.state.allergies,
                medicalConditions: this.state.medicalConditions,
                healthHistory: healthHistory
            }
        )
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    
  }

  render() {
    let userFound;
    if (this.state.ss) {
      userFound = "User Found, Enter Event"
    } else {
      userFound = ""
    }
    
    return (
      <div className="section">
        <section>
          <h3>Add Insurance Event:</h3>
          <h5>Individual ID:</h5>
          <input type="text" name="idInput" onChange={(event) => {this.addUserID(event)}}/>
          <button onClick={this.getSingleUserData}>Search for User</button>
          {userFound}
          
          <h5>Date</h5>
          <input type="text" name="date" onChange={(event)=>this.addEventData(event)}/>
          <h5>Type</h5>
          <input type="text" name="type" onChange={(event)=>this.addEventData(event)}/>
          <h5>Billed Amount</h5>
          <input type="text" name="billedAmount" onChange={(event)=>this.addEventData(event)}/>
          <h5>Covered Amount</h5>
          <input type="text" name="coveredAmount" onChange={(event)=>this.addEventData(event)}/>
        </section>

        <button onClick={this.addEvent}>Add Event</button>
      </div>
    );
  }
}

export default AddEvent;
