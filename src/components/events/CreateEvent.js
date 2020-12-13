import { useState } from "react"
import { connect } from "react-redux";
import { createEvent } from '../../store/actions/eventActions'

function CreateEvent(props){

    const [formData, setFormData] = useState({})

    const handleChange = (e) => {

        if(e.target.type === 'file')
            setFormData(formData => ({...formData, [e.target.id]: e.target.files[0]}));

        else
            setFormData(formData => ({...formData, [e.target.id]: e.target.value}));

            console.log(formData)
    }

    const handleSubmit = e => {
        e.preventDefault(); 
        props.createEvent(formData)
    }
    
     
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h5> Create Event </h5>

                <div className='input-field'>
                    <label htmlFor='nume'> Nume Eveniment </label>
                    <input type="text" onChange = {handleChange} id='nume'/>
                </div>

                <div className='input-field'>
                    <label htmlFor='organizator'> Organizator </label>
                    <input type="text" onChange = {handleChange} id='organizator'/>
                </div>

                <div className='input-field'>
                    <label htmlFor='organizator'> Locatie </label>
                    <input type="text" onChange = {handleChange} id='locatie'/>
                </div>

                <div className='input-field'>
                    <label htmlFor='organizator'> Cateogrii </label>
                    <input type="text" onChange = {handleChange} id='categorii'/>
                </div>

                <div className='input-field'>
                    <label htmlFor='data'> Data </label>
                    <input type="date" onChange={handleChange} id='data' />
                </div>

                <div className='input-field'>
                    <label htmlFor='descriere'> Descirere </label>
                    <textarea id='descriere' onChange={handleChange}></textarea>
                </div>

                <div className='input-field'>
                    <label htmlFor='banner'> Banner link </label>
                    <input type="text" onChange = {handleChange} id='banner'/>
                </div>

                <div className='input-field'>
                    <label htmlFor='banner'> Link inscriere </label>
                    <input type="text" onChange = {handleChange} id='join'/>
                </div>

                <div className='input-field'>
                    <label htmlFor='banner'> Contact </label>
                    <input type="text" onChange = {handleChange} id='email'/>
                </div>


                <input type='submit' />
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(CreateEvent)