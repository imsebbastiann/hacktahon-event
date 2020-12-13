import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './Events.css'
import EventSummary from './EventSummary'

function Event(props){
    
    // Get Event ID
    const {event , events} = props
    

    // Check if event is loaded
    if(event && events){
        
        const categorii = event.categorii
        const similarEvents = []
        const currentEventNume = event.nume

        events.forEach((event) =>{
            let counter  = 0
            
            if(event.nume !== currentEventNume){
                

                event.categorii.forEach((categorie) => {
                    
                    categorii.forEach(item => {
                        if(item === categorie)
                            counter ++;
                    })
                })

            if(counter > 0)
                similarEvents.push(event)
            }        
        })

        console.log(similarEvents);

        return (
            <div className='container event-page'>
                <div className='event-page-header-image'>
                    <img src= {event.banner} alt='event-image'/>
                </div>

                <div className="page-container wrapper">

                    {/* Event Header  */}
                    <div className='event-page-header'>
                            <div className='event-page-header-buttons'>
                                {/* de adaugat icons */}
                            </div>

                            <div className='event-page-body-title'>
                                    <p> <i class="far fa-calendar"></i> {event.data} </p>
                                    <h1> {event.nume} </h1>
                                    <p> <i class="fas fa-map-marker-alt"></i> {event.locatie}</p>
                            </div>
                            
                    </div>
                     
                     <div className='flex-container'>
                        <div className='event-page-body'>
                            

                            <div className='event-page-body-category'>
                                <h3> Categorii </h3>
                                <div className='flex-container'>

                                    {event.categorii && event.categorii.map((categorie) => {
                                        return(
                                            <div className='category'>
                                                <p> {categorie} </p>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>

            

                            <div className='event-page-body-description'>
                                <h3> Descriere </h3>
                                <p> {event.descriere} </p>
                            </div>
                        </div>

                        <div className='event-page-body-right'>
                            <div className='event-page-body-category'>
                                    <h3> Organizatori </h3>
                                    <div className='flex-container'>
                                        <div className='category'>
                                            <p> {event.organizator} </p>
                                        </div>
                                    </div>
                            </div>

                            <div className='event-page-body-contact'>
                                <h3> Date de contact </h3>
                                <div className='contact-buttons'>
                                    <button> Email </button>
                                    <button> Phone </button>
                                    <button> Site </button>
                                </div>
                            </div>
                        </div>
                     </div>
                     {/* Event Footer  */}
                     <div className='event-page-body-footer'>
                         <button> Inscrite-te </button>
                     </div>
                    
                    {similarEvents.length != 0 && (
                        
                        <div className='similar-events'>
                            <h2> Evenimente din aceeasi categorie </h2>
                            <div className='grid'>
                                {similarEvents.map((event) => {
                                    return (
                                        <EventSummary event={event} />
                                    )
                                })}
                            </div>
                    </div>

                    )
                    
                    }
                     
                </div>
                
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

    console.log(state)

    return{
        event: event,
        events: state.firestore.ordered.events
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'events' }
    ])
)(Event)