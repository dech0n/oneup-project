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
    let elKey4 = 4000; // for element keys
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
        const rsvpData = {
            userId,
            platformId,
            eventId,
        }
        await dispatch(createRsvp(rsvpData))
    }

    //TODO: change RSVP to 'leave' if already RSVP'd
    //TODO: only show  'EDIT' / 'DELETE' buttos if user owns event
    // const eventButtons = userId === event.hostId ? (<><button>Edit</button>
    // <button>Delete</button></>) : (<button>RSVP</button>)

    return (
        <div id='event-page-container'> {/* flex */}
            <div id='calendar-container'>
                <Calendar
                    calendarType={'US'}
                />
                <div id='new-event-button-container'>
                    <button id='new-event-button'
                            className='event-button'
                        onClick={onlyShowNewForm}
                    >New Event</button>
                </div>
            </div>
            <div id='edit-event-form'>
                {showEditForm ? (
                    <>
                        <EditEventForm gameId={gameId} hostId={userId} eventId={eventId} hideForm={() => setShowEditForm(false)} />
                    </>
                ) : null
                }
            </div>
            <div id='new-event-form'>
                {showNewForm ? (
                    <>
                        <NewEventForm gameId={gameId} hostId={userId} hideForm={() => setShowNewForm(false)} />
                    </>
                ) : null}
            </div>
            <div id='event-list-container'>
                {showEditForm || showNewForm ? null : (
                    <h1 className='event-page' id='#event-page-header'>{game?.name} Events</h1>

                )}
                <ul id='event-list'>
                    {events?.map(event => {
                        return showEditForm || showNewForm ? null :
                            (
                                <>
                                    <li key={event.name}><h2 className='event-header'>{event.name}<br /><span className='event-date'>{event.date}</span></h2></li>
                                    {/* <li key={elKey2}>{event.date}</li> */}
                                    <li key={elKey3}>{event.description}</li>
                                    <div className='event-buttons'>
                                        <button key={elKey4}
                                            onClick={() => onlyShowEditForm(event.id)}
                                            className='edit-button event-button'>Edit</button>

                                        <button
                                            key={event}
                                            onClick={() => handleDelete(event.id)}
                                            className='delete-button event-button'
                                        >Delete</button>

                                        <button
                                            key={++elKey}
                                            onClick={() => handleRsvp(event.id, event.platformId)}
                                            className='rsvp-button event-button'>RSVP</button>
                                    </div>
                                </>
                            )
                    })
                    }
                </ul>
            </div>
        </div >
    )
}

export default GameEventsPage;
