import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateEvent } from '../../store/events';
import { getPlatforms } from '../../store/platforms';

// TODO: add form validation on the backend
function EditEventForm({ gameId, hostId, hideForm, eventId }) {
    // console.log('EVENT ID', eventId)
    // get the event to be edited
    const event = useSelector(state => {
        return state.events.list.find(event => event.id === eventId)
    })
    const dispatch = useDispatch();
    const history = useHistory();
    const [platformId, setPlatformId] = useState(event.platformId)
    const [name, setName] = useState(event.name);
    const [date, setDate] = useState();
    const [capacity, setCapacity] = useState(event.capacity);
    const [description, setDescription] = useState(event.description)


    const platforms = useSelector(state => state.platforms.list)

    useEffect(() => {
        dispatch(getPlatforms())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedEventData = {
            hostId,
            gameId,
            platformId,
            name,
            date,
            capacity,
            description
        }

        // send the data to the store via thunk
        /* const updatedEvent = */await dispatch(updateEvent(eventId, updatedEventData))
        // if (updatedEvent) {
        history.push(`/games/${gameId}/events`)
        hideForm()
        // }
    }

    const handleCancel = (e) => {
        history.push(`/games/${gameId}/events`)
        hideForm()
    }

    return (
        <>
            <h1>Edit Event</h1>
            <div id='current-event-div'>
                <h3>{event.name} @ {event.date}</h3>
                {/* <p>{event.date}</p>
                 <p>{event.capacity}</p>
                <p>{event.description}</p> */}
            </div>
            <div id='update-event-form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='field-container'>
                        <div className='field-container'>
                            <select
                                className='event-input'
                                name='platform'
                                value={platformId}
                                onChange={(e) => setPlatformId(e.target.value)}
                                required>
                                {platforms?.map(platform => (
                                    <option
                                        key={platform}
                                        value={platform.id}>
                                        {platform.type}
                                    </option>
                                ))}
                            </select>
                            <div>
                                <label>Platform</label>
                            </div>
                        </div>
                        <input
                            className='event-input'
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={event.name}
                            required />
                        <div>
                            <label>Title</label>
                        </div>
                    </div>
                    <div className='field-container'>
                        <input
                            className='event-input'
                            type='date'
                            id='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder={event.date}
                            required />
                        <div>
                            <label htmlFor='date'>Date</label>
                        </div>
                    </div>
                    <div className='field-container'>
                        <input
                            className='event-input'
                            type='number'
                            id='capacity'
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            placeholder={event.capacity}
                            required />
                        <div>
                            <label htmlFor='capacity'>RSVP Limit</label>
                        </div>
                    </div>
                    <div className='field-container'>
                        <textarea
                            className='event-input'
                            id='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={event.description} />
                        <div>
                            <label
                            htmlFor='capacity'>Description</label>
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button
                        className='form-button'
                        type='submit'>Update</button>
                        <button
                            className='form-button'
                            type='button'
                            onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditEventForm;
