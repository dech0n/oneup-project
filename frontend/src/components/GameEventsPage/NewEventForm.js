import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createEvent } from '../../store/events';

function NewEventForm({ gameId, hostId, hideForm }) {
    const dispatch = useDispatch();
    // const history = useHistory();
    const [name, setName] = useState('');
    const [date, setDate] = useState();
    const [capacity, setCapacity] = useState(0);
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEventData = {
            hostId,
            gameId,
            name,
            date,
            capacity,
            description
        }

        // send the data to the store via thunk
        const event = await dispatch(createEvent(newEventData))
        if (event) {
            hideForm()
        }
    }

    return (
        <>
            <h1>New Event</h1>
            <div id='new-event-form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='label-container'>
                        <label>Title</label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </div>
                    <div className='label-container'>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            id='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required />
                    </div>
                    <div className='label-container'>
                        <label htmlFor='capacity'>RSVP Limit</label>
                        <input
                            type='number'
                            id='capacity'
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            required />
                    </div>
                    <div className='label-container'>
                        <label htmlFor='capacity'>Description</label>
                        <textarea
                            id='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <button type='submit'>Create</button>
                    <button
                        type='button'
                        onClick={hideForm}>Cancel</button>
                </form>
            </div>
        </>
    )
}

export default NewEventForm;
