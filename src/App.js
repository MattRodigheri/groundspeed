import React from 'react'
import './App.css';
import AddIndividual from './AddIndividual.js'
import AddEvent from "./AddEvent.js"
import ListAllIndividuals from "./ListAllIndividuals.js"
// import ListAllEventsByIndividual from "./ListAllEventsByIndividual"

class App extends React.Component {
  constructor() {
    super()

    this.state={

    }
  }

  render() {
    return (
      <div className="App">
        <ListAllIndividuals/>
        <AddEvent />
        <AddIndividual addIndividual={this.addIndividual}/>
      </div>
    );
  }
}

export default App;
