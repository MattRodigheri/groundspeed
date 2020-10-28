import React from 'react';

class ListAllEventsByIndividual extends React.Component {
    constructor() {
        super();

        this.state={
            id: ""
        }

        this.addUserID = this.addUserID.bind(this);
        this.getSingleUserData = this.getSingleUserData.bind(this);
    }

    addUserID(event) {
        this.setState({id:event.target.value})
    }

    getSingleUserData() {
        fetch(`http://localhost:3001/users/${this.state.id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
              id: data.id,
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

    render() {
        let history;
        if (this.state.healthHistory) {
            history = this.state.healthHistory.map((record, index) => {
                return (
                <div key={index}>
                    <span>{record.date}</span>
                    <span>{record.type}</span>
                    <span>{record.billedAmount}</span>
                    <span>{record.coveredAmount}</span>
                </div>
                )
            })    
        }
        return (
            <div>
                <h3>Search Events by User</h3>
                <input type="text" onChange={(event)=>{this.addUserID(event)}}/>
                <button onClick={this.getSingleUserData}>Search by ID</button>
                {history}
            </div>
        )
    }
}

export default ListAllEventsByIndividual;