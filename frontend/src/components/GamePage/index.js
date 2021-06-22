import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';
import './GamePage.css'

function GamePage({ games }) {

    return (
        <>
            <div id='group-game-header'>
                <div id='game-image-container' >
                    <img src='./images/evolve.jpeg' alt='evolve cover art' />
                </div>
                <div id='basic-game-info'>
                    <div id="game-title-container">
                        <h2>Evolve</h2>
                    </div>
                    <div>
                        <h3>Available on:</h3>
                        <ul>
                            <li>Playstation 4</li>
                            <li>Playstation 5</li>
                            <li>Xbox One</li>
                            <li>Xbox Series S</li>
                            <li>PC</li>
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
                            <button>Join</button>
                        </li>
                    </nav>
                </ul>
            </div>
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
