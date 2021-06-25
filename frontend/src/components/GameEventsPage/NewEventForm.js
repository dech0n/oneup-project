import React, { useState } from 'react';

function NewEventForm({ id }) {
    //name, date, capacity, description
    const [name, setName] = useState('');
    const [date, setDate] = useState();
    const [capacity, setCapacity] = useState(0);
    const [description, setDescription] = useState('')




    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEventData = {
            gameId: id,
            name,
            date,
            capacity,
            description
        }

        await fetch(`api/events/game/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEventData)
        })
    }

    return (
        <>
            <h1>New Event</h1>
            <div id='new-event-form-container'>
                <form
                    onSubmit={handleSubmit}>
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
                </form>
                <button type='submit'>Create</button>
            </div>
        </>
    )
}

export default NewEventForm;
