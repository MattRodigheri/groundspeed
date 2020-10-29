import React from 'react'


class ListAllIndividuals extends React.Component {
    constructor() {
        super()

        this.state = {
            userData: []
        }

        this.getUserData = this.getUserData.bind(this);
        this.aggregateData = this.aggregateData.bind(this);

    }

    
    getUserData() {
        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(data => {
            this.setState({userData: data});
            this.aggregateData();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    aggregateData() {
        let totalCoveredAmount = 0;
        let claimsPerYear = {};
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let agesTotal = 0;
        
        this.state.userData.forEach((user) => {
            let bYear = Number(user.dob.split('/')[2]);
            
            if (bYear < year) {
                agesTotal += (year - bYear);
            }

            user.healthHistory.forEach((event)=> {
                totalCoveredAmount += Number(event.coveredAmount);
                if (!claimsPerYear[event.date]) {
                    claimsPerYear[event.date] = 1;
                } else {
                    claimsPerYear[event.date]++
                }
            });
        });

        this.setState({
            totalCoveredAmount,
            claimsPerYear,
            avgAge: agesTotal / this.state.userData.length
        })
    }

    render() {
        let insuredIndividuals = this.state.userData.map((user, index) => {
            return (
                <div key={index}>
                    <span>{user.id}</span>
                    <span>{user.gender}</span>
                    <span>{user.dob}</span>
                </div>
            )
        });
        
        let metrics;
        let claimsPerYearArray = []
        if (this.state.totalCoveredAmount) {
            for (let year in this.state.claimsPerYear) {
                claimsPerYearArray.push(`${year}: ${this.state.claimsPerYear[year]}`)
            }
        let claimsPerYearFormatted = claimsPerYearArray.map((year, index) => {
            return (
                <div key={index}>
                    {year}
                </div>
            )
        })

            metrics = (
                <div className="metrics">
                    <p>{`Total Covered Amount: $${this.state.totalCoveredAmount}`}</p>
                    <p className="claims">Claims Per Year:</p>
                    <p>{claimsPerYearFormatted}</p>
                    <p>{`Average Age of Insured: ${this.state.avgAge}`}</p>
                </div>
            )
        }

        return (
            <div className="section">
                <button onClick={this.getUserData}>View All Insured Individuals</button>
                {insuredIndividuals}
                {metrics}
            </div>
        )
    }

}

export default ListAllIndividuals;