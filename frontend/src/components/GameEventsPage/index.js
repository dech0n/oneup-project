import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Calendar from 'react-calendar'

import NewEventForm from './NewEventForm';
import './GameEventsPage.css'
import './Calendar.css'

function GameEventsPage({ id }) {
    const [events, setEvents] = useState(null);
    const [dates, setDates] = useState(null);
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        const getGameEvents = async () => {
            const res = await fetch(`/api/events/game/${id}`)
            if (res.ok) {
                const events = await res.json()
                await setEvents(events)
            }
        }
        getGameEvents()

        // 2021-06-22T08:25:48.893Z <-- event.date format
        const getEventDates = async () => {
            const dates = await events.map(event => event.date.slice(0, 10).split('-'))
            await setDates(dates)
        }
        // getEventDates()

        return () => { }
        // data leak when I add events to dependency array
    }, [id])

    // OR just have the DB store dates as milliseconds ?
    const getDate = (date, type) => {
        switch (type.toLowerCase()) {
            case 'day':
                const day = date[2].slice(0)
                return +day
            case 'month':
                const month = date[1].slice(0)
                return +month
            case 'year':
                const year = date[0].slice(0)
                return +year
            default:
                return date;
        }
    }

    const addToCalendar = async ({ date, view }) => {
        return await view === 'month' && date.getDate() === getDate(dates[0], 'day') ? <p>Event Today!</p> : null
        // console.log('DATE', date)
        // console.log('VIEW', view)
    }

    if (!events) return null;

    return (
        <div id='event-page-container'>
            <h1>Hello from Game Events Page!</h1>
            <div id='calendar-container'>
                <Calendar
                    calendarType={'US'}
                // tileContent={addToCalendar}
                // onChange={() => console.log('Hello')}
                />
            </div>
            <button
                onClick={() => setShowForm(true)}
            >New Event</button>
            {showForm ? (
                <>
                {/* pass in a prop to handle cancel button inside form */}
                    <NewEventForm id={id}/>
                    <button
                        onClick={() => setShowForm(false)}>Cancel</button>
                </>
            ) :
                events.map(event => (
                    <ul>
                        <li key={event.id}>{event.name}</li>
                        <li key={event.date}>{event.date}</li>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>RSVP</button>
                    </ul>
                ))}
        </div>
    )
}

export default GameEventsPage;
