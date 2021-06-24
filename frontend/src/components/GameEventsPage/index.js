import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Calendar from 'react-calendar'

import './GameEventsPage.css'

function GameEventsPage() {

    return (
        <>
            <h1>Hello from Game Events Page!</h1>
            <Calendar />
        </>
    )
}

export default GameEventsPage;
