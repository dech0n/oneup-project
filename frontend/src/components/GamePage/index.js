import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';

import * as sessionActions from '../../store/session';import './GamePage.css'

function GamePage() {

    return (
        <>
        <ul>
            <li>
                <NavLink>About</NavLink>
                <NavLink>Events</NavLink>
                <NavLink>Members</NavLink>
            </li>
        </ul>
        </>
    )
}

export default GamePage;
