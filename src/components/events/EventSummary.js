import { Link } from "react-router-dom";
import './Events.css'

function EventSummary({event}){

    const {id, nume, organizator, descriere, banner, data} = event;

    return (
        <Link to={`/event/${id}`}>
            <div className='event'>
                <div className='event-image'>
                    <img src={banner} alt='event image'/>
                </div>

                <div className='event-header'>
                    <h2> {nume} </h2>
                    <p> {organizator} </p>
                    <p> {data} </p>
                </div>

                <div className='event-description'>
                   
                </div>
            </div>
        </Link>
    );

}

export default EventSummary