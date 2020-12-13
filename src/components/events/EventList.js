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

            <div className='event-actions'>
                <div className='flex-container'>
                    <div className='oras'>
                        
                        <select>
                            <option> Toate orasele </option>
                            <option> Bucuresti </option>
                            <option> Cluj </option>
                            <option> Iasi  </option>
                        </select>
                    </div>

                    <div className='categorie'>
                        
                        <select defaultValue='Toate categoriile'>
                            <option> Toate categoriile </option>
                            <option> Educatie </option>
                            <option> Sport </option>
                            <option> Cultural  </option>
                            <option> Party  </option>
                        </select>
                    </div>

                    <div className='sortare'>
                        
                        <select>
                            <option> Cele mai recente </option>
                            <option> Sortare dupa data crescator </option>
                            <option> Sortare dupa data descrescator </option>
                        
                        </select>
                    </div>
                </div>
            </div>

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