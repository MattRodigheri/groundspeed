

function AddIndividual(props) {
    return (
      <div>
        <h1>Add Individual:</h1>
        <h3>Gender:</h3>
        <input type="text"/>
        <h3>Date of Birth:</h3>
        <input type="text"/>
        <h3>Social Security Number:</h3>
        <input type="text"/>
        <p>clicking 'Add' will generate a unique user ID</p>
        <button onClick={props.addIndividual}>Add</button>
        <div className="idOutput"></div>
      </div>
    );
  }
  
  export default AddIndividual;