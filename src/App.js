import React from 'react'
import './App.css';
import AddIndividual from './AddIndividual.js'
import AddEvent from "./AddEvent.js"
import ListAllIndividuals from "./ListAllIndividuals.js"
import ListAllEventsByIndividual from './ListAllEventsByIndividual.js'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ListAllIndividuals/>
        <AddIndividual />
        <AddEvent />
        <ListAllEventsByIndividual/>
      </div>
    );
  }
}

export default App;
