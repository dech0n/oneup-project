import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Calendar from 'react-calendar'

import { getEvents, getSingleGameEvents } from '../../store/events';
import NewEventForm from './NewEventForm';
import './GameEventsPage.css'
import './Calendar.css'

function GameEventsPage({ id }) {
    // NON-REDUX STATE VERSION
    // const [events, setEvents] = useState(null);
    // const [dates, setDates] = useState(null);
    // const [showForm, setShowForm] = useState(false)

    // useEffect(() => {
    //     const getGameEvents = async () => {
    //         const res = await fetch(`/api/events/game/${id}`)
    //         if (res.ok) {
    //             const events = await res.json()
    //             await setEvents(events)
    //         }
    //     }
    //     getGameEvents()

    // REDUX VERSION
    const [showForm, setShowForm] = useState(false)
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.list)
    const userId = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(getSingleGameEvents(id))
    }, [dispatch, id])

    return (
        <div id='event-page-container'>
            <h1>Hello from Game Events Page!</h1>
            <div id='calendar-container'>
                <Calendar
                    calendarType={'US'}
                />
            </div>
            <button
                onClick={() => setShowForm(true)}
            >New Event</button>
            {showForm ? (
                <>
                {/* pass in a prop to handle cancel button inside form */}
                    <NewEventForm gameId={id} hostId={userId} hideForm={() => setShowForm(false)}/>
                </>
            ) :
                events?.map(event => (
                    <ul>
                        <li key={event.id}>{event.name}</li>
                        <li key={event.date}>{event.date}</li>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>RSVP</button>
                    </ul>
                ))
                }
        </div>
    )
}

export default GameEventsPage;
