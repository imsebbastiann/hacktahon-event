import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function Event(props){
    
    // Get Event ID
    const {event} = props
    if(event){
        console.log(event)
        return(
            <div>
                <h1> Nume: {event.nume}  </h1>
                <h1> Organizator: {event.organizator} </h1>
            </div>
        )
    }
    else 
        return (
            <div>
                Loading
            </div>
        )
}


const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id
    const events = state.firestore.data.events
    const event = events ? events[id] : null

    return{
        event: event
    }
    
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'events' }
    ])
)(Event)