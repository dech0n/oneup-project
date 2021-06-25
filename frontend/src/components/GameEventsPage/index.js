import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Calendar from 'react-calendar'

import './GameEventsPage.css'
import 'react-calendar/dist/Calendar.css'

function GameEventsPage() {

    const datesToAddContentTo = [new Date(), new Date(2020, 6, 25), new Date(2020, 6, 27)];

    function tileContent({ date, view }) {
        // Add class to tiles in month view only
        if (view === 'day') {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (datesToAddContentTo.find(dDate => dDate === new Date())) {
                // whatever 
                return 'My content';
            }
        }
    }

    return (
        <>
            <h1>Hello from Game Events Page!</h1>
            <Calendar
                calendarType={'US'}
                tileContent={tileContent} />
        </>
    )
}

export default GameEventsPage;
