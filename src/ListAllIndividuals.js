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
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            // this.setState({userData: data})
        })
    }

    render() {
        return (

            <div>
                <button onClick={this.getUserData}>View All Insured Individuals</button>
                {this.state.userData}
                </div>
        )
    }

}

export default ListAllIndividuals;