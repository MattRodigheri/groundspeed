import React from 'react'
import './App.css';
import AddIndividual from './AddIndividual.js'
// import AddEvent from "./AddEvent.js"
import ListAllIndividuals from "./ListAllIndividuals.js"
// import ListAllEventsByIndividual from "./ListAllEventsByIndividual"

class App extends React.Component {
  constructor() {
    super()

    this.state={

    }

    // this.addIndividual = this.addIndividual.bind(this)
  }

  // addIndividual = (event) => {
  //   console.log(event)
  // }

  render() {
    return (
      <div className="App">
        <ListAllIndividuals/>
        <AddIndividual addIndividual={this.addIndividual}/>
      </div>
    );
  }
}

export default App;
