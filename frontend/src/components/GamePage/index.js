import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';

import * as sessionActions from '../../store/session'; import './GamePage.css'

function GamePage({games}) {

    return (
        <>
            <div id='group-game-header'>
                <div id='game-image-container'>
                    [Set game image as container bg]
                </div>
                <div id='basic-game-info'>
                    <div id="game-title-container">
                        <h2>[Game Name]</h2>
                    </div>
                    <div>
                        [Platforms game can be played on]
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/events'>Events</NavLink>
                    <NavLink to='/members'>Members</NavLink>
                    <button>Join</button>
                </li>
            </ul>
            <div id='main-content-container'>
                <div id='game-description'>
                    <h3>[Description Header]</h3>
                    <p>[Description text]</p>
                </div>
                <div id='members-container'>
                    [Member list as a grid. Profile pics?]
                </div>
            </div>
        </>
    )
}

export default GamePage;
