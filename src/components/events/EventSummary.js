import { Link } from "react-router-dom";

function EventSummary({event}){

    const {id, nume, organizator, descriere} = event;

    return (
        <Link to={`event/${id}`}>
            <div className='class'>
                <h3> { nume } </h3>
                <p> { organizator } </p>
                
                <p> { descriere }</p>
            </div>
        </Link>
    );

}

export default EventSummary