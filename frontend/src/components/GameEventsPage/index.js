import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar'

import { getEvents, getSingleGameEvents } from '../../store/events';
import NewEventForm from './NewEventForm';
import EditEventForm from './EditEventForm';
import './GameEventsPage.css'
import './Calendar.css'

function GameEventsPage({ id }) {
    const [showNewForm, setShowNewForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    // const [eventId, setEventId] = useState(null)
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.list)
    const userId = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(getSingleGameEvents(id))
    }, [dispatch, id])

    const onlyShowNewForm = () => {
        setShowNewForm(true);
        setShowEditForm(false);
    }

    const onlyShowEditForm = () => {
        setShowNewForm(false);
        setShowEditForm(true);
    }

    // const eventButtons = userId === event.hostId ? (<><button>Edit</button>
    // <button>Delete</button></>) : (<button>RSVP</button>)

    return (
        <div id='event-page-container'>
            <h1>Hello from Game Events Page!</h1>
            <div id='calendar-container'>
                <Calendar
                    calendarType={'US'}
                />
            </div>
            <button
                onClick={onlyShowNewForm}
            >New Event</button>
            {showNewForm ? (
                <>
                    <NewEventForm gameId={id} hostId={userId} hideForm={() => setShowNewForm(false)} />
                </>
            ) :(showEditForm ? (
                <>
                    <EditEventForm gameId={id} hostId={userId} hideForm={() => setShowEditForm(false)} />
                </>
            ) :
                events?.map(event => {
                    // return showEditForm ? null :
                    return (
                    <>
                        <ul>
                            <li key={event.name}>{event.name}</li>
                            <li key={event.date}>{event.date}</li>
                            <button onClick={onlyShowEditForm}

                            >Edit</button>
                            <button>Delete</button>
                            <button>RSVP</button>
                        </ul>
                    </>
                )}))
            }
            {/* {showEditForm ? (
                <>
                    <EditEventForm gameId={id} hostId={userId} hideForm={() => setShowEditForm(false)} />
                </>
            ) : null
            } */}
        </div >
    )
}

export default GameEventsPage;
