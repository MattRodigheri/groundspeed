const ListAllEventsByIndividual = (props) => {
    let history = props.healthHistory.map((record, index) => {
        return (
        <div key={index}>
            <span>{record.date}</span>
            <span>{record.type}</span>
            <span>{record.billedAmount}</span>
            <span>{record.coveredAmount}</span>
        </div>
        )
    })    
    return (
        <div>
            {history}
        </div>
    )
}

export default ListAllEventsByIndividual;