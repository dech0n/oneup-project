import React, { useEffect, useState } from 'react';
// import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar'

import { getSingleGameEvents, deleteEvent } from '../../store/events';
import NewEventForm from './NewEventForm';
import EditEventForm from './EditEventForm';
import './GameEventsPage.css'
import './Calendar.css'

function GameEventsPage({ id, game }) {
     let elKey = 1000; // for element keys
     let elKey2 = 2000; // for element keys
     let elKey3 = 3000; // for element keys
    const [showNewForm, setShowNewForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [eventId, setEventId] = useState(null)
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

    const onlyShowEditForm = (eventId) => {
        setShowNewForm(false);
        setShowEditForm(true);
        setEventId(eventId)
    }

    const handleDelete = async (eventId) => {
        await dispatch(deleteEvent(eventId));
    }

    // const eventButtons = userId === event.hostId ? (<><button>Edit</button>
    // <button>Delete</button></>) : (<button>RSVP</button>)

    return (
        <div id='event-page-container'>
            <h1>{game?.name} Events</h1>
            <div id='calendar-container'>
                <Calendar
                    calendarType={'US'}
                />
            </div>
            <button
                onClick={onlyShowNewForm}
            >New Event</button>
            {showEditForm ? (
                <>
                    <EditEventForm gameId={id} hostId={userId} eventId={eventId} hideForm={() => setShowEditForm(false)} />
                </>
            ) : null
            }
            {showNewForm ? (
                <>
                    <NewEventForm gameId={id} hostId={userId} hideForm={() => setShowNewForm(false)} />
                </>
            ) : null}
            <ul>
                {events?.map(event => {
                    return showEditForm || showNewForm ? null :
                        (
                            <>
                                <li key={event.name}>{event.name}</li>
                                <li key={elKey2}>{event.date}</li>
                                <button key={elKey3} onClick={() => onlyShowEditForm(event.id)}>Edit</button>

                                <button
                                key={event}
                                onClick={() => handleDelete(event.id)}
                                >Delete</button>

                                <button
                                key={++elKey}>RSVP</button>
                            </>
                        )
                })
                }
            </ul>
        </div >
    )
}

export default GameEventsPage;
