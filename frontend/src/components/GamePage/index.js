import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';
import './GamePage.css'

function GamePage({ games }) {

    return (
        <>
            <div id='game-page-container'>
                <div id='group-game-header'>
                    <div id='game-image-container' >
                        <img src='./images/evolve.jpeg' alt='evolve cover art' />
                    </div>
                    <div id='basic-game-info'>
                        <div id="game-title-container">
                            <h2 id='game-title'>Evolve</h2>
                        </div>
                        <div>
                            <h3>Play it on:</h3>
                            <ul>
                                <li className='platform-bullet'><span className='platform-name'>Playstation 4</span></li>
                                <li className='platform-bullet'><span className='platform-name'>Playstation 5</span></li>
                                <li className='platform-bullet'><span className='platform-name'>Xbox One</span></li>
                                <li className='platform-bullet'><span className='platform-name'>Xbox Series S</span></li>
                                <li className='platform-bullet'><span className='platform-name'>PC</span></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div id='game-navlink-container'>
                    <ul id='game-navlinks-list'>
                        <nav id="game-navbar">
                            <li className='game-navlinks-items'>
                                <NavLink className='game-navlink' to='/about'>About</NavLink>
                                <NavLink className='game-navlink' to='/events'>Events</NavLink>
                                <NavLink className='game-navlink' to='/members'>Members</NavLink>
                                <button id='join-button'>Join</button>
                            </li>
                        </nav>
                    </ul>
                </div>
                <div id='main-content-container'>
                    <div id='game-description'>
                        <h3 id='game-description-header'>What it's about</h3>
                        <p id='game-description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id='members-container'>
                        <h3>Who plays</h3>
                        <div id='members-grid'>

                            [Member list as a grid. Profile pics?]
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GamePage;
