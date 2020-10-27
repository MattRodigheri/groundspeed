import React from 'react'
import './App.css';
import AddIndividual from './AddIndividual.js'
import AddEvent from "./AddEvent.js"
import ListAllIndividuals from "./ListAllIndividuals.js"
import ListAllEventsByIndividual from "./ListAllEventsByIndividual"

class App extends React.Component {
  constructor() {
    super()

    this.state={

    }

    this.addIndividual = this.addIndividual.bind(this)
  }

  addIndividual = () => {
    console.log('test')
  }

  render() {
    return (
      <div className="App">
        <AddIndividual addIndividual={this.addIndividual}/>
        {/* <AddEvent/>
        <ListAllIndividuals/>
        <ListAllEventsByIndividual/> */}
      </div>
    );
  }
}

export default App;
