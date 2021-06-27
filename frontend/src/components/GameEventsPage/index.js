import React, { useEffect, useState } from 'react';
// import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar'

import { getSingleGameEvents, deleteEvent } from '../../store/events';
import NewEventForm from './NewEventForm';
import EditEventForm from './EditEventForm';
import './GameEventsPage.css'
import './Calendar.css'
import { createRsvp } from '../../store/rsvps';

function GameEventsPage({ gameId, game }) {
     let elKey = 1000; // for element keys
     let elKey2 = 2000; // for element keys
     let elKey3 = 3000; // for element keys
    const [showNewForm, setShowNewForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [eventId, setEventId] = useState(null)
    // const [platformId, setPlatformId] = useState(null)
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.list)
    const userId = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(getSingleGameEvents(gameId))
    }, [dispatch, gameId])

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

    // maybe include this in the `handleSubmit` function for a new event to auto-RSVP the host
    const handleRsvp = async (eventId, platformId) => {
        //TODO: take userId, event.platformId
        // might have to create more gamertag seeds so every user has a gamertag on every platform

        const rsvpData = {
            userId,
            platformId,
            eventId,
        }
        console.log(rsvpData) //!
        await dispatch(createRsvp(rsvpData))
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
                    <EditEventForm gameId={gameId} hostId={userId} eventId={eventId} hideForm={() => setShowEditForm(false)} />
                </>
            ) : null
            }
            {showNewForm ? (
                <>
                    <NewEventForm gameId={gameId} hostId={userId} hideForm={() => setShowNewForm(false)} />
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
                                key={++elKey}
                                onClick={() => handleRsvp(event.id, event.platformId)}>RSVP</button>
                            </>
                        )
                })
                }
            </ul>
        </div >
    )
}

export default GameEventsPage;
