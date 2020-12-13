import { connect } from 'react-redux'
import EventSummary from './EventSummary';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './Events.css'

function EventList(props){

    const { events } = props;

    if(!events)
        return (
            <div>
                Loading
            </div>
        )
        
    return(
        <div className='event-list'>
            <div className='event-container'>
                {events.map((event) => {
                    
                        return(
                            <EventSummary event = {event} key={event.id}/>
                        )

                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
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