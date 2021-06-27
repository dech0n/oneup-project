import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {createUserGame} from '../../store/userGames'

function GameNavbar({gameId}) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)

    const handleJoin = async () => {
        const userGameData = {
            userId,
            gameId
        }

        await dispatch(createUserGame(userGameData))
        // something here to change the appearance of the join button (i.e. "leave" button ?)
    }
    return (
        <div id='game-navlink-container'>
            <ul id='game-navlinks-list'>
                <nav id="game-navbar">
                    <li className='game-navlinks-items'>
                        <NavLink className='game-navlink' to={`/games/${gameId}`}>About</NavLink>
                        <NavLink className='game-navlink' to={`/games/${gameId}/events`}>Events</NavLink>
                        <NavLink className='game-navlink' to='/members'>Members</NavLink>
                        <button
                        id='join-button'
                        onClick={handleJoin}>Join</button>
                    </li>
                </nav>
            </ul>
        </div>
    )
}

export default GameNavbar;
