import React from 'react'


class ListAllIndividuals extends React.Component {
    constructor() {
        super()

        this.state = {
            userData: []
        }

        this.getUserData = this.getUserData.bind(this)
    }

    
    getUserData() {
        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(data => {
            this.setState({userData: data})
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        let insuredIndividuals = []
            insuredIndividuals = this.state.userData.map((user, index) => {
                return (
                    <div key={index}>
                        <span>{user.id}</span>
                        <span>{user.gender}</span>
                        <span>{user.dob}</span>
                    </div>
                )
            })
        return (
            <div>
                <button onClick={this.getUserData}>View All Insured Individuals</button>
                {insuredIndividuals}
            </div>
        )
    }

}

export default ListAllIndividuals;