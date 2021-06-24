import React from 'react';
import { NavLink } from 'react-router-dom';

function GameNavbar({id}) {
    return (
        <div id='game-navlink-container'>
            <ul id='game-navlinks-list'>
                <nav id="game-navbar">
                    <li className='game-navlinks-items'>
                        <NavLink className='game-navlink' to={`/games/${id}`}>About</NavLink>
                        <NavLink className='game-navlink' to={`/games/${id}/events`}>Events</NavLink>
                        <NavLink className='game-navlink' to='/members'>Members</NavLink>
                        <button id='join-button'>Join</button>
                    </li>
                </nav>
            </ul>
        </div>
    )
}

export default GameNavbar;
