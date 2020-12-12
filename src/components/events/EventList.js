import { connect } from 'react-redux'
import EventSummary from './EventSummary';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


function EventList(props){

    const { events } = props;

    if(!events)
        return (
            <div>
                Loading
            </div>
        )
        
    return(
        <div>
        
            <div className='event-list'>
            
             {events.map((event) => {
                 return(
                     <EventSummary event = {event}/>
                 )
             })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    
    return {
        events: state.firestore.ordered.events
    }
    
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'events' }
    ])
)(EventList)