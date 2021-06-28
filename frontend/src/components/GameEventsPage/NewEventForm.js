import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createEvent } from '../../store/events';
import { getPlatforms } from '../../store/platforms';
import './NewEventForm.css'

// TODO: add form validation on the backend
function NewEventForm({ gameId, hostId, hideForm }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [platformId, setPlatformId] = useState(1)
    const [name, setName] = useState('');
    const [date, setDate] = useState();
    const [capacity, setCapacity] = useState(0);
    const [description, setDescription] = useState('')

    const platforms = useSelector(state => state.platforms.list)

    useEffect(() => {
        dispatch(getPlatforms())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEventData = {
            hostId,
            gameId,
            platformId,
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

    const handleCancel = (e) => {
        history.push(`/games/${gameId}/events`)
        hideForm()
    }

    return (
        <>
            <h1>New Event</h1>
            <div id='new-event-form-container'>
                <form className='event-form' onSubmit={handleSubmit}>
                    <div className='label-container'>
                        <label>Platform</label>
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
                    </div>
                    <div className='label-container'>
                        <label>Title</label>
                        <input
                            className='event-input'
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </div>
                    <div className='label-container'>
                        <label htmlFor='date'>Date</label>
                        <input
                            className='event-input'
                            type='date'
                            id='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required />
                    </div>
                    <div className='label-container'>
                        <label htmlFor='capacity'>RSVP Limit</label>
                        <input
                            className='event-input'
                            type='number'
                            id='capacity'
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            required />
                    </div>
                    <div className='label-container'>
                        <label htmlFor='capacity'>Description</label>
                        <textarea
                            className='event-input'
                            id='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-buttons'>
                        <button
                        className='form-button'
                        type='submit'>Create</button>
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

export default NewEventForm;
